"use client"
import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import React from 'react'
import { Dog } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Newsletter() {
  return (
    <MaxWidthWrapper>
      <section className="px-4 py-20 mb-20 bg-sky-600 rounded-3xl text-white text-center flex flex-col items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Dog className="text-[200px]" size={300} />
        </div>
        <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black">
            ¿Listo para que tu mascota brille?
          </h2>
          <p className="text-white/80 text-lg">
            Únete a nuestra comunidad y recibe tips de cuidado canino y
            promociones exclusivas todos los meses.
          </p>
        </div>
        <div className="relative z-10 w-full max-w-md flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 rounded-lg p-4 h-14 font-sans tracking-wider text-slate-300 border-none focus:ring-4 focus:ring-white/20"
            placeholder="Tu correo electrónico"
            type="email"
          />
          <Button
            variant="outline"
            className="text-slate-800 px-8 h-14 rounded-lg font-bold transition-colors"
          >
            Suscribirme
          </Button>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
