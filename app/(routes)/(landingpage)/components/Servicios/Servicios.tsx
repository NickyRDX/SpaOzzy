"use client"
import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import { ServicioDatos } from './Servicios.data'

export default function Servicios() {
  return (
    <MaxWidthWrapper>
      <section className="py-20 px-4" id="servicios">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-blue-300 font-bold tracking-widest text-xs uppercase">
            Lo que hacemos
          </h2>
          <h1 className="text-slate-700 text-3xl md:text-5xl font-semibold leading-tight">
            Cuidado Integral de Elite
          </h1>
          <p className="text-slate-600 text-lg max-w-[700px]">
            Ofrecemos una amplia gama de servicios especializados para que tu
            mascota no solo luzca bien, sino que se sienta increíble.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ServicioDatos.map(({ id, descripcion, icon: Icon, titulo }) => (
            <div
              key={id}
              className="flex flex-col gap-4 rounded-2xl border border-[#dbe0e6] bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Icon className="bg-blue-300/30 stroke-blue-600/80 stroke-2 p-3 size-14 rounded-xl flex items-center justify-center" />

              <div className="flex flex-col gap-2">
                <h3 className="text-slate-800 text-xl font-bold">{titulo}</h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  {' '}
                  {descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
