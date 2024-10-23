import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import CategoryButton from './CategoryButton'
import CategoryDrawer from "./CategoryDrawer";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const CategoryWrapper = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="absolute bottom-0 top-0 left-0 w-[300px]"
        >
            <motion.div className="absolute bottom-0 left-0 top-0 w-[300px] bg-background-primary" variants={sidebar} />
            <CategoryDrawer />
            <CategoryButton toggle={() => toggleOpen()}/>
        </motion.nav>
    )
}

export default CategoryWrapper