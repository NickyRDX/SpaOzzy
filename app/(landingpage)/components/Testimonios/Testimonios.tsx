import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import Client1 from '@/public/images/cliente1.png'
import Client2 from '@/public/images/cliente2.png'
import Client3 from '@/public/images/cliente3.png'
import { Star } from 'lucide-react'
import Image from 'next/image'
export default function Testimonios() {
  return (
    <MaxWidthWrapper>
      <section
        className="px-4 py-20 bg-blue-200/40 rounded-2xl mb-20"
        id="testimonios"
      >
        <div className="text-center mb-16">
          <h2 className="text-blue-600/60 font-bold tracking-widest text-xs uppercase mb-4">
            Testimonios
          </h2>
          <h3 className="text-slate-600 text-3xl md:text-4xl font-semibold">
            Lo que dicen los dueños/clientes
          </h3>
        </div>
        {/* aplicamos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="flex gap-1 mb-4">
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              'El mejor lugar de la provincia. Mi Golden Retriever sale siempre
              feliz y oliendo delicioso. Se nota el amor ❤️ que le tienen a los
              animales.'
            </p>
            <div className="flex items-center gap-4">
              <Image
                className="size-12 rounded-full mt-1"
                quality={75}
                src={Client1}
                alt="cliente numero uno, que opina del servicio de la peluqueria canina Spa Ozzy"
              />
              <div className="">
                <p className="font-semibold tracking-tight">Lucía Méndez</p>
                <p className="text-xs text-gray-600">Dueña de Toby</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="flex mb-4 gap-1">
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              'Muy profesionales con el corte de raza. Llevé a mi Schnauzer y lo
              dejaron impecable. La atención es de primera calidad.'
            </p>
            <div className="flex items-center gap-4">
              <Image
                className="size-12 rounded-full mt-1"
                quality={75}
                src={Client2}
                alt="cliente numero dos, que opina del servicio de la peluqueria canina Spa Ozzy"
              />
              <div>
                <p className="font-semibold tracking-tight">Carlos Ruiz</p>
                <p className="text-xs text-gray-600">Dueño de Max</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="flex mb-4 gap-1 max-w-5xl">
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60" />
              <Star className="stroke-0 fill-sky-600/60 " />
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              'Me encanta que usan productos naturales. Mi perrita tiene piel
              sensible y nunca ha tenido problemas aquí. 100% recomendado.'
            </p>
            <div className="flex items-center gap-4">
              <Image
                className="size-12 rounded-full mt-1"
                quality={75}
                src={Client3}
                alt="cliente numero dos, que opina del servicio de la peluqueria canina Spa Ozzy"
              />
              <div>
                <p className="font-semibold tracking-tight">Elena Garay</p>
                <p className="text-xs text-gray-600">Dueña de Luna</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
