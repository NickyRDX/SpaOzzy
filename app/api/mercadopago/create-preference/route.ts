import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Configurar cliente de Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      reservaId,
      servicio,
      precio,
      nombreCompleto,
      nombreMascota,
      fecha,
      horario,
    } = body;

    // Usar la URL base de la aplicación
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: [
          {
            title: `Servicio ${servicio} - ${nombreMascota}`,
            description: `Reserva para ${nombreCompleto} el ${fecha} a las ${horario}`,
            quantity: 1,
            unit_price: Number(precio),
            currency_id: "ARS",
            id: String(reservaId),
          },
        ],
        back_urls: {
          success: `${baseUrl}/pago/success`,
          failure: `${baseUrl}/pago/failure`,
          pending: `${baseUrl}/pago/pending`,
        },
        notification_url: `${baseUrl}/api/mercadopago/webhook`,
        metadata: {
          reserva_id: String(reservaId),
          usuario_id: String(body.usuarioId),
        },
      },
    });

    return NextResponse.json({
      preferenceId: response.id,
      initPoint: response.init_point,
    });
  } catch (error) {
    console.error("Error creating preference:", error);
    return NextResponse.json(
      { error: "Error al crear preferencia de pago" },
      { status: 500 }
    );
  }
}
