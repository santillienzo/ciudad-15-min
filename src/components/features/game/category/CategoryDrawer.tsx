import { motion } from "framer-motion";
import CategoryItem from './CategoryItem';
import { useAuth } from "@/components/contexts/AuthContext";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

interface Props {
  visibility: { [key: string]: boolean };
  handleVisibility: (category: string) => void;
}

const CategoryDrawer = ({visibility, handleVisibility}: Props) => {
  
  const {userData} = useAuth()

  if (!userData) return null;



  return (
    <motion.div variants={variants} className="pt-6 px-4 flex flex-col gap-3 h-full overflow-auto">
      {Object.entries(userData.locationVisited).map(([categorie, subcategories]) => (
        <CategoryItem name={categorie} subcategories={subcategories} key={categorie} visibility={visibility} handleVisibility={handleVisibility} />
      ))}
    </motion.div>
  );
};

export default CategoryDrawer;
