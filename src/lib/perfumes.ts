import { Perfume } from '@/types/perfume';

export const perfumes: Perfume[] = [
  {
    id: '1',
    name: 'Mystic Oud Royal',
    brand: 'Atelier de Parfums',
    category: 'unisex',
    price: 189,
    originalPrice: 220,
    description: 'Una fragancia rica y compleja que combina el oud tradicional con especias orientales y madera de sándalo.',
    notes: {
      top: ['Bergamota', 'Rosa Damascena', 'Cardamomo'],
      middle: ['Oud', 'Jazmín', 'Especias'],
      base: ['Sándalo', 'Ámbar', 'Almizcle']
    },
    image: 'https://placehold.co/400x500?text=Elegant+luxury+perfume+bottle+with+golden+accents+and+oud+essence',
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    volume: '100ml',
    isOnSale: true
  },
  {
    id: '2',
    name: 'Velvet Rose Noir',
    brand: 'Maison Luxe',
    category: 'femenino',
    price: 145,
    description: 'Una rosa moderna y sofisticada con toques de terciopelo negro y vainilla sensual.',
    notes: {
      top: ['Rosa Búlgara', 'Pimienta Rosa', 'Mandarina'],
      middle: ['Rosa de Damasco', 'Peonía', 'Violeta'],
      base: ['Vainilla', 'Madera Negra', 'Almizcle Blanco']
    },
    image: 'https://placehold.co/400x500?text=Sophisticated+black+and+pink+rose+perfume+bottle+with+velvet+texture',
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
    volume: '75ml'
  },
  {
    id: '3',
    name: 'Ocean Breeze Platinum',
    brand: 'Aqua Essence',
    category: 'masculino',
    price: 98,
    originalPrice: 125,
    description: 'Frescura marina con notas acuáticas y maderas nobles, perfecto para el hombre moderno.',
    notes: {
      top: ['Notas Marinas', 'Limón', 'Menta'],
      middle: ['Lavanda', 'Geranio', 'Notas Acuáticas'],
      base: ['Cedro', 'Vetiver', 'Almizcle']
    },
    image: 'https://placehold.co/400x500?text=Modern+blue+masculine+perfume+bottle+with+ocean+waves+design',
    inStock: true,
    rating: 4.4,
    reviewCount: 156,
    volume: '100ml',
    isOnSale: true
  },
  {
    id: '4',
    name: 'Golden Amber Elixir',
    brand: 'Parfums d\'Orient',
    category: 'unisex',
    price: 210,
    description: 'Un elixir dorado que captura la esencia del ámbar con especias exóticas y resinas preciosas.',
    notes: {
      top: ['Azafrán', 'Naranja Amarga', 'Canela'],
      middle: ['Ámbar Gris', 'Incienso', 'Mirra'],
      base: ['Ámbar', 'Benjuí', 'Pachulí']
    },
    image: 'https://placehold.co/400x500?text=Luxurious+golden+amber+perfume+bottle+with+ornate+details',
    inStock: true,
    rating: 4.9,
    reviewCount: 203,
    volume: '50ml'
  },
  {
    id: '5',
    name: 'White Tea Serenity',
    brand: 'Pure Elements',
    category: 'femenino',
    price: 78,
    description: 'Delicadeza y pureza en una fragancia que evoca la serenidad del té blanco y flores de primavera.',
    notes: {
      top: ['Té Blanco', 'Bergamota', 'Pera'],
      middle: ['Flor de Loto', 'Muguete', 'Té Verde'],
      base: ['Almizcle Blanco', 'Cedro', 'Vainilla Suave']
    },
    image: 'https://placehold.co/400x500?text=Minimalist+white+tea+perfume+bottle+with+zen+garden+aesthetics',
    inStock: true,
    rating: 4.3,
    reviewCount: 67,
    volume: '75ml'
  },
  {
    id: '6',
    name: 'Midnight Leather',
    brand: 'Urban Rebel',
    category: 'masculino',
    price: 132,
    description: 'Intensidad y carácter en una fragancia que combina cuero negro con especias ardientes.',
    notes: {
      top: ['Pimienta Negra', 'Elemi', 'Jengibre'],
      middle: ['Cuero', 'Violeta', 'Tabaco'],
      base: ['Cuero Negro', 'Oud', 'Vainilla Oscura']
    },
    image: 'https://placehold.co/400x500?text=Dark+leather+masculine+perfume+bottle+with+rebellious+edge',
    inStock: false,
    rating: 4.7,
    reviewCount: 112,
    volume: '100ml'
  },
  {
    id: '7',
    name: 'Cherry Blossom Dream',
    brand: 'Sakura House',
    category: 'femenino',
    price: 95,
    originalPrice: 115,
    description: 'Un sueño primaveral que captura la belleza efímera de los cerezos en flor.',
    notes: {
      top: ['Flor de Cerezo', 'Litchi', 'Mandarina Rosa'],
      middle: ['Sakura', 'Peonía', 'Magnolia'],
      base: ['Madera Blanca', 'Almizcle Suave', 'Heliotropo']
    },
    image: 'https://placehold.co/400x500?text=Delicate+pink+cherry+blossom+perfume+bottle+with+Japanese+aesthetics',
    inStock: true,
    rating: 4.5,
    reviewCount: 88,
    volume: '80ml',
    isOnSale: true
  },
  {
    id: '8',
    name: 'Tobacco Vanilla Reserve',
    brand: 'Gentleman\'s Club',
    category: 'masculino',
    price: 156,
    description: 'Sofisticación clásica con tabaco premium y vainilla bourbon en una mezcla irresistible.',
    notes: {
      top: ['Especias', 'Frutas Secas', 'Brandy'],
      middle: ['Tabaco', 'Cacao', 'Hoja de Tabaco'],
      base: ['Vainilla Bourbon', 'Haba Tonka', 'Madera Seca']
    },
    image: 'https://placehold.co/400x500?text=Classic+tobacco+vanilla+perfume+bottle+with+vintage+gentleman+design',
    inStock: true,
    rating: 4.6,
    reviewCount: 134,
    volume: '100ml'
  },
  {
    id: '9',
    name: 'Wild Iris Mystique',
    brand: 'Botanical Essence',
    category: 'femenino',
    price: 118,
    description: 'Misterio y elegancia en una fragancia que celebra la belleza salvaje del iris.',
    notes: {
      top: ['Iris', 'Bergamota', 'Cassis'],
      middle: ['Iris de Florencia', 'Rosa', 'Orquídea'],
      base: ['Iris Butter', 'Sándalo', 'Vetiver']
    },
    image: 'https://placehold.co/400x500?text=Mystical+purple+iris+perfume+bottle+with+botanical+wild+essence',
    inStock: true,
    rating: 4.4,
    reviewCount: 76,
    volume: '75ml'
  },
  {
    id: '10',
    name: 'Citrus Storm',
    brand: 'Fresh Dynamics',
    category: 'unisex',
    price: 82,
    description: 'Una tormenta de cítricos que energiza y revitaliza con su frescura explosiva.',
    notes: {
      top: ['Lima', 'Pomelo', 'Limón Siciliano'],
      middle: ['Jengibre', 'Menta', 'Hierbas Aromáticas'],
      base: ['Cedro Atlántico', 'Vetiver', 'Almizcle Limpio']
    },
    image: 'https://placehold.co/400x500?text=Dynamic+citrus+storm+perfume+bottle+with+electric+energy+design',
    inStock: true,
    rating: 4.2,
    reviewCount: 145,
    volume: '100ml'
  },
  {
    id: '11',
    name: 'Black Orchid Luxury',
    brand: 'Opulent Fragrances',
    category: 'femenino',
    price: 195,
    description: 'Lujo absoluto en una fragancia que combina la orquídea negra con especias exóticas.',
    notes: {
      top: ['Trufa', 'Gardenia', 'Cassis'],
      middle: ['Orquídea Negra', 'Especias', 'Frutas'],
      base: ['Pachulí', 'Incienso', 'Vainilla']
    },
    image: 'https://placehold.co/400x500?text=Luxurious+black+orchid+perfume+bottle+with+golden+opulent+details',
    inStock: true,
    rating: 4.8,
    reviewCount: 167,
    volume: '50ml'
  },
  {
    id: '12',
    name: 'Cedar Wood Intense',
    brand: 'Forest Elements',
    category: 'masculino',
    price: 108,
    originalPrice: 135,
    description: 'Intensidad natural con cedro auténtico y maderas nobles en una composición masculina.',
    notes: {
      top: ['Bergamota', 'Pimienta Rosa', 'Jengibre'],
      middle: ['Cedro del Atlas', 'Ciprés', 'Lavanda'],
      base: ['Cedro Virginiano', 'Vetiver', 'Sándalo']
    },
    image: 'https://placehold.co/400x500?text=Natural+cedar+wood+perfume+bottle+with+forest+masculine+design',
    inStock: true,
    rating: 4.5,
    reviewCount: 92,
    volume: '100ml',
    isOnSale: true
  },
  {
    id: '13',
    name: 'Royal Saffron',
    brand: 'Persian Treasures',
    category: 'nicho',
    price: 245,
    description: 'La realeza del azafrán en una fragancia que transporta a los palacios persas.',
    notes: {
      top: ['Azafrán', 'Rosa de Persia', 'Cardamomo'],
      middle: ['Oud Persa', 'Jazmín', 'Especias Reales'],
      base: ['Ámbar Gris', 'Almizcle Real', 'Madera de Agar']
    },
    image: 'https://placehold.co/400x500?text=Royal+persian+saffron+perfume+bottle+with+ornate+golden+patterns',
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    volume: '30ml'
  },
  {
    id: '14',
    name: 'Summer Breeze Light',
    brand: 'Seasonal Scents',
    category: 'femenino',
    price: 68,
    description: 'La ligereza del verano capturada en una fragancia fresca y luminosa.',
    notes: {
      top: ['Limón', 'Manzana Verde', 'Hojas Verdes'],
      middle: ['Muguete', 'Cyclamen', 'Jazmín Blanco'],
      base: ['Almizcle Blanco', 'Madera Clara', 'Ámbar Suave']
    },
    image: 'https://placehold.co/400x500?text=Light+summer+breeze+perfume+bottle+with+fresh+seasonal+design',
    inStock: true,
    rating: 4.1,
    reviewCount: 123,
    volume: '100ml'
  },
  {
    id: '15',
    name: 'Smoky Whiskey',
    brand: 'Distillery Collection',
    category: 'masculino',
    price: 142,
    description: 'La calidez del whiskey añejado con toques ahumados y especias premium.',
    notes: {
      top: ['Whiskey', 'Especias', 'Manzana Caramelizada'],
      middle: ['Roble', 'Canela', 'Nuez Moscada'],
      base: ['Humo', 'Vainilla', 'Cuero Suave']
    },
    image: 'https://placehold.co/400x500?text=Smoky+whiskey+perfume+bottle+with+distillery+barrel+inspired+design',
    inStock: false,
    rating: 4.7,
    reviewCount: 98,
    volume: '75ml'
  },
  {
    id: '16',
    name: 'Jasmine Night Garden',
    brand: 'Moonlight Fragrances',
    category: 'femenino',
    price: 125,
    originalPrice: 148,
    description: 'Un jardín nocturno donde el jazmín florece bajo la luz de la luna.',
    notes: {
      top: ['Jazmín Sambac', 'Bergamota', 'Pera'],
      middle: ['Jazmín Grandiflorum', 'Gardenia', 'Ylang-Ylang'],
      base: ['Sándalo', 'Almizcle', 'Ámbar Blanco']
    },
    image: 'https://placehold.co/400x500?text=Moonlit+jasmine+garden+perfume+bottle+with+nocturnal+floral+design',
    inStock: true,
    rating: 4.6,
    reviewCount: 114,
    volume: '80ml',
    isOnSale: true
  },
  {
    id: '17',
    name: 'Alpine Fresh Air',
    brand: 'Mountain Spirits',
    category: 'unisex',
    price: 89,
    description: 'La pureza del aire alpino con notas frescas y revigorantes de montaña.',
    notes: {
      top: ['Aire Fresco', 'Menta Glacial', 'Eucalipto'],
      middle: ['Pino Alpino', 'Lavanda Silvestre', 'Hierbas de Montaña'],
      base: ['Madera de Pino', 'Almizcle Limpio', 'Ámbar Cristalino']
    },
    image: 'https://placehold.co/400x500?text=Fresh+alpine+mountain+air+perfume+bottle+with+crystalline+design',
    inStock: true,
    rating: 4.3,
    reviewCount: 156,
    volume: '100ml'
  },
  {
    id: '18',
    name: 'Vintage Rose Petals',
    brand: 'Heritage Collection',
    category: 'femenino',
    price: 165,
    description: 'Nostalgia y romance en una fragancia que celebra la rosa clásica con elegancia atemporal.',
    notes: {
      top: ['Rosa de Grasse', 'Bergamota', 'Litchi'],
      middle: ['Rosa Centifolia', 'Peonía', 'Geranio'],
      base: ['Madera de Rosa', 'Almizcle Vintage', 'Vainilla Suave']
    },
    image: 'https://placehold.co/400x500?text=Vintage+rose+petals+perfume+bottle+with+classic+heritage+design',
    inStock: true,
    rating: 4.7,
    reviewCount: 87,
    volume: '75ml'
  },
  {
    id: '19',
    name: 'Spiced Cardamom',
    brand: 'Spice Route',
    category: 'unisex',
    price: 112,
    originalPrice: 138,
    description: 'Un viaje por la ruta de las especias con cardamomo y especias orientales.',
    notes: {
      top: ['Cardamomo Verde', 'Rosa', 'Limón'],
      middle: ['Cardamomo Negro', 'Jengibre', 'Nuez Moscada'],
      base: ['Oud', 'Sándalo', 'Ámbar']
    },
    image: 'https://placehold.co/400x500?text=Exotic+spiced+cardamom+perfume+bottle+with+oriental+spice+route+design',
    inStock: true,
    rating: 4.4,
    reviewCount: 103,
    volume: '75ml',
    isOnSale: true
  },
  {
    id: '20',
    name: 'Emerald Forest',
    brand: 'Nature\'s Essence',
    category: 'masculino',
    price: 96,
    description: 'La profundidad de un bosque esmeralda con notas verdes y maderas húmedas.',
    notes: {
      top: ['Hojas Verdes', 'Bergamota', 'Menta'],
      middle: ['Bosque Húmedo', 'Geranio', 'Lavanda'],
      base: ['Musgo de Roble', 'Vetiver', 'Cedro']
    },
    image: 'https://placehold.co/400x500?text=Deep+emerald+forest+perfume+bottle+with+natural+woodland+design',
    inStock: true,
    rating: 4.2,
    reviewCount: 129,
    volume: '100ml'
  },
  {
    id: '21',
    name: 'Diamond Dust Luxury',
    brand: 'Crystalline Collection',
    category: 'femenino',
    price: 289,
    description: 'Lujo cristalino que brilla como polvo de diamante con notas preciosas y etéreas.',
    notes: {
      top: ['Cristales de Hielo', 'Bergamota Diamante', 'Rosa Cristalina'],
      middle: ['Polvo de Diamante', 'Orquídea Blanca', 'Iris Platino'],
      base: ['Almizcle Cristalino', 'Sándalo Blanco', 'Ámbar Puro']
    },
    image: 'https://placehold.co/400x500?text=Luxurious+diamond+dust+crystal+perfume+bottle+with+sparkling+details',
    inStock: true,
    rating: 4.9,
    reviewCount: 67,
    volume: '50ml'
  }
];

export const getRandomPerfumes = (count: number = 12): Perfume[] => {
  const shuffled = [...perfumes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getPerfumesByCategory = (category: string): Perfume[] => {
  if (category === 'todos') return perfumes;
  return perfumes.filter(perfume => perfume.category === category);
};

export const searchPerfumes = (query: string): Perfume[] => {
  const lowercaseQuery = query.toLowerCase();
  return perfumes.filter(
    perfume =>
      perfume.name.toLowerCase().includes(lowercaseQuery) ||
      perfume.brand.toLowerCase().includes(lowercaseQuery) ||
      perfume.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getPerfumeById = (id: string): Perfume | undefined => {
  return perfumes.find(perfume => perfume.id === id);
};

export const getSalePerfumes = (): Perfume[] => {
  return perfumes.filter(perfume => perfume.isOnSale);
};

export const getTopRatedPerfumes = (): Perfume[] => {
  return perfumes.filter(perfume => perfume.rating >= 4.5).sort((a, b) => b.rating - a.rating);
};