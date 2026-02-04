"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentSuccess() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/dashboard");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-4">
              <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            ¡Pago Exitoso!
          </h1>

          <p className="text-slate-600 dark:text-slate-400 mb-2">
            Tu reserva ha sido confirmada correctamente.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mb-8">
            Recibirás un email con los detalles de tu reserva.
          </p>

          <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Serás redirigido al dashboard en <strong>{countdown}</strong>{" "}
              segundos...
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => router.push("/dashboard")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base"
            >
              Ir al Dashboard Ahora
            </Button>

            <Button
              onClick={() => router.push("/")}
              variant="ghost"
              className="w-full text-slate-600 dark:text-slate-400 py-6"
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
