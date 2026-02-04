import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { supabase } from "@/lib/supabase";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Mercado Pago envía notificaciones de tipo "payment"
    if (body.type === "payment") {
      const paymentId = body.data.id;

      const payment = new Payment(client);
      const paymentInfo = await payment.get({ id: paymentId });

      // Obtener el ID de la reserva desde los metadatos
      const reservaId = paymentInfo.metadata?.reserva_id;

      if (paymentInfo.status === "approved") {
        // Actualizar el estado de la reserva en Supabase
        await supabase
          .from("turnos")
          .update({
            estado: "confirmado",
            pago_id: paymentId,
          })
          .eq("id", reservaId);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
