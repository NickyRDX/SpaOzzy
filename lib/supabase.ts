//1. Traemos la funcion constructora de la libreria
import { createClient } from '@supabase/supabase-js'

//2. Extraemos las llaves de nuestros archivos .env
//El ! al final es para evitar errores de typescript asegurando que el valor exite
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
//3. Creamos "el cliente" (Nuestro control remoto para la DB)
//Esta es la constante que usaremos en todo la app
export const supabase = createClient(supabaseUrl, supabaseKey)