"use client";
import MaxWidthWrapper from "@/components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import React, { useState, useEffect } from "react";
import {
  Banknote,
  CreditCard,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";
import NavReservar from "./components/NavReservar/NavReservar";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase"; //importamos la llave para supabase del archivo lib/supabase.ts
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedPayment, setSelectedPayment] = useState("efectivo");
  const [selectedService, setSelectedService] = useState("premium");
  const [selectedTime, setSelectedTime] = useState("");
  const { user } = useUser();
  const [reservas, setReservas] = useState<string[]>([]); // Estado: horarios ocupados de la fecha seleccionada
  const [fechasBloqueadas, setFechasBloqueadas] = useState<string[]>([]); // Estado: fechas con TODOS los horarios ocupados
  const router = useRouter();

  const horarios = [
    "09:00 AM",
    "10:30 AM",
    "11:00 AM",
    "12:00 AM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
  ];
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreCompleto: "",
      nombreMascota: "",
      raza: "",
      metodoPago: "efectivo",
      tipoServicio: "standard",
      fecha: new Date(),
      horario: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user || !user.id) return alert("Debes iniciar sesión");

    const datosTurno = {
      usuario_id: user.id,
      nombre_dueno: values.nombreCompleto,
      nombre_mascota: values.nombreMascota,
      raza: values.raza || null,
      servicio: values.tipoServicio,
      precio: values.tipoServicio === "premium" ? 20000 : 15000,
      fecha: values.fecha.toISOString().split("T")[0],
      horario: values.horario,
      forma_pago: values.metodoPago,
      estado: values.metodoPago === "efectivo" ? "confirmado" : "pendiente",
    };

    // Insertar en Supabase
    const { data, error } = await supabase
      .from("turnos")
      .insert([datosTurno])
      .select();

    if (error) {
      toast.error("❌Error al guardar: " + error.message);
      return;
    }

    // Si seleccionó Mercado Pago, crear preferencia de pago
    if (values.metodoPago === "mercadopago" && data && data[0]) {
      try {
        const response = await fetch("/api/mercadopago/create-preference", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            reservaId: data[0].id,
            servicio: values.tipoServicio,
            precio: datosTurno.precio,
            nombreCompleto: values.nombreCompleto,
            nombreMascota: values.nombreMascota,
            fecha: values.fecha.toLocaleDateString(),
            horario: values.horario,
            usuarioId: user.id,
          }),
        });

        const { initPoint } = await response.json();

        // Redirigir a Mercado Pago
        window.location.href = initPoint;
      } catch (error) {
        toast.error("Error al procesar el pago");
        console.error(error);
      }
    } else {
      // Pago en efectivo - mostrar confirmación normal
      toast.success("La Reserva se ha realizado exitosamente✅");
      setTimeout(() => router.push("/dashboard"), 3000);
    }
  };
  // FUNCIÓN 1: Consultar horarios ocupados de UNA fecha específica
  const consultarReservar = async (fechaSelected: Date) => {
    // Formatear la fecha al formato que usa la DB (YYYY-MM-DD)
    const fechaFormatter = fechaSelected.toISOString().split("T")[0];
    try {
      const respuesta = await fetch(`/api/turnos?fecha=${fechaFormatter}`);
      const data = await respuesta.json();
      if (data.horariosOcupados) {
        // Extraer solo los horarios del array de objetos
        const horariosUsados = data.horariosOcupados.map(
          (turno: any) => turno.horario
        );
        setReservas(horariosUsados);
      }
    } catch (error) {
      console.error("Error al consultar horarios:", error);
    }
  };

  // FUNCIÓN 2: Consultar fechas COMPLETAMENTE ocupadas (15 turnos)
  const consultarFechasBloqueadas = async () => {
    try {
      // Al NO pasar parámetro "fecha", el endpoint devuelve las fechas completas
      const respuesta = await fetch("/api/turnos");
      const data = await respuesta.json();
      if (data.fechasOcupadas) {
        setFechasBloqueadas(data.fechasOcupadas);
        console.log("Fechas bloqueadas:", data.fechasOcupadas);
      }
    } catch (error) {
      console.error("Error al consultar fechas bloqueadas:", error);
    }
  };
  // useEffect 1: Se ejecuta UNA VEZ al cargar la página
  // Objetivo: Obtener TODAS las fechas que están completamente llenas
  useEffect(() => {
    consultarFechasBloqueadas();
  }, []); // Array vacío [] = solo se ejecuta al montar el componente

  // useEffect 2: Se ejecuta cada vez que cambias la fecha en el calendario
  // Objetivo: Obtener los horarios ocupados de ESA fecha específica
  useEffect(() => {
    if (date) {
      consultarReservar(date);
      console.log("Consultando reservas para:", date);
    }
  }, [date]); // Se ejecuta cuando "date" cambia

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Columna Izquierda: Formulario */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Datos Personales */}
                  <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nombreCompleto"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Nombre y Apellido
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="w-full"
                                placeholder="Ej: Antoni Diaz"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="nombreMascota"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Nombre de la Mascota
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="w-full"
                                placeholder="Ej: Rex"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="raza"
                        render={({ field }) => (
                          <FormItem className="space-y-2 md:col-span-2">
                            <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Raza
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="w-full"
                                placeholder="Ej: Rottweiler"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Método de Pago */}
                    <FormField
                      control={form.control}
                      name="metodoPago"
                      render={({ field }) => (
                        <FormItem className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                          <FormLabel>
                            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                              Método de Pago
                            </h3>
                          </FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-2 gap-4">
                              <button
                                type="button"
                                onClick={() => {
                                  field.onChange("efectivo");
                                  setSelectedPayment("efectivo");
                                }}
                                className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                                  selectedPayment === "efectivo"
                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
                                }`}
                              >
                                <Banknote className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                <span className="font-medium text-slate-900 dark:text-white">
                                  Efectivo
                                </span>
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  field.onChange("mercadopago");
                                  setSelectedPayment("mercadopago");
                                }}
                                className={`p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                                  selectedPayment === "mercadopago"
                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
                                }`}
                              >
                                <CreditCard className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                <span className="font-medium text-slate-900 dark:text-white">
                                  Digital
                                </span>
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Tipo de Servicio */}
                    <FormField
                      control={form.control}
                      name="tipoServicio"
                      render={({ field }) => (
                        <FormItem className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                          <FormLabel>
                            <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                              Tipo de Servicio
                            </h3>
                          </FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <button
                                type="button"
                                onClick={() => {
                                  field.onChange("standard");
                                  setSelectedService("standard");
                                }}
                                className={`p-6 rounded-xl border-2 transition-all text-left ${
                                  selectedService === "standard"
                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
                                }`}
                              >
                                <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                                  Estándar
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                  Incluye baño, secado y corte de uñas básico.
                                </p>
                                <span className="text-xl font-bold text-blue-400 dark:text-blue-400">
                                  $15.000
                                </span>
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  field.onChange("premium");
                                  setSelectedService("premium");
                                }}
                                className={`p-6 rounded-xl border-2 transition-all text-left relative ${
                                  selectedService === "premium"
                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-slate-200 dark:border-slate-700 hover:border-slate-300"
                                }`}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                    Premium
                                  </h4>
                                  <span className="px-2 py-1 bg-blue-500 text-white text-[10px] font-bold rounded uppercase">
                                    Recomendado
                                  </span>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                  Estándar + hidromasaje, corte de diseño y
                                  perfume.
                                </p>
                                <span className="text-xl font-bold text-blue-400 dark:text-blue-400">
                                  $20.000
                                </span>
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </section>

                  {/* Fecha y Horarios */}
                  <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Calendario */}
                      <FormField
                        control={form.control}
                        name="fecha"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <div className="flex items-center gap-1 mb-2 md:-mb-2">
                                <CalendarIcon className="w-5 h-5 text-blue-400" />
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                  Seleccionar Fecha
                                </h3>
                              </div>
                            </FormLabel>
                            <FormControl>
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(newDate) => {
                                  setDate(newDate);
                                  if (newDate) {
                                    field.onChange(newDate);
                                  }
                                }}
                                disabled={(fecha) => {
                                  // LÓGICA DE DESHABILITADO:
                                  // 1. Convertir la fecha a formato YYYY-MM-DD
                                  const fechaFormateada = fecha
                                    .toISOString()
                                    .split("T")[0];

                                  // 2. Verificar si esta fecha está en el array de fechas bloqueadas
                                  const estaBloqueada =
                                    fechasBloqueadas.includes(fechaFormateada);

                                  // 3. También bloqueamos fechas pasadas (antes de hoy)
                                  const esDelPasado =
                                    fecha <
                                    new Date(new Date().setHours(0, 0, 0, 0));

                                  // Si está bloqueada O es del pasado, deshabilitar
                                  return estaBloqueada || esDelPasado;
                                }}
                                className="rounded-md border w-full px-2  border-slate-300 dark:border-slate-700 md:max-w-full"
                                captionLayout="dropdown"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Horarios */}
                      <FormField
                        control={form.control}
                        name="horario"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <div className="flex items-center gap-2 mb-4">
                                <Clock className="w-5 h-5 text-blue-400" />
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                  Horarios Disponibles
                                </h3>
                              </div>
                            </FormLabel>
                            <FormControl>
                              <div>
                                <div className="grid grid-cols-2 gap-3">
                                  {horarios
                                    .filter((hora) => !reservas.includes(hora))
                                    .map((hora) => (
                                      <button
                                        key={hora}
                                        type="button"
                                        onClick={() => {
                                          setSelectedTime(hora);
                                          field.onChange(hora);
                                        }}
                                        className={`py-3 px-4 rounded-lg text-sm border-2 font-medium transition-all ${selectedTime === hora ? "bg-blue-500 text-white border-blue-200" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-200 hover:border-blue-300"}`}
                                      >
                                        {hora}
                                      </button>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-4 italic">
                                  * Solo se muestran los horarios disponibles
                                  para el servicio seleccionado.
                                </p>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                          Servicio{" "}
                          {selectedService === "premium"
                            ? "Premium"
                            : "Estándar"}
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          ${selectedService === "premium" ? "20.000" : "12.000"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          Fecha
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          Martes 03 Oct
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          Hora
                        </span>
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
                      <div className="text-3xl font-bold text-blue-400 dark:text-blue-400 mt-1">
                        AR${selectedService === "premium" ? "20.000" : "15.000"}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full cursor-pointer bg-blue-800 dark:bg-slate-800 text-white py-5 rounded-md font-semibold hover:bg-blue-500/80 dark:hover:bg-slate-700 transition-all"
                      onClick={() => form.handleSubmit(onSubmit)}
                    >
                      Confirmar Reserva
                    </Button>

                    <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-4">
                      Al confirmar aceptas nuestros términos y condiciones de
                      servicio.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </main>
      </MaxWidthWrapper>
    </>
  );
}
