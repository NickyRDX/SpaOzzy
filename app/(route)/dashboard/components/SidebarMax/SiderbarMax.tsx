"use client";

import React from "react";
import { SidebarData } from "../Sidebar/Sidebar.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LogoDashboard from "../LogoDashboard/LogoDashboard";
import { SidebarUserFooter } from "../SidebarUserFooter";

export default function SiderbarMax() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full max-w-[280px] flex-col border-r border-slate-200 bg-white">
      <div className="shrink-0 p-4 pb-2">
        <LogoDashboard />
      </div>
      <nav className="flex flex-1 flex-col gap-y-1 overflow-y-auto px-4 py-2">
        {SidebarData.map(({ id, titulo, icono: Icon, href }) => {
          const isActive =
            href !== "#" &&
            (pathname === href || pathname.startsWith(href + "/"));
          return (
            <Link
              key={id}
              href={href}
              className={cn(
                "flex items-center gap-x-3 rounded-lg px-3 py-3 transition-colors",
                isActive
                  ? "bg-blue-100 font-semibold text-blue-500"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              <Icon
                size={24}
                className={cn(
                  "shrink-0",
                  isActive ? "stroke-blue-500" : "stroke-slate-600"
                )}
              />
              <span className="text-lg tracking-tight text-pretty font-medium">{titulo}</span>
            </Link>
          );
        })}
      </nav>
      <SidebarUserFooter />
    </aside>
  );
}
