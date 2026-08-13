import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Hero con degradado integrado de forma nativa */}
      <Hero />

      {/* Grid de Productos */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Catálogo Oficial
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1">
              Todos los Productos
            </h2>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 md:mt-0 font-medium">
            {PRODUCTS.length} Ediciones Disponibles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}