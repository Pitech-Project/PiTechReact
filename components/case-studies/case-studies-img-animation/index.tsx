"use client";

import { useEffect, useState } from "react";
import DotImageAnimation from "@/components/common/dot-img-animation";

const CaseStudiesImgAnimation: React.FC = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;

      setImageSrc(
        isMobile
          ? "/assets/img/banner-img/casestudy-mobile.jpg"
          : "/assets/img/banner-img/case-studies-banner.jpg",
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!imageSrc) return null;

  return (
    <DotImageAnimation
      imageSrc={imageSrc}
      detailLevel={5}
      minDotRadius={0.1}
      maxDotRadius={4}
      maxSpeed={15}
      maxForce={0.5}
      fullHeight
    />
  );
};

export default CaseStudiesImgAnimation;
