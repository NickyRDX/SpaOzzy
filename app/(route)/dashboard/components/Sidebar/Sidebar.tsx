"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarData } from "./Sidebar.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LogoDashboard from "../LogoDashboard/LogoDashboard";
import { SidebarUserFooter } from "../SidebarUserFooter";

export default function Sidebar() {
  const pathname = usePathname();

  const navContent = (
    <>
      <div className="p-4 pb-2">
        <LogoDashboard />
      </div>
      <nav className="flex flex-1 flex-col gap-y-1 px-4 py-2 overflow-y-auto">
        {SidebarData.map(({ id, titulo, icono: Icon, href }) => {
          const isActive =
            href !== "#" &&
            (pathname === href || pathname.startsWith(href + "/"));
          return (
            <Link
              key={id}
              href={href}
              className={cn(
                "flex items-center gap-x-3 w-full px-3 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-blue-100 text-blue-500 font-semibold"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              <Icon
                size={23}
                className={cn(
                  "shrink-0",
                  isActive ? "stroke-blue-500" : "stroke-slate-600"
                )}
              />
              <span className="text-base font-medium">{titulo}</span>
            </Link>
          );
        })}
      </nav>
      <SidebarUserFooter compact />
    </>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu size={24} className="text-slate-700" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-[min(320px,85vw)] flex-col gap-0 border-0 bg-white p-0 sm:max-w-[320px]"
        showCloseButton={true}
      >
        <div className="flex h-full flex-col">{navContent}</div>
      </SheetContent>
    </Sheet>
  );
}
