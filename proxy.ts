import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define las rutas públicas (accesibles sin autenticación)
const isPublicRoute = createRouteMatcher([
  '/', // Landing page (home)
  '/Precios(.*)', // Página de precios y sus subrutas
  '/sign-in(.*)', // Páginas de autenticación
  '/sign-up(.*)',
  // Si tienes webhooks públicos
])

export default clerkMiddleware(async (auth, req) => {
  // Si NO es una ruta pública, requiere autenticación
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Excluye archivos estáticos y API routes internas de Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Siempre ejecuta para API routes
    '/(api|trpc)(.*)',
  ],
}
