import ThemeButton from '@/components/common/ThemeButton';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import React, { useState } from 'react';
// import { Drawer, DrawerContent, DrawerTrigger, Button } from 'shadcn-ui'; // Importa los componentes necesarios

const CategoryDrawer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      name: 'Comercio',
      subcategories: [
        'Carnicería', 'Panadería', 'Farmacia', 'Verdulería', 'Almacén', 'Supermercado', 'Cajero automático'
      ],
    },
    {
      name: 'Equipamiento básico',
      subcategories: [
        'Cultura', 'Educación', 'Deporte', 'Bienestar social', 'Salud'
      ],
    },
    {
      name: 'Espacios verdes',
      subcategories: ['Plazas'],
    },
    {
      name: 'Movilidad',
      subcategories: ['Metrotranvía', 'Estaciones de bicicleta', 'Paradas de colectivo'],
    },
  ];

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Cierra la categoría si ya estaba abierta
    } else {
      setSelectedCategory(category); // Abre la nueva categoría
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <ThemeButton variant="default">Seleccionar Categoría</ThemeButton>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Categorías</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => handleCategoryClick(category.name)}
                  className="w-full text-left font-bold py-2"
                >
                  {category.name}
                </button>
                {selectedCategory === category.name && (
                  <ul className="pl-4">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex} className="py-1">
                        {subcategory}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
