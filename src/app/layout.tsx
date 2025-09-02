import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parfumería Élite - Fragancias de Lujo',
  description: 'Descubre nuestra exclusiva colección de perfumes de lujo. Fragancias premium para hombre, mujer y unisex de las mejores marcas del mundo.',
  keywords: 'perfumes, fragancias, lujo, parfumería, masculino, femenino, unisex, oud, rosa, cedro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}