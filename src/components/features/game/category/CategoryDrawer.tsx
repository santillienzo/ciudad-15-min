import { motion } from "framer-motion";
import CategoryItem from './CategoryItem';
import json from "@/lib/data/categories.json"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const CategoryDrawer = () => {
  const {categories} = json;

  return (
    <motion.div variants={variants} className="pt-6 px-4 flex flex-col gap-3">
      {categories.map(({name, subcategories}) => (
        <CategoryItem name={name} subcategories={subcategories} key={name} />
      ))}
    </motion.div>
  );
};

export default CategoryDrawer;
