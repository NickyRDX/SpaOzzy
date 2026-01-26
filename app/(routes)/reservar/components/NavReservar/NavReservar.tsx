'use client'
import { UserButton } from '@clerk/nextjs'
import { PawPrint } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NavReservar() {
  return (
    <nav className="sticky h-16 z-50 inset-x-0 top-0 bg-white backdrop-blur-lg border border-b border-solid border-slate-300/70 md:h-14">
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-3 flex h-full items-center justify-between whitespace-nowrap">
        <Link href="/">
          <div className="flex items-center gap-x-2 min-h-full">
            <PawPrint size={32} className="fill-blue-400 stroke-blue-400" />
            <h2 className="text-slate-700 text-xl font-bold leading-relaxed">
              SpaOzzy
            </h2>
          </div>
        </Link>
        <div>
          <UserButton afterSwitchSessionUrl="/" />
        </div>
      </div>
    </nav>
  )
}
