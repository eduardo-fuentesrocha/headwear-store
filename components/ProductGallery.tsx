// src/components/ProductGallery.tsx
'use client'; // ⚠️ Importante: Esto marca el componente como Cliente

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  // Estado para rastrear el índice de la imagen principal actualmente visible
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Si no hay imágenes, no renderizamos nada o una imagen por defecto
  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square w-full bg-neutral-100 rounded-2xl flex items-center justify-center">
        <span className="text-neutral-400">Sin imagen</span>
      </div>
    );
  }

  return (
    <div className="lg:col-span-6 flex gap-4">
      {/* Grid de Miniaturas en Columna */}
      <div className="flex flex-col gap-3 w-20 flex-shrink-0">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)} // Actualiza el estado al hacer clic
            className={`relative aspect-square w-full rounded-xl overflow-hidden border transition-all ${
              index === selectedImageIndex
                ? 'border-black dark:border-white opacity-100 ring-2 ring-black dark:ring-white'
                : 'border-neutral-200 dark:border-neutral-800 opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={image}
              alt={`${title} vista ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Imagen Principal */}
      <div className="relative aspect-square w-full bg-neutral-50 dark:bg-neutral-900/40 rounded-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden flex items-center justify-center p-6">
        <Image
          src={images[selectedImageIndex]} // Usa la imagen correspondiente al estado
          alt={title}
          fill
          priority // Mantenemos la prioridad para la carga rápida
          className="object-contain p-4 transition-opacity duration-300" // Opcional: suave transición
          sizes="(max-width: 1024px) 100vw, 50vw" // Ayuda a Next.js a optimizar el tamaño
        />
      </div>
    </div>
  );
}