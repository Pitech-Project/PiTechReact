"use client";

import { useEffect, useState } from "react";
import DotImageAnimation from "@/components/common/dot-img-animation";

const CareerImgAnimation = () => {
  const [imageSrc, setImageSrc] = useState("");

  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    const handleResize = () => {
      setImageSrc(
        isMobile
          ? "/assets/img/banner-img/career-mobile.jpg"
          : "/assets/img/banner-img/career-img-new.jpg",
      );
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!imageSrc) return null;

  return (
    <DotImageAnimation
      imageSrc={imageSrc}
      detailLevel={10}
      minDotRadius={0.1}
      maxDotRadius={4}
      maxSpeed={15}
      maxForce={0.8}
    />
  );
};

export default CareerImgAnimation;
