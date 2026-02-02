"use client";

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SiderbarMax from "../SidebarMax/SiderbarMax";
import { DashboardHeader } from "../DashboardHeader";
import { cn } from "@/lib/utils";

interface NavDashboardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Layout del dashboard: sidebar (desktop) o drawer (móvil) + header + contenido.
 * Adaptado a móvil: sidebar se convierte en menú hamburguesa con Sheet.
 */
export default function NavDashboard({
  children,
  className,
}: NavDashboardProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen w-full bg-white text-slate-800",
        className
      )}
    >
      {/* Sidebar desktop: visible solo en lg+ */}
      <aside className="hidden shrink-0 lg:block">
        <SiderbarMax />
      </aside>

      {/* Área principal: header + contenido */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Barra superior: hamburguesa (móvil) + buscador + iconos */}
        <div className="flex h-14 shrink-0 items-center gap-2 border-b border-slate-200 bg-white px-3 md:px-6">
          <div className="shrink-0 lg:hidden">
            <Sidebar />
          </div>
          <div className="min-w-0 flex-1">
            <DashboardHeader className="border-0 p-0 h-full" />
          </div>
        </div>

        {/* Contenido del dashboard */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
