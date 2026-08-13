import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string | number;
  title: string;
  price: number;
  currency: string;
  slug: string;
  images: string[];
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Contenedor de la Imagen con fondo blanco puro para fusionar la foto */}
      <div className="relative aspect-square w-full bg-white dark:bg-neutral-950 p-6 flex items-center justify-center overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Información del Producto */}
      <div className="p-5 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800/60">
        <div className="space-y-1">
          <h3 className="text-sm font-bold uppercase tracking-tight text-neutral-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
          <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-neutral-400">
            Ajustable
          </span>
        </div>

        <span className="text-xs font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-900/40 px-3 py-1.5 rounded-full whitespace-nowrap">
          ${product.price} {product.currency}
        </span>
      </div>
    </Link>
  );
}