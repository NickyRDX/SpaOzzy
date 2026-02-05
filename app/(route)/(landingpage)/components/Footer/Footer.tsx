"use client"
import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import { Globe, Mail, PawPrint, Share2 } from 'lucide-react'
import Link from 'next/link'
export default function Footer() {
  return (
    <MaxWidthWrapper>
      <footer
        className="bg-white border-t border-slate-100 pt-20 pb-10"
        id="nosotros"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-slate-700">
              <PawPrint size={32} className="stroke-blue-400 fill-blue-400" />
              <h2 className="text-xl font-bold">SparOzzy</h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dedicados al bienestar y belleza de tus mascotas desde 2012.
              Pasión por el estilismo canino y el cuidado animal.
            </p>
            <div className="flex gap-4 items-center">
              <Link className="text-slate-400 hover:text-sky-600/70" href={`#`}>
                <Globe size={25} className="" />
              </Link>
              <Link className="text-slate-400 hover:text-sky-600/70" href={`#`}>
                <Mail size={25} className="" />
              </Link>
              <Link className="text-slate-400 hover:text-sky-600/70" href={`#`}>
                <Share2 size={25} className="" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-slate-700">Explorar</h4>
            <nav className="flex flex-col gap-4 text-sm text-slate-600">
              <Link
                className="hover:text-blue-400 transition-colors"
                href={`/`}
              >
                Inicio
              </Link>
              <Link
                className="hover:text-blue-400 transition-colors"
                href={`#servicios`}
              >
                Servicios
              </Link>
              <Link
                className="hover:text-blue-400 transition-colors"
                href={`#testimonios`}
              >
                Testimonios
              </Link>
              <Link
                className="hover:text-blue-400 transition-colors"
                href={`/precios`}
              >
                Precios
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-[#111418]">Horarios</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-500">
              <div className="flex justify-between">
                <span className="">Lun - Vie:</span>
                <span className="">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span>10:00 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos:</span>
                <span className="text-red-600/70 font-bold">Cerrado</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-slate-700">Ubicación</h4>
            <div className="rounded-xl overflow-hidden h-32 bg-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.358673771374!2d-65.23294645601935!3d-26.794284120109733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3b76fd2211%3A0xaea4fdd29f1c99f7!2sEl%20spa%20de%20Ozzi!5e0!3m2!1ses-419!2sar!4v1769021956930!5m2!1ses-419!2sar"
                width="600"
                height="450"
                className='border-0'
                
                loading="lazy"
                
              ></iframe>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t text-muted-foreground text-center">
          © 2026 Spa Ozzy Peluquería Canina. Todos los derechos reservados.
        </div>
      </footer>
    </MaxWidthWrapper>
  )
}
