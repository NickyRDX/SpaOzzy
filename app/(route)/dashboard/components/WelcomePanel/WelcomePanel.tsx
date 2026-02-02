"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WelcomePanelProps {
  className?: string;
}

export default function WelcomePanel({ className }: WelcomePanelProps) {
  const { user } = useUser();
  const nombre = user?.firstName ?? "Usuario";

  return (
    <section
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4",
        className
      )}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
          PANEL DE CONTROL
        </p>
        <h1 className="mt-1 text-2xl font-bold text-slate-800 sm:text-3xl">
          ¡Hola, {nombre}!
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Tienes un turno programado para esta semana.
        </p>
      </div>
      <Button
        className="w-full shrink-0 gap-2 rounded-lg bg-blue-500 font-semibold text-white hover:bg-blue-600 sm:w-auto sm:px-6"
        size="lg"
      >
        <Plus size={20} className="shrink-0" />
        Agendar nuevo turno
      </Button>
    </section>
  );
}
