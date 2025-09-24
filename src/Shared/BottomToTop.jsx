import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#d031b6] text-white flex items-center justify-center shadow-lg hover:bg-[#ca19ad] transition-all duration-300 animate-fade-in-up hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#ca19ad] focus:ring-opacity-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default BottomToTop;
