'use client'
import React from 'react'
import Navbar from '../(landingpage)/components/Navbar/Navbar'
import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PreciosData } from './Precios.data'
import { CheckIcon } from 'lucide-react'

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
                <Button className="cursor-pointer flex min-w-[85px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-500/90 text-white text-sm font-bold leading-normal tracking-tighter transition-all border border-blue-200/20">
                  Ver todo Nuestro Servicios
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto px-6 lg:px-10 pb-20 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Plan Estandar | Plan Premium*/}
              {PreciosData.map(
                ({
                  id,
                  titulo,
                  precio,
                  href,
                  descripcion,
                  caracteristicas,
                  disponible,
                }) => (
                  <div
                    key={id}
                    className={cn(
                      disponible
                        ? 'border-3 border-solid border-blue-500/60'
                        : 'border-none',
                      'flex flex-col justify-between min-h-[500px] gap-5 rounded-xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow'
                    )}
                  >
                    <div className="flex flex-col gap-2 space-y-3 md:space-y-1">
                      <h2 className="text-slate-700/80 text-lg text-pretty font-bold md:text-base">
                        {titulo}
                      </h2>
                      <p className="text-sky-600/80 text-pretty text-4xl font-semibold tracking-[-0.033em] md:text-3xl">
                        {precio}
                        <span className="text-lg text-slate-600 md:text-base">
                          {' '}
                          / sesión
                        </span>
                      </p>
                      <span className="text-slate-500 tracking-tight text-pretty text-base md:text-lg">
                        {descripcion}
                      </span>
                      <ul
                        role="list"
                        className={cn(
                          caracteristicas ? 'text-gray-600' : 'text-gray-600',
                          'mt-5 space-y-3 text-sm/6 sm:mt-8'
                        )}
                      >
                        {caracteristicas.map((i) => (
                          <li className="flex items-center gap-x-3" key={i}>
                            <CheckIcon
                              aria-hidden="true"
                              className="size-5 text-sky-800"
                            />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant={disponible ? 'default' : 'ghost'}
                      className={cn(
                        disponible ? 'bg-blue-600/80 hover:bg-blue-900/90 transition-colors' : 'border-slate-400/50 border-solid border',
                        'max-w-2xl mt-4 cursor-pointer'
                      )}
                    >
                      Seleccionar
                    </Button>
                  </div>
                )
              )}
            </div>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  )
}
