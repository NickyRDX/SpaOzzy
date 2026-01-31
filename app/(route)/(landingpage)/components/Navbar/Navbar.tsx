"use client";
import { Button } from "@/components/ui/button";
import { PawPrint, User } from "lucide-react";
import Link from "next/link";
import { NavegacionData } from "./Navbar.data";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const { user } = useUser();
  const userId = user?.id;

  return (
    <nav className="sticky z-50 top-0 inset-x-0 shadow-md bg-white/90 backdrop-blur-lg border border-b border-solid border-[#f0f2f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between gap-4 min-w-0">
        <Link href={`/`} className="min-w-0 shrink mr-6">
          <div className="flex items-center gap-x-2 sm:gap-x-3">
            <PawPrint className="fill-blue-400 stroke-blue-400 shrink-0" size={28} />
            <h2 className="text-slate-800 text-lg sm:text-xl font-bold leading-tight truncate">
              SpaOzzy
            </h2>
          </div>
        </Link>
        <div className="flex flex-1 justify-end gap-4 sm:gap-5 md:gap-6 items-center min-w-0 shrink-0">
          <div className="hidden lg:flex items-center gap-7">
            {NavegacionData.map(({ href, id, titulo }) => (
              <Link
                className={cn(
                  "text-slate-700 text-base font-medium hover:text-blue-500/80 transition-colors max-lg:text-sm"
                )}
                key={id}
                href={href}
              >
                {titulo}
              </Link>
            ))}
          </div>
          <Button className="bg-blue-600/80 flex min-w-[90px] sm:min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-3 sm:px-4 text-slate-100 text-xs sm:text-sm font-semibold leading-normal tracking-widest shrink-0">
            <Link className="" href={`/reservar`}>
              Reservar Turno
            </Link>
          </Button>
          {!!userId ? (
            <div className="flex items-center shrink-0">
              <UserButton afterSwitchSessionUrl="/" />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
