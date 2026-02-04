"use client";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentPending() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center">
          {/* Icono de pendiente */}
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-yellow-100 dark:bg-yellow-900/20 p-4">
              <Clock className="w-16 h-16 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Pago Pendiente
          </h1>

          {/* Descripción */}
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            Tu pago está siendo procesado.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mb-8">
            Te notificaremos cuando se confirme el pago.
          </p>

          {/* Información adicional */}
          <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>¿Qué significa esto?</strong>
              <br />
              Algunos métodos de pago pueden tardar hasta 48 horas en
              procesarse.
            </p>
          </div>

          {/* Botones */}
          <div className="space-y-3">
            <Link href="/dashboard" className="block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base">
                Ver Mis Reservas
              </Button>
            </Link>

            <Link href="/" className="block">
              <Button
                variant="ghost"
                className="w-full text-slate-600 dark:text-slate-400 py-6"
              >
                Volver al Inicio
              </Button>
            </Link>
          </div>

          {/* Ayuda */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Puedes consultar el estado de tu reserva en tu dashboard en
              cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
