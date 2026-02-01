import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
export async function GET(request: NextRequest) {
  // Aqui vamos a abrir el sobre (leer los parámetros de la URL)
  const { searchParams } = new URL(request.url);
  const fecha = searchParams.get("fecha");

  // CASO 1: Si viene una fecha específica, devuelve los horarios ocupados de ESA fecha
  if (fecha) {
    console.log("Consultando horarios para:", fecha);

    const { data, error } = await supabase
      .from("turnos")
      .select("fecha, horario")
      .eq("fecha", fecha);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ horariosOcupados: data });
  }

  // CASO 2: Si NO viene fecha, devuelve las fechas COMPLETAMENTE ocupadas (15 turnos)
  // ¿Por qué 15? Porque tenemos 15 horarios disponibles en total
  console.log("Consultando fechas completamente ocupadas");

  const { data, error } = await supabase.from("turnos").select("fecha");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Contamos cuántos turnos tiene cada fecha
  const conteoFechas: { [key: string]: number } = {};

  data.forEach((turno: any) => {
    if (conteoFechas[turno.fecha]) {
      conteoFechas[turno.fecha]++;
    } else {
      conteoFechas[turno.fecha] = 1;
    }
  });

  // Filtramos solo las fechas que tienen 15 turnos (todos ocupados)
  const fechasCompletas = Object.keys(conteoFechas).filter(
    (fecha) => conteoFechas[fecha] >= 15
  );

  return NextResponse.json({ fechasOcupadas: fechasCompletas });
}
