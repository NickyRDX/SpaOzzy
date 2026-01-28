import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
export async function GET(request: Request) {
  // Aqui vamos a abrir el sobre
  const { searchParams } = new URL(request.url);
  const fecha = searchParams.get("fecha");
  console.log(fecha);
  if (!fecha) {
    return NextResponse.json({ error: "Peticion incorrecta" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("turnos")
    .select("fecha")
    .eq("fecha", fecha);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ horariosOcupados: data });
}
