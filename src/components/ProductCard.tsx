'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Perfume } from '@/types/perfume';
import { useCartStore } from '@/lib/cart-store';

interface ProductCardProps {
  perfume: Perfume;
  onViewDetails: (perfume: Perfume) => void;
}

export function ProductCard({ perfume, onViewDetails }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addItem } = useCartStore();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'masculino': return 'bg-blue-100 text-blue-800';
      case 'femenino': return 'bg-pink-100 text-pink-800';
      case 'unisex': return 'bg-purple-100 text-purple-800';
      case 'nicho': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'masculino': return 'Masculino';
      case 'femenino': return 'Femenino';
      case 'unisex': return 'Unisex';
      case 'nicho': return 'Nicho';
      default: return category;
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(perfume);
  };

  return (
    <Card className="group cursor-pointer overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-purple-300 transform hover:-translate-y-1">
      <div onClick={() => onViewDetails(perfume)}>
        {/* Imagen del producto */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {!imageError && (
            <img
              src={perfume.image}
              alt={perfume.name}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          )}
          
          {/* Fallback para errores de imagen */}
          {imageError && (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="text-6xl mb-4">🌸</div>
              <div className="text-gray-500 text-center px-4">
                <div className="font-medium">{perfume.name}</div>
                <div className="text-sm">{perfume.brand}</div>
              </div>
            </div>
          )}
          
          {/* Badge de descuento */}
          {perfume.originalPrice && (
            <div className="absolute top-3 left-3">
              <Badge variant="destructive" className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold">
                -{Math.round(((perfume.originalPrice - perfume.price) / perfume.originalPrice) * 100)}%
              </Badge>
            </div>
          )}
          
          {/* Badge de stock */}
          {!perfume.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge variant="secondary" className="bg-gray-800 text-white font-semibold">
                Agotado
              </Badge>
            </div>
          )}
          
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Categoría */}
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className={`text-xs font-medium ${getCategoryColor(perfume.category)}`}>
              {getCategoryLabel(perfume.category)}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="text-yellow-400">★</span>
              <span className="font-medium">{perfume.rating}</span>
              <span>({perfume.reviewCount})</span>
            </div>
          </div>

          {/* Marca */}
          <div className="text-xs font-medium text-purple-600 uppercase tracking-wide">
            {perfume.brand}
          </div>

          {/* Nombre del producto */}
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-700 transition-colors">
            {perfume.name}
          </h3>

          {/* Volumen */}
          <div className="text-sm text-gray-500 font-medium">
            {perfume.volume}
          </div>

          {/* Precio */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                €{perfume.price}
              </span>
              {perfume.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  €{perfume.originalPrice}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </div>

      {/* Botón de agregar al carrito */}
      <div className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!perfume.inStock}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {perfume.inStock ? 'Agregar al Carrito' : 'No Disponible'}
        </Button>
      </div>
    </Card>
  );
}