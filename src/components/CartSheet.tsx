'use client';

import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/lib/cart-store';

export function CartSheet() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCartStore();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Carrito de Compras
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <div className="text-6xl mb-4">🛍️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-gray-600 mb-6">
              Descubre nuestras fragancias exclusivas y encuentra tu perfume perfecto.
            </p>
            <Button onClick={toggleCart} variant="outline">
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <>
            {/* Items del carrito */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.perfume.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  {/* Imagen del producto */}
                  <div className="w-16 h-20 flex-shrink-0 rounded-md overflow-hidden bg-white">
                    <img
                      src={item.perfume.image}
                      alt={item.perfume.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="64" height="80" fill="#F3F4F6"/>
                            <text x="32" y="35" text-anchor="middle" fill="#9CA3AF" font-family="Arial, sans-serif" font-size="24">🌸</text>
                            <text x="32" y="55" text-anchor="middle" fill="#6B7280" font-family="Arial, sans-serif" font-size="8">${item.perfume.brand}</text>
                          </svg>
                        `)}`;
                      }}
                    />
                  </div>

                  {/* Información del producto */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                      {item.perfume.name}
                    </h4>
                    <p className="text-xs text-purple-600 font-medium mb-2">
                      {item.perfume.brand} • {item.perfume.volume}
                    </p>
                    
                    {/* Precio y controles de cantidad */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">
                          €{item.perfume.price}
                        </span>
                        {item.perfume.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            €{item.perfume.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 w-6 p-0"
                          onClick={() => handleQuantityChange(item.perfume.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <Badge variant="secondary" className="px-2">
                          {item.quantity}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 w-6 p-0"
                          onClick={() => handleQuantityChange(item.perfume.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeItem(item.perfume.id)}
                        >
                          ×
                        </Button>
                      </div>
                    </div>

                    {/* Subtotal del item */}
                    <div className="mt-2 text-right">
                      <span className="text-sm font-semibold text-gray-900">
                        Subtotal: €{(item.perfume.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Resumen del pedido */}
            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Total de productos: {getTotalItems()}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  Limpiar carrito
                </Button>
              </div>
              
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-purple-600">€{getTotalPrice().toFixed(2)}</span>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                  size="lg"
                >
                  Proceder al Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={toggleCart}
                >
                  Continuar Comprando
                </Button>
              </div>

              {/* Información adicional */}
              <div className="text-xs text-gray-500 text-center space-y-1">
                <p>✓ Envío gratis en pedidos superiores a €50</p>
                <p>✓ Garantía de satisfacción 30 días</p>
                <p>✓ Muestras gratis con cada pedido</p>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}