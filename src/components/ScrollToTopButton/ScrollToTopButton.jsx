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
            className="fixed bottom-16 right-4 z-50 flex items-center gap-1 px-2 py-1 rounded-xl bg-neutral-900 text-white text-xs font-semibold shadow-md hover:bg-neutral-800 transition-all
               sm:bottom-16 sm:right-6 sm:px-4 sm:py-2 sm:gap-2 sm:rounded-2xl sm:text-sm"
        >
            Lên đầu <ChevronsUp size={14} className="sm:size-[18px]" />
        </button>
    );
};

export default ScrollToTopButton;
