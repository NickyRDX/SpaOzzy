"use client";
import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentFailure() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
          {/* Icono de error */}
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-red-100 dark:bg-red-900/20 p-4">
              <XCircle className="w-16 h-16 text-red-600 dark:text-red-400" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Pago Rechazado
          </h1>

          {/* Descripción */}
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            Hubo un problema al procesar tu pago.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mb-8">
            No se realizó ningún cargo a tu tarjeta.
          </p>

          {/* Botones */}
          <div className="space-y-3">
            <Link href="/reservar" className="block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base">
                Intentar Nuevamente
              </Button>
            </Link>

            <Link href="/dashboard" className="block">
              <Button
                variant="ghost"
                className="w-full text-slate-600 dark:text-slate-400 py-6"
              >
                Volver al Dashboard
              </Button>
            </Link>
          </div>

          {/* Ayuda */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Si el problema persiste, puedes elegir pagar en efectivo al
              momento de la cita.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
