'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore, Perfume } from '@/types/perfume';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (perfume: Perfume) => {
        const items = get().items;
        const existingItem = items.find(item => item.perfume.id === perfume.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.perfume.id === perfume.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { perfume, quantity: 1 }],
          });
        }
      },
      
      removeItem: (id: string) => {
        set({
          items: get().items.filter(item => item.perfume.id !== id),
        });
      },
      
      updateQuantity: (id: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.perfume.id === id ? { ...item, quantity } : item
          ),
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      toggleCart: () => {
        set({ isOpen: !get().isOpen });
      },
      
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.perfume.price * item.quantity,
          0
        );
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'perfume-cart',
    }
  )
);