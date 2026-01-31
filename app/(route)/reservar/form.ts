import z from "zod";
import {useUser} from '@clerk/nextjs'
export const formSchema = z.object({
  // Sí, está bien escrito y funcionará para tu proyecto.

  nombreCompleto: z.string().min(2).max(50),
  nombreMascota: z.string().min(2).max(50),
  raza: z.string().optional(),
  metodoPago: z.enum(["efectivo", "mercadopago"]),
  tipoServicio: z.enum(["standard", "premium"]),
  fecha: z.date(),
  horario: z.string().min(2),
});