"use client";

import { useEffect, useState } from "react";
import { ScrollTopTop } from "@/app/styles/MUI/common.styled";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show when scrolled down
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <ScrollTopTop onClick={scrollToTop}>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6L10.55 7.4L7 3.85L7 16H5L5 3.85L1.45 7.4L0 6L6 0L12 6Z" fill="#F2F2F2" />
          </svg>
        </ScrollTopTop>
      )}
    </>
  );
};

export default ScrollToTopButton;
