'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Perfume } from '@/types/perfume';
import { useCartStore } from '@/lib/cart-store';

interface ProductModalProps {
  perfume: Perfume | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ perfume, isOpen, onClose }: ProductModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addItem } = useCartStore();

  if (!perfume) return null;

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

  const handleAddToCart = () => {
    addItem(perfume);
    onClose();
  };

  // Reset de estado de imagen cuando cambia el producto
  React.useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [perfume?.id]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {perfume.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Imagen del producto */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
              {!imageError && (
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
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
                  <div className="text-8xl mb-6">🌸</div>
                  <div className="text-gray-500 text-center px-4">
                    <div className="font-medium text-lg">{perfume.name}</div>
                    <div className="text-sm">{perfume.brand}</div>
                  </div>
                </div>
              )}
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge variant="secondary" className={`text-xs font-medium ${getCategoryColor(perfume.category)}`}>
                  {getCategoryLabel(perfume.category)}
                </Badge>
                {perfume.originalPrice && (
                  <Badge variant="destructive" className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold">
                    -{Math.round(((perfume.originalPrice - perfume.price) / perfume.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
              
              {!perfume.inStock && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <Badge variant="secondary" className="bg-gray-800 text-white font-semibold text-lg px-4 py-2">
                    Agotado
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            {/* Marca */}
            <div className="text-lg font-semibold text-purple-600 uppercase tracking-wide">
              {perfume.brand}
            </div>

            {/* Rating y reseñas */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(perfume.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-gray-900">{perfume.rating}</span>
              </div>
              <div className="text-sm text-gray-500">
                ({perfume.reviewCount} reseñas)
              </div>
            </div>

            {/* Precios */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                €{perfume.price}
              </span>
              {perfume.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  €{perfume.originalPrice}
                </span>
              )}
              <Badge variant="outline" className="text-sm font-medium">
                {perfume.volume}
              </Badge>
            </div>

            <Separator />

            {/* Descripción */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Descripción</h3>
              <p className="text-gray-700 leading-relaxed">
                {perfume.description}
              </p>
            </div>

            {/* Notas olfativas */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Notas Olfativas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-purple-600 mb-2">Notas de Salida</h4>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.top.map((note, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-pink-600 mb-2">Notas de Corazón</h4>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.middle.map((note, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-pink-50 text-pink-700 border-pink-200">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-amber-600 mb-2">Notas de Fondo</h4>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.base.map((note, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">
                        {note}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Botón de agregar al carrito */}
            <Button
              onClick={handleAddToCart}
              disabled={!perfume.inStock}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {perfume.inStock ? 'Agregar al Carrito' : 'No Disponible'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}