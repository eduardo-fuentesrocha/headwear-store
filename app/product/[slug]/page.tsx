'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: Props) {
  // Desenredamos la promesa params en un Client Component usando React.use()
  const { slug } = use(params);
  
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Estado local para controlar cuál imagen de product.images se muestra
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // --- CONFIGURACIÓN DE WHATSAPP ---
  const phoneNumber = "+524661097310";
  const message = `Hola, estoy interesado en comprar el producto: ${product.title}`;
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  // Lista de características con íconos vectoriales minimalistas
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      label: 'Material Premium',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      label: 'Bordado de precisión',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>
      ),
      label: 'Visera holográfica',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
      label: 'Ajuste Snapback',
    },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-[calc(100vh-4rem)] flex items-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Galería y Foto Principal */}
          <div className="lg:col-span-6 flex gap-4">
            {/* Grid de Miniaturas en Columna */}
            <div className="flex flex-col gap-3 w-20 flex-shrink-0">
              {product.images.map((imgSrc, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square w-full rounded-xl overflow-hidden border transition-all ${
                    index === selectedImageIndex
                      ? 'border-black dark:border-white opacity-100 ring-2 ring-black dark:ring-white'
                      : 'border-neutral-200 dark:border-neutral-800 opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`${product.title} vista ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Imagen Principal dinámicamente seleccionada */}
            <div className="relative aspect-square w-full bg-neutral-0 dark:bg-neutral-900/40 rounded-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden flex items-center justify-center p-6">
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.title}
                fill
                priority
                className="object-contain p-4 transition-all duration-200"
              />
            </div>
          </div>

          {/* Columna Derecha: Detalles del Producto */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-6">
            
            {/* SKU & Título */}
            <div>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block mb-2">
                SKU: POKT-CAP-0{product.id}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-black dark:text-white uppercase tracking-tight leading-none">
                {product.title}
              </h1>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-4">
                ${product.price} <span className="text-sm font-normal text-neutral-500">{product.currency}</span>
              </p>
            </div>

            {/* Descripción */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
              {product.description}
            </p>

            {/* Características */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-3">
                Características
              </h3>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="text-black dark:text-white">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón Comprar redirigiendo a WhatsApp */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex px-12 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full text-sm uppercase tracking-wider hover:opacity-90 transition-opacity items-center justify-center gap-3"
              >
                <span>Comprar</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}