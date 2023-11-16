"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface GrowOnScrollProps {
    children: React.ReactNode;
    className?: string;
}

const GrowOnScroll: React.FC<GrowOnScrollProps> = ({ children, className }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, isInView]);

    const variants = {
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
        hidden: { scale: 0.8, opacity: 0 },
    };

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={variants}
            className={cn(
                "transition-colors duration-300 ease-in-out",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default GrowOnScroll;
