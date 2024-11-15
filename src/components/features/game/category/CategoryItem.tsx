import { formatCategoryName, formatSubcategoryName } from "@/lib/utils.string";
import { motion } from "framer-motion";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/data/categories";

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
    subcategories: { [key: string]: boolean; }; //
    visibility: { [key: string]: boolean; };
    handleVisibility: (category: string) => void;
}

const CategoryItem = ({ name, subcategories, visibility, handleVisibility }:Props) => {
    const [open, setOpen] = useState(false)
    const category = categories.find((category) => category.name === name)

    if (!category) return null;

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleVisibilityClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        handleVisibility(name)
    }

    return (
        <motion.div
            variants={variants}
            // whileHover={{ scale: 1.02 }}
            // whileTap={{ scale: 0.95 }}
            className="bg-background-secondary-muted p-4 rounded-xl text-white"
            onClick={handleOpen}
        >
            <div className="flex w-full">
                <div className="mr-2" onClick={handleVisibilityClick}>
                    {
                        visibility[name] ? <Eye color="white" /> : <EyeOff color="white"/>
                    }
                </div>
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
                    Object.entries(subcategories).map(([subcategory, visited]) => {
                        const icons = category.subcategories.find((subcategory) => subcategory.name === Object.keys(subcategories)[0])?.icons
                        if (!icons) return null;

                        return (
                            <div key={subcategory} className="p-4 flex items-center">
                                <span className="flex-1">
                                {formatSubcategoryName(subcategory)}
                            </span>
                            {
                                visited ?  <img src={icons.enable} alt={name} width={40} height={40}/> : 
                                            <img src={icons.disable} alt={name} width={40} height={40}/>
                            }
                            </div>
                        )
                    })
                }
            </motion.div>
            }
            
        </motion.div>
    )
}

export default CategoryItem