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
                    className="rounded-full fixed bottom-4 right-4 p-4 mr-8 mb-8 w-22 h-22 bg-blue-800 hover:bg-slate-400"
                >
                    ↑
                </Button>
            )}
        </>
    );
};

export default ScrollToTop;
