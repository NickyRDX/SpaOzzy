'use client'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
export default function AccordionComponent() {
  return (
    <Accordion
      className="bg-white p-4 rounded-lg max-w-3xl mx-auto space-y-4 mb-32"
      type="single"
      collapsible
      defaultValue="tiempo"
    >
      <AccordionItem value="tiempo">
        <AccordionTrigger className="text-base">
          Cuánto dura una sesión de peluquería canina?
        </AccordionTrigger>
        <AccordionContent className='text-slate-700'>
          Dependiendo del tamaño y el estado del manto, una sesión suele durar
          entre 60 y 90 minutos. Para perros de pelos largos o que requieren
          cortes especificos, puede extenderse un poco más.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="productos">
        <AccordionTrigger className="text-base">
          Qué productos utilizamos para el baño?
        </AccordionTrigger>
        <AccordionContent>
          Utilizamos shampoos y acondicionadores profesionales hipoalergénicos,
          libres de parabenos y siliconas, seleccionados específicamente según
          el tipo de piel y pelo de tu mascota.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="info">
        <AccordionTrigger className="text-base">
          Es necesario reservar con mucha antelación?
        </AccordionTrigger>
        <AccordionContent>
          Recomendamos reservar con al menos 48 horas de antelación para
          asegurar disponibilidad, especialmente durante los fines de semana.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
