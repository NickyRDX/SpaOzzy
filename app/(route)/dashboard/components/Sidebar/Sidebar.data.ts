import {
  LayoutDashboard,
  LucideIcon,
  CalendarArrowUp,
  History,
  Dog,
  Headphones,
} from "lucide-react";

/**
 * Tipo para cada ítem del menú lateral.
 * - icono: usa LucideIcon (NO React.ReactNode) porque pasamos el COMPONENTE
 *   (LayoutDashboard), no un elemento ya renderizado (<LayoutDashboard />).
 * - LucideIcon = referencia al componente de ícono (para usarlo como <icono />).
 * - LucideProps = tipo de las props del ícono (size, color, etc.) si las necesitás.
 */
type SidebarItem = {
  id: number;
  titulo: string;
  icono: LucideIcon; // Componente de ícono, no ReactNode
  href: string;
};

export const SidebarData: SidebarItem[] = [
  {
    id: 1,
    titulo: "Dashboard",
    icono: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: 2,
    titulo: "Mis Turnos",
    icono: CalendarArrowUp,
    href: "#",
  },
  {
    id: 3,
    titulo: "Perfil de Mascota",
    icono: Dog,
    href: "#",
  },
  {
    id: 4,
    titulo: "Historial",
    icono: History,
    href: "#",
  },
  
];
