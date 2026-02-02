"use client";

import React from "react";
import Link from "next/link";
import { List, PawPrint, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface AppointmentRow {
  id: string;
  petName: string;
  service: string;
  dateTime: string;
  status: "Confirmado" | "Pendiente" | "Cancelado";
}

const defaultRows: AppointmentRow[] = [
  {
    id: "1",
    petName: "Max",
    service: "Baño y Corte",
    dateTime: "25 Oct, 10:30 AM",
    status: "Confirmado",
  },
];

interface ScheduledAppointmentsTableProps {
  className?: string;
  rows?: AppointmentRow[];
  /** Texto del enlace "Ver todo el historial" */
  viewAllLabel?: string;
  viewAllHref?: string;
}

export default function ScheduledAppointmentsTable({
  className,
  rows = defaultRows,
  viewAllLabel = "Ver todo el historial",
  viewAllHref = "#",
}: ScheduledAppointmentsTableProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 p-4">
        <div className="flex items-center gap-2">
          <List size={20} className="shrink-0 text-blue-500" />
          <h2 className="text-lg font-bold text-slate-800">
            Turnos Programados
          </h2>
        </div>
        <Link
          href={viewAllHref}
          className="text-sm font-semibold text-blue-500 hover:text-blue-600 hover:underline"
        >
          {viewAllLabel}
        </Link>
      </div>

      {/* Tabla desktop */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Mascota
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Servicio
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Fecha y hora
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Estado
              </th>
              <th className="w-12 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <PawPrint size={18} className="shrink-0 text-blue-500" />
                    <span className="font-medium text-slate-800">
                      {row.petName}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-600">{row.service}</td>
                <td className="px-4 py-3 text-slate-600">{row.dateTime}</td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white",
                      row.status === "Confirmado" && "bg-emerald-500",
                      row.status === "Pendiente" && "bg-amber-500",
                      row.status === "Cancelado" && "bg-red-500"
                    )}
                  >
                    {row.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Más acciones"
                  >
                    <MoreVertical size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards móvil */}
      <div className="flex flex-col md:hidden">
        {rows.map((row) => (
          <div
            key={row.id}
            className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-4 last:border-0"
          >
            <div className="flex items-center gap-3">
              <PawPrint size={20} className="shrink-0 text-blue-500" />
              <div>
                <p className="font-semibold text-slate-800">{row.petName}</p>
                <p className="text-sm text-slate-600">{row.service}</p>
                <p className="text-xs text-slate-500">{row.dateTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold text-white",
                  row.status === "Confirmado" && "bg-emerald-500",
                  row.status === "Pendiente" && "bg-amber-500",
                  row.status === "Cancelado" && "bg-red-500"
                )}
              >
                {row.status}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-slate-500"
                aria-label="Más acciones"
              >
                <MoreVertical size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
