import { formatCategoryName, formatSubcategoryName } from "@/lib/utils.string";
import { motion } from "framer-motion";
import { ChevronRight, SearchCheck } from "lucide-react";
import { useState } from "react";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

interface Props {
    name: string;  // 0-4 (index) of the category in the colors array
    subcategories: {name: string}[]; //
}

const CategoryItem = ({ name, subcategories }:Props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <motion.div
            variants={variants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-background-secondary-muted p-4 rounded-xl text-white"
            onClick={handleOpen}
        >
            <div className="flex w-full">
                <span className="flex-1">
                    {formatCategoryName(name)}
                </span>
                <motion.div
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronRight />
                </motion.div>
            </div>
            {
                open && <motion.div 
                key={`content-${name}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: 'auto',
                    opacity: 1,
                }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2, delay: open ? 0 : 0.1 },
                }}
                className="mt-2 divide-y divide-gray-300"
            >
                {
                    subcategories.map((subcategory, index) => (
                        <div key={index} className="p-4 flex">
                            <span className="flex-1">
                                {formatSubcategoryName(subcategory.name)}
                            </span>
                            <SearchCheck color="#cecece"/>
                        </div>
                    ))
                }
            </motion.div>
            }
            
        </motion.div>
    )
}

export default CategoryItem