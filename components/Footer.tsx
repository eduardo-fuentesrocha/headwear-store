'use client';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black text-black dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Marca / Branding */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="text-xl font-black uppercase tracking-wider">
              YOU ONLY LIVE ONCE
            </Link>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Colección exclusiva de gorras trucker premium. Diseños con bordado artesanal y sello de calidad holográfico.
            </p>
          </div>

          {/* Navegación / Tienda */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Colección
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Todas las Gorras
                </Link>
              </li>
              <li>
                <Link href="/product/gorra-mew-black" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Gorra Mew
                </Link>
              </li>
              <li>
                <Link href="/product/gorra-pikachu-black" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Gorra Pikachu
                </Link>
              </li>
              <li>
                <Link href="/product/gorra-charmander-black" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Gorra Charmander
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte / Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Ayuda & Soporte
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Envíos y Entregas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Política de Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Suscripción */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Únete a la comunidad
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Recibe notificaciones de nuevos lanzamientos y ediciones limitadas.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="px-3 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
              >
                Suscribirme
              </button>
            </form>
          </div>

        </div>

        {/* Separador y Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 dark:text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} YOLO.MX Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacidad</a>
            <a href="#" className="hover:underline">Términos del Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}