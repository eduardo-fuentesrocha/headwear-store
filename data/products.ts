export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'gorra-mew-black',
    title: 'Gorra Trucker Mew Premium',
    description: 'Gorra estilo trucker en color negro con parche bordado de Mew y acabado holográfico en la visera. Edición limitada de alta calidad.',
    price: 399,
    currency: 'MXN',
    images: [
      '/images/mew-cap.png',
      '/images/mew-cap2.png',
      '/images/mew-cap3.png',
      '/images/bulbasaur-cap4.png'
    ],
    featured: true,
  },
  {
    id: '2',
    slug: 'gorra-pikachu-black',
    title: 'Gorra Trucker Pikachu Premium',
    description: 'Gorra estilo trucker en color negro con parche bordado de Pikachu y detalle holográfico. Diseño minimalista y perfecto para uso diario.',
    price: 399,
    currency: 'MXN',
    images: [
        '/images/pikachu-cap.png',
        '/images/pikachu-cap2.png',
        '/images/pikachu-cap3.png',
        '/images/pikachu-cap4.png'
    ],
    featured: true,
  },
  {
    id: '3',
    slug: 'gorra-charmander-black',
    title: 'Gorra Trucker Charmander Premium',
    description: 'Gorra estilo trucker en color negro con parche bordado de Charmander y acabado holográfico en la visera. Diseño exclusivo de alta calidad.',
    price: 399,
    currency: 'MXN',
    images: [
        '/images/charmander-cap.png',
        '/images/charmander-cap2.png',
        '/images/charmander-cap3.png',
        '/images/bulbasaur-cap4.png'
    ],
    featured: true,
  },
  {
    id: '4',
    slug: 'gorra-squirtle-black',
    title: 'Gorra Trucker Squirtle Premium',
    description: 'Gorra estilo trucker en color negro con parche bordado de Squirtle y detalle holográfico. Ajuste cómodo e ideal para uso diario.',
    price: 399,
    currency: 'MXN',
    images: [
        '/images/squirtle-cap.png',
        '/images/squirtle-cap2.png',
        '/images/squirtle-cap3.png',
        '/images/bulbasaur-cap4.png'
    ],
    featured: true,
  },
  {
    id: '5',
    slug: 'gorra-bulbasaur-black',
    title: 'Gorra Trucker Bulbasaur Premium',
    description: 'Gorra estilo trucker en color negro con parche bordado de Bulbasaur y sello holográfico en la visera. Materiales resistentes y bordado detallado.',
    price: 399,
    currency: 'MXN',
    images: [
        '/images/bulbasaur-cap2.png',
        '/images/bulbasaur-cap.png',
        '/images/bulbasaur-cap3.png',
        '/images/bulbasaur-cap4.png',
    ],
    featured: true,
  },
  {
    id: '6',
    slug: 'gorra-gengar-black',
    title: 'Gorra Trucker Gengar Premium',
    description: 'Gorra estilo trucker en color negro con parche bordado de Gengar y broche ajustable. Detalle holográfico en visera y acabado premium.',
    price: 399,
    currency: 'MXN',
    images: [
        '/images/gengar-cap.png',
        '/images/gengar-cap2.png',
        '/images/gengar-cap3.png',
        '/images/bulbasaur-cap4.png'
    ],
    featured: true,
  },
];