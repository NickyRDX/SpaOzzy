import MaxWidthWrapper from "@/components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import React from "react";

export default function VideoPre() {
  return (
    <section className="relative py-10 md:py-10 overflow-x-hidden">
      <MaxWidthWrapper>
        <div>
          <h1 className='text-4xl md:text-3xl font-bold uppercase tracking-tight text-slate-800 underline underline-offset-2 decoration-2 text-center mx-auto max-w-fit text-pretty'>Preview</h1>
        </div>
        <div className='relative mt-6 shadow-md bg-white/60 backdrop-blur-2xl p-1.5 rounded-md md:p-2'>
          <video autoPlay loop muted playsInline className='w-full aspect-video object-cover'>
            <source src="/video/preview.mp4" type="video/mp4" />
          </video>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
