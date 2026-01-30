"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import MaxWidthWrapper from "@/components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ImgHeroSeccion from "@/public/images/ImagenHero.png";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    const text = titleRef.current.textContent || "";
    titleRef.current.textContent = "";
    titleRef.current.style.opacity = "1"; // Mostrar el contenedor

    // Crear spans para cada carácter
    const chars = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      span.style.display = "inline";
      span.style.whiteSpace = char === " " ? "pre-wrap" : "normal";
      return span;
    });

    chars.forEach((char) => titleRef.current?.appendChild(char));

    // Animación tipo máquina de escribir
    const ctx = gsap.context(() => {
      gsap.to(chars, {
        opacity: 1,
        duration: 0.03,
        stagger: 0.03,
        ease: "none",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <MaxWidthWrapper>
      <section className="px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-blue-400/80 font-bold tracking-widest text-xs uppercase">
                Estilismo Canino Profesional
              </span>
              <h1
                ref={titleRef}
                className="opacity-0 text-slate-800 dark:text-white text-3xl sm:text-3xl md:text-4xl font-bold leading-tight -tracking-tighter"
              >
                Tu mejor amigo merece el mejor cuidado
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
                Brindamos una experiencia de spa única para tu mascota, con
                productos de alta calidad y un trato lleno de amor y paciencia.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={"/reservar"}>
                <Button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-blue-500 text-white text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                  Reserva tu Turno
                </Button>
              </Link>
              <Link href={`/precios`} className="block md:hidden">
                <Button
                  variant="secondary"
                  className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 border-2 border-primary/20 text-primary dark:text-primary font-bold hover:bg-primary/5 transition-colors"
                >
                  Ver Precios
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden group">
              <Image
                src={ImgHeroSeccion}
                quality={75}
                height={600}
                width={600}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                alt="imagen del hero session perrito en spa"
              />
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
