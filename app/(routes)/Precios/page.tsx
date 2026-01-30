"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../(landingpage)/components/Navbar/Navbar";
import MaxWidthWrapper from "@/components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PreciosData } from "./Precios.data";
import { ArrowRight, CheckIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AccordionComponent from "./components/Accordion";
import Footer from "../(landingpage)/components/Footer/Footer";

export default function PreciosPage() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.children;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0.6,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
        stagger: 0.15,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <MaxWidthWrapper>
          <div className="mx-auto px-6 mb-10 lg:px-10 py-12 md:py-20 text-center md:text-left">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex max-w-2xl flex-col gap-4">
                <h1 className="text-slate-800 text-4xl md:text-5xl font-bold leading-tight tracking-[-0.022em]">
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
            <div
              ref={cardsContainerRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
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
                        ? "border-3 border-solid border-blue-400/60"
                        : "border-none",
                      "flex flex-col justify-between max-w-2xl min-h-[500px] gap-5 rounded-tr-[2.8rem] rounded-bl-[2.8rem] bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                    )}
                  >
                    <div className="flex flex-col gap-2 space-y-3 md:space-y-1">
                      <h2 className="text-slate-700/80 text-lg text-pretty font-bold md:text-base">
                        {disponible && (
                          <p className="text-center text-[14px] tracking-wider -m-2 bg-linear-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                            Recomendado
                          </p>
                        )}
                        <br />
                        {titulo}
                      </h2>
                      <p className="text-blue-400 text-pretty text-3xl font-semibold tracking-[-0.033em] md:text-4xl">
                        {precio}
                        <span className="text-lg tracking-tighter text-slate-600 md:text-[16px]">
                          {" "}
                          / sesión
                        </span>
                      </p>
                      <span className="text-slate-600 tracking-tight text-pretty text-[14px] md:text-base">
                        {descripcion}
                      </span>
                      <ul
                        role="list"
                        className={cn(
                          caracteristicas ? "text-slate-700" : "text-slate-700",
                          "mt-5 space-y-3 text-sm/6 sm:mt-8"
                        )}
                      >
                        {caracteristicas.map((i) => (
                          <li className="flex items-center gap-x-3" key={i}>
                            <CheckIcon
                              aria-hidden="true"
                              className="size-5 text-sky-600"
                            />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant={disponible ? "default" : "ghost"}
                      className={cn(
                        disponible
                          ? "bg-blue-600/80 hover:bg-blue-900/90 transition-colors"
                          : "border-slate-400/50 border-solid border",
                        "max-w-2xl mt-4 flex items-center justify-center cursor-pointer"
                      )}
                    >
                      <Link href={href}>Seleccionar</Link>
                      <ArrowRight className="size-4 ml-1 mt-0.5" />
                    </Button>
                  </div>
                )
              )}
            </div>
          </div>
          <AccordionComponent />
        </MaxWidthWrapper>
        <Footer />
      </main>
    </>
  );
}
