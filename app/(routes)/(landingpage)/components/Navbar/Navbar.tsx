"use client"
import { Button } from '@/components/ui/button'
import { PawPrint } from 'lucide-react'
import Link from 'next/link'
import { NavegacionData } from './Navbar.data'
export default function Navbar() {
  return (
    <nav className="sticky z-50 top-0 inset-x-0 shadow-2xs bg-white/80 backdrop-blur-md border border-b border-solid border-[#f0f2f5]">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between whitespace-nowrap">
        <Link href={`/`}>
          <div className="flex items-center gap-x-3">
            <PawPrint className="fill-blue-400 stroke-blue-400" size={34} />
            <h2 className="text-slate-800 text-xl font-bold leading-tight">
              SpaOzzy
            </h2>
          </div>
        </Link>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <div className="hidden md:flex items-center gap-9">
            {NavegacionData.map(({ href, id, titulo }) => (
              <Link
                className="text-slate-700 text-sm font-medium hover:text-blue-400/70 transition-colors"
                key={id}
                href={href}
              >
                {titulo}
              </Link>
            ))}
          </div>
          <Button className="bg-blue-600/80 flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-slate-100 text-sm font-semibold leading-normal tracking-widest">
            <Link className="" href={`/Turnos`}>
              Reservar Turno
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
