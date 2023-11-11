"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FlipOnScrollProps = {
    children: React.ReactNode;
};

const variants = {
    visible: {
        rotateY: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
    hidden: {
        rotateY: 90,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeIn" },
    },
};

const FlipOnScroll: React.FC<FlipOnScrollProps> = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            className='relative m-2 flex flex-col items-center justify-center rounded-xl border-2 border-white p-8 text-center transition-colors duration-300 ease-in-out hover:border-gray-300 hover:bg-slate-900'
        >
            {children}
        </motion.div>
    );
};

export default FlipOnScroll;
