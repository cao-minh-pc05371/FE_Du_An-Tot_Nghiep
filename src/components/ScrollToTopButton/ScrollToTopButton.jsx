import React, { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!showButton) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed z-50 flex items-center justify-center gap-1 px-3 py-3 text-xs font-semibold text-white bg-neutral-900 rounded-lg shadow-md transition-all 
             hover:bg-neutral-800
             bottom-24 right-4
             sm:bottom-16 sm:right-6 sm:px-3 sm:py-2 sm:rounded-xl sm:text-sm
             md:bottom-12 md:right-8 md:px-4 md:py-2 md:gap-2 md:rounded-2xl md:text-base"
        >
            <span className="hidden sm:inline">Lên đầu</span>
            <ChevronsUp size={16} className="sm:size-[18px] md:size-[20px]" />
        </button>

    );
};

export default ScrollToTopButton;
