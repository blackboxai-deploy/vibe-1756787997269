'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FilterBar } from '@/components/FilterBar';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductModal } from '@/components/ProductModal';
import { CartSheet } from '@/components/CartSheet';
import { perfumes, getPerfumesByCategory, searchPerfumes } from '@/lib/perfumes';
import { Perfume, CategoryFilter } from '@/types/perfume';

export default function Home() {
  const [displayedPerfumes, setDisplayedPerfumes] = useState<Perfume[]>(perfumes);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efecto para filtrar perfumes según categoría y búsqueda
  useEffect(() => {
    let filtered = perfumes;

    // Aplicar filtro de categoría
    if (selectedCategory !== 'todos') {
      filtered = getPerfumesByCategory(selectedCategory);
    }

    // Aplicar filtro de búsqueda
    if (searchQuery.trim()) {
      filtered = searchPerfumes(searchQuery).filter(perfume => 
        selectedCategory === 'todos' || perfume.category === selectedCategory
      );
    }

    setDisplayedPerfumes(filtered);
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleViewDetails = (perfume: Perfume) => {
    setSelectedPerfume(perfume);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPerfume(null);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header con navegación y búsqueda */}
      <Header onSearch={handleSearch} searchQuery={searchQuery} />

      {/* Sección Hero */}
      <HeroSection />

      {/* Barra de filtros por categoría */}
      <FilterBar 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />

      {/* Grid de productos */}
      <ProductGrid 
        perfumes={displayedPerfumes} 
        onViewDetails={handleViewDetails} 
      />

      {/* Modal de detalles del producto */}
      <ProductModal 
        perfume={selectedPerfume}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Panel lateral del carrito */}
      <CartSheet />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Parfumería Élite
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Tu destino para fragancias de lujo y perfumes exclusivos. 
                Descubre aromas únicos que definen tu personalidad.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  PE
                </div>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Devoluciones</a></li>
              </ul>
            </div>

            {/* Atención al cliente */}
            <div>
              <h4 className="font-semibold mb-4">Atención al Cliente</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chat en Vivo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garantías</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Muestras Gratis</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Parfumería Élite. Todos los derechos reservados.
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}