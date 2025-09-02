'use client';

import { Button } from '@/components/ui/button';
import { CategoryFilter } from '@/types/perfume';

interface FilterBarProps {
  selectedCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
}

const categories: { key: CategoryFilter; label: string; icon: string }[] = [
  { key: 'todos', label: 'Todos', icon: '✨' },
  { key: 'masculino', label: 'Masculino', icon: '👔' },
  { key: 'femenino', label: 'Femenino', icon: '🌸' },
  { key: 'unisex', label: 'Unisex', icon: '🌟' },
  { key: 'nicho', label: 'Nicho', icon: '💎' },
];

export function FilterBar({ selectedCategory, onCategoryChange }: FilterBarProps) {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(({ key, label, icon }) => (
            <Button
              key={key}
              variant={selectedCategory === key ? "default" : "outline"}
              size="default"
              onClick={() => onCategoryChange(key)}
              className={`
                flex items-center gap-2 px-6 py-2 transition-all duration-200 font-medium
                ${selectedCategory === key 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300 hover:text-purple-700'
                }
              `}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}