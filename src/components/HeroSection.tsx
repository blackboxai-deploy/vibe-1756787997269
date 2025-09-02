'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-amber-600/5"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-purple-200 mb-6">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ✨ Colección Premium 2024
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              Descubre tu
            </span>
            <span className="block bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Fragancia Perfecta
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explora nuestra exclusiva colección de perfumes de lujo, desde esencias clásicas hasta creaciones contemporáneas que definen tu personalidad única.
          </p>

          {/* Estadísticas */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                21+
              </div>
              <div className="text-sm text-gray-500 font-medium">Fragancias Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-amber-600 bg-clip-text text-transparent">
                4.7★
              </div>
              <div className="text-sm text-gray-500 font-medium">Rating Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-sm text-gray-500 font-medium">Clientes Felices</div>
            </div>
          </div>

          {/* Características */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200">
              <span className="text-green-500">✓</span>
              Envío Gratis
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200">
              <span className="text-green-500">✓</span>
              Garantía de Calidad
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200">
              <span className="text-green-500">✓</span>
              Muestras Gratis
            </div>
          </div>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-amber-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/10 via-pink-200/10 to-amber-200/10 rounded-full blur-3xl"></div>
    </section>
  );
}