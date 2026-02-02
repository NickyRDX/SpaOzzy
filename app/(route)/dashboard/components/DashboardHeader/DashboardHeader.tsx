"use client";

import React from "react";
import { Search, Bell, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  className?: string;
}

export default function DashboardHeader({ className }: DashboardHeaderProps) {
  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center justify-center-safe gap-3 border-b border-slate-200 bg-white px-4 py-2 md:gap-4 md:px-6",
        className
      )}
    >
      <div className="relative flex-1 max-w-md">
        <Search
          className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          aria-hidden
        />
        <Input
          type="search"
          placeholder="Buscar turnos, mascotas..."
          className="h-10 rounded-lg border-0 bg-slate-100 pl-9 text-slate-700 placeholder:text-slate-400 focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-500/20"
          aria-label="Buscar turnos y mascotas"
        />
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-600 hover:bg-slate-100 hover:text-slate-800"
          aria-label="Notificaciones"
        >
          <Bell size={20} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-600 hover:bg-slate-100 hover:text-slate-800"
          aria-label="Configuración"
        >
          <Settings size={20} />
        </Button>
      </div>
    </header>
  );
}
