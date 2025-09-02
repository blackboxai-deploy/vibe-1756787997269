export interface Perfume {
  id: string;
  name: string;
  brand: string;
  category: 'masculino' | 'femenino' | 'unisex' | 'nicho';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  volume: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isOnSale?: boolean;
}

export interface CartItem {
  perfume: Perfume;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (perfume: Perfume) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export type CategoryFilter = 'todos' | 'masculino' | 'femenino' | 'unisex' | 'nicho';