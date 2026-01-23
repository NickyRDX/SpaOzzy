// Interface: Define la estructura que debe tener cada plan de precios
// Es como un "molde" que asegura que todos los planes tengan los mismos campos
interface PreciosDataPros {
  id: number // Número único para identificar el plan (1, 2, 3...)
  titulo: string // Nombre del plan (ej: "Plan Premium")
  precio: string // Precio en formato texto (ej: "AR$15.000")
  href: string // URL o enlace del plan
  descripcion: string // Descripción general del plan
  caracteristicas: string[] // Lista (array) de características incluidas
  disponible: boolean // true = disponible, false = no disponible
}

// Array (lista) que contiene todos los planes de precios del spa
export const PreciosData: PreciosDataPros[] = [
  // Primer plan: Plan Estandar
  {
    id: 1,
    titulo: 'Plan Estandar',
    precio: 'AR$15.000',
    href: '#',
    descripcion:
      'Un perfecto baño, para limpiar a tu mejor amigo a un precio economico.',
    caracteristicas: [
      'Baño con shampoo premium',
      'Revision y limpieza de oidos',
      'Perfume',
    ],
    disponible: false, // Este plan NO está disponible actualmente
  },
  // Segundo plan: Plan Premium
  {
    id: 2,
    titulo: 'Plan Premium',
    precio: 'AR$20.000',
    href: '#',
    descripcion: 'El mejor tratamiento para un miembro de la familia, muestrale lo mucho que lo amas.',
    caracteristicas: [
      'Baño con Shampoo Premium',
      'Secado a mano',
      'Corte de uñas',
      'Corte de pelo',
      'Revision y limpieza de oidos',
      'Perfume',
    ],
    disponible: true, // Este plan SÍ está disponible
  },
]

// Exportar los datos para poder usarlos en otros archivos

