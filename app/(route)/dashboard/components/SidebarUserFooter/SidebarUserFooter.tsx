"use client";

import React from "react";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarUserFooterProps {
  className?: string;
  /** Si es true, layout más compacto (ej. en drawer móvil) */
  compact?: boolean;
}

export default function SidebarUserFooter({
  className,
  compact = false,
}: SidebarUserFooterProps) {
  const { user } = useUser();
  const nombre =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : (user?.firstName ?? "Usuario");
  const email = user?.emailAddresses?.[0]?.emailAddress ?? "";
  console.log(nombre)
  return (
    <div
      className={cn(
        "border-t border-slate-200 bg-white p-4",
        compact && "p-3",
        className
      )}
    >
      <div className={cn("flex items-center gap-3", compact && "gap-2")}>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
          <span className="text-sm font-semibold">
            {nombre.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-slate-700">
            {nombre}
          </p>
          <p className="truncate text-xs text-slate-500">{email}</p>
        </div>
      </div>
      <SignOutButton>
        <Button
          variant="secondary"
          className="mt-3 w-full justify-start gap-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
          size={compact ? "sm" : "default"}
        >
          <LogOut className="size-4 shrink-0" />
          Cerrar Sesión
        </Button>
      </SignOutButton>
    </div>
  );
}
