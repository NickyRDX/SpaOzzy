'use client'
import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import React, { useState } from 'react'
import { Banknote, CreditCard, Calendar as CalendarIcon, Clock } from 'lucide-react'
import NavReservar from './components/NavReservar/NavReservar'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'

export default function page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedPayment, setSelectedPayment] = useState('efectivo')
  const [selectedService, setSelectedService] = useState('premium')
  const [selectedTime, setSelectedTime] = useState('11:00 AM')

  const horarios = [
    '09:00 AM',
    '10:30 AM',
    '11:00 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
  ]

  return (
    <>
      <NavReservar />
      <MaxWidthWrapper>
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
              Reserva tu Turno
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Completa los detalles para el cuidado de tu mascota.
            </p>
          </div>

          {/* Grid Layout: Formulario (izquierda) y Resumen (derecha) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna Izquierda: Formulario */}
            <div className="lg:col-span-2 space-y-6">
              {/* Datos Personales */}
              <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Nombre y Apellido
                    </Label>
                    <Input
                      className="w-full"
                      placeholder="Ej: Juan Pérez"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Nombre de la Mascota
                    </Label>
                    <Input
                      className="w-full"
                      placeholder="Ej: Rocky"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Raza
                    </Label>
                    <Input
                      className="w-full"
                      placeholder="Ej: Golden Retriever"
                      type="text"
                    />
                  </div>
                </div>

                {/* Método de Pago */}
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                    Método de Pago
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedPayment('efectivo')}
                      className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                        selectedPayment === 'efectivo'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <Banknote className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      <span className="font-medium text-slate-900 dark:text-white">
                        Efectivo
                      </span>
                    </button>
                    <button
                      onClick={() => setSelectedPayment('digital')}
                      className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                        selectedPayment === 'digital'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      <span className="font-medium text-slate-900 dark:text-white">
                        Digital
                      </span>
                    </button>
                  </div>
                </div>

                {/* Tipo de Servicio */}
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                    Tipo de Servicio
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedService('estandar')}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        selectedService === 'estandar'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                        Estándar
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Incluye baño, secado y corte de uñas básico.
                      </p>
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        $12.000
                      </span>
                    </button>
                    <button
                      onClick={() => setSelectedService('premium')}
                      className={`p-6 rounded-xl border-2 transition-all text-left relative ${
                        selectedService === 'premium'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          Premium
                        </h4>
                        <span className="px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded uppercase">
                          Recomendado
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Estándar + hidromasaje, corte de diseño y perfume.
                      </p>
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        $20.000
                      </span>
                    </button>
                  </div>
                </div>
              </section>

              {/* Fecha y Horarios */}
              <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Calendario */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CalendarIcon className="w-5 h-5 text-blue-600" />
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        Seleccionar Fecha
                      </h3>
                    </div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border w-full border-slate-200 dark:border-slate-700 md:max-w-full"
                    />
                  </div>

                  {/* Horarios */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        Horarios Disponibles
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {horarios.map((hora) => (
                        <button
                          key={hora}
                          onClick={() => setSelectedTime(hora)}
                          className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                            selectedTime === hora
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-300'
                          }`}
                        >
                          {hora}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 italic">
                      * Solo se muestran los horarios disponibles para el servicio
                      seleccionado.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Columna Derecha: Resumen */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 sticky top-8">
                <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                  Resumen de Reserva
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Servicio {selectedService === 'premium' ? 'Premium' : 'Estándar'}
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      ${selectedService === 'premium' ? '20.000' : '12.000'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Fecha</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Martes 03 Oct
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Hora</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {selectedTime}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      PRECIO TOTAL
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                    AR${selectedService === 'premium' ? '20.000' : '12.000'}
                  </div>
                </div>

                <button className="w-full bg-slate-900 dark:bg-slate-800 text-white py-4 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all">
                  Confirmar Reserva
                </button>

                <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
                  Al confirmar aceptas nuestros términos y condiciones de servicio.
                </p>
              </div>

              {/* WhatsApp Help */}
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      ¿Necesitas ayuda?
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Habla con un asesor por{' '}
                      <a
                        href="https://wa.me/"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </MaxWidthWrapper>
    </>
  )
}
