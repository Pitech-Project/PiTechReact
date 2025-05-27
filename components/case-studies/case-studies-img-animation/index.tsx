import DotImageAnimation from "@/components/common/dot-img-animation";
import React from "react";

const CaseStudiesImgAnimation: React.FC = () => {
  return (
    <DotImageAnimation
      imageSrc="https://i.postimg.cc/jqzxmbv3/New-Project.jpg"
      detailLevel={12}
      minDotRadius={0.1}
      maxDotRadius={4}
      maxSpeed={15}
      maxForce={0.8}
      dotColor="#fff"
      hoverColor="#F7941E"
      fullHeight
    />
  );
};

export default CaseStudiesImgAnimation;
