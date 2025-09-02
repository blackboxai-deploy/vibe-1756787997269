'use client';

import { Perfume } from '@/types/perfume';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  perfumes: Perfume[];
  onViewDetails: (perfume: Perfume) => void;
}

export function ProductGrid({ perfumes, onViewDetails }: ProductGridProps) {
  if (perfumes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No se encontraron perfumes
          </h3>
          <p className="text-gray-600">
            Intenta con otros términos de búsqueda o explora todas las categorías.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Nuestra Colección Premium
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre fragancias únicas que definen tu estilo personal. 
            Cada perfume cuenta una historia, cada aroma despierta emociones.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {perfumes.map((perfume) => (
            <ProductCard
              key={perfume.id}
              perfume={perfume}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
            <span className="text-sm text-gray-600">
              Mostrando <span className="font-semibold text-purple-600">{perfumes.length}</span> productos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}