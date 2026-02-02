"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NextAppointmentCardProps {
  className?: string;
  /** URL de la imagen de la mascota (placeholder si no hay) */
  imageUrl?: string;
  petName?: string;
  serviceName?: string;
  location?: string;
  date?: string;
  time?: string;
  professional?: string;
  daysLeft?: number;
  status?: "Confirmado" | "Pendiente" | "Cancelado";
}

const defaultImage =
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=240&fit=crop";

export default function NextAppointmentCard({
  className,
  imageUrl = defaultImage,
  petName = "Max",
  serviceName = "Baño y Corte Completo",
  location = "DMC, Don Orione 2825, T4000 San Miguel de Tucumán",
  date = "Viernes, 25 Oct",
  time = "10:30 AM",
  professional = "Lucía M.",
  daysLeft = 2,
  status = "Confirmado",
}: NextAppointmentCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-48 w-full shrink-0 sm:h-[200px] sm:w-56">
          <Image
            src={imageUrl}
            alt={petName}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 224px"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <Calendar size={20} className="shrink-0 text-blue-500" />
              <h2 className="text-lg font-bold text-slate-800">
                Turno Próximo
              </h2>
            </div>
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold text-white",
                status === "Confirmado" && "bg-emerald-500",
                status === "Pendiente" && "bg-amber-500",
                status === "Cancelado" && "bg-red-500"
              )}
            >
              {status}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-bold text-slate-800">
            {petName} - {serviceName}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin size={16} className="shrink-0 text-slate-400" />
            {location}
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  FECHA
                </p>
                <p className="font-medium text-slate-700">{date}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  HORARIO
                </p>
                <p className="font-medium text-slate-700">{time}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  PROFESIONAL
                </p>
                <p className="font-medium text-slate-700">{professional}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-start sm:items-end">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                FALTAN
              </p>
              <p className="text-xl font-bold text-blue-500 sm:text-2xl">
                {String(daysLeft).padStart(2, "0")} Días
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-lg border-blue-500 bg-white text-blue-500 hover:bg-blue-50 hover:text-blue-600"
            >
              Modificar
            </Button>
            <Button
              size="sm"
              className="rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              Ver detalles
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
