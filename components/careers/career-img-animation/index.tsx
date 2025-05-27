import DotImageAnimation from "@/components/common/dot-img-animation";

const CareerImgAnimation = () => (
  <DotImageAnimation
    imageSrc="https://i.postimg.cc/Hx4J1DDp/case-studies-banner2.avif"
     detailLevel={12}
      minDotRadius={0.1}
      maxDotRadius={4}
      maxSpeed={15}
      maxForce={0.8}
  />
);

export default CareerImgAnimation;
