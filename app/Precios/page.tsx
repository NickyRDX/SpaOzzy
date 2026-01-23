import React from 'react'
import Navbar from '../(landingpage)/components/Navbar/Navbar'
import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PreciosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <MaxWidthWrapper>
          <div className="mx-auto px-6 lg:px-10 py-12 md:py-20 text-center md:text-left">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex max-w-2xl flex-col gap-4">
                <h1 className="text-slate-700 text-4xl md:text-5xl font-bold leading-tight tracking-[-0.033em]">
                  Precios de nuestros servicios
                </h1>
                <p className="text-slate-500 text-lg font-normal leading-relaxed">
                  Selecciona el precio que más se ajuste a tus necesidades,
                  Ofrecemos cuidado personalizado para cada mascota un
                  integrante de la familia tambien merece la mejor atencion.
                </p>
              </div>
              <Link href={`/#servicios`}>
                <Button className='cursor-pointer flex min-w-[85px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-500/90 text-white text-sm font-bold leading-normal tracking-tighter transition-all border border-blue-200/20'>Ver todo Nuestro Servicios</Button>
              </Link>
            </div>
          </div>
          <div className='mx-auto px-6 lg:px-10 pb-20'>
            <div className=''></div>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  )
}
