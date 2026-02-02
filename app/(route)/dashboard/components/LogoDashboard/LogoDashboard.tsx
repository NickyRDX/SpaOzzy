"use client";
import React from "react";
import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function LogoDashboard() {
  return (
    <Link href="/dashboard" className="flex items-center gap-x-3 w-full mb-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-500">
        <PawPrint size={22} className="stroke-white fill-white" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight text-slate-600">
          SpaOzzy
        </span>
        <span className="text-xs font-medium tracking-tight text-blue-500">
          Grooming & Wellness
        </span>
      </span>
    </Link>
  );
}
