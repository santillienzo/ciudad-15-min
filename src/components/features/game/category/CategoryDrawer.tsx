import { motion } from "framer-motion";
import CategoryItem from './CategoryItem';
// import { Drawer, DrawerContent, DrawerTrigger, Button } from 'shadcn-ui'; // Importa los componentes necesarios

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const CategoryDrawer = () => {
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // const categories = [
  //   {
  //     name: 'Comercio',
  //     subcategories: [
  //       'Carnicería', 'Panadería', 'Farmacia', 'Verdulería', 'Almacén', 'Supermercado', 'Cajero automático'
  //     ],
  //   },
  //   {
  //     name: 'Equipamiento básico',
  //     subcategories: [
  //       'Cultura', 'Educación', 'Deporte', 'Bienestar social', 'Salud'
  //     ],
  //   },
  //   {
  //     name: 'Espacios verdes',
  //     subcategories: ['Plazas'],
  //   },
  //   {
  //     name: 'Movilidad',
  //     subcategories: ['Metrotranvía', 'Estaciones de bicicleta', 'Paradas de colectivo'],
  //   },
  // ];

  return (
    <motion.ul variants={variants}>
      {itemIds.map(i => (
        <CategoryItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

export default CategoryDrawer;

const itemIds = [0, 1, 2, 3, 4];
