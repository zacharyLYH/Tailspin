"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {showScrollToTop && (
                <Button
                    onClick={scrollToTop}
                    className='w-22 h-22 fixed bottom-4 right-4 mb-8 mr-8 rounded-full bg-blue-800 p-4 text-green-500 hover:bg-slate-400'
                >
                    ↑
                </Button>
            )}
        </>
    );
};

export default ScrollToTop;
