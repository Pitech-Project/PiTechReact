import DotImageAnimation from "@/components/common/dot-img-animation";

const ServicesImgAnimation = () => (
  <DotImageAnimation
    imageSrc="https://i.postimg.cc/pXD7jCq6/services.avif"
    detailLevel={12}
    minDotRadius={0.1}
    maxDotRadius={4}
    maxSpeed={15}
    maxForce={0.8}
  />
);

export default ServicesImgAnimation;
