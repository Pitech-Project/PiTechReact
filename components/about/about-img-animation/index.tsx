import DotImageAnimation from "@/components/common/dot-img-animation";

const AboutImgAnimation = () => (
  <DotImageAnimation
    imageSrc="https://i.postimg.cc/gcVZR6b0/photo-1632373564064-9af5f2854b38.avif"
    detailLevel={12}
    minDotRadius={0.1}
    maxDotRadius={4}
    maxSpeed={15}
    maxForce={0.8}
  />
);

export default AboutImgAnimation;
