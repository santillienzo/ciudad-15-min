import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import CategoryButton from './CategoryButton'
import CategoryDrawer from "./CategoryDrawer";

const sidebar = {
    open: () => {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        return {
            clipPath: `circle(${viewportHeight * 4}px at ${viewportWidth}px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }
    },
    closed: () => {
        const viewportHeight = window.innerHeight;
        const heightInPixels = (.6666666 * viewportHeight) - 30 - 20;
        return {
            clipPath: `circle(30px at 40px ${heightInPixels}px)`,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
};

interface Props {
    visibility: { [key: string]: boolean };
    handleVisibility: (category: string) => void;
}

const CategoryWrapper = ({visibility, handleVisibility}: Props) => {
    //Toggle open
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="absolute bottom-0 left-0 w-full h-2/3 bg-background-secondary rounded-t-2xl overflow-hidden"
            variants={sidebar}
        >
            <CategoryDrawer visibility={visibility} handleVisibility={handleVisibility}/>
            <CategoryButton toggle={() => toggleOpen()}/>
        </motion.nav>
    )
}

export default CategoryWrapper