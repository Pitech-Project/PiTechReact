import DotImageAnimation from "@/components/common/dot-img-animation";

const HomeImgAnimation = () => (
  <DotImageAnimation
    // imageSrc="https://i.postimg.cc/hjhTdBSn/pawel-czerwinski-V5vtl-Id8s-Kw-unsplash.jpg"
    imageSrc="./assets/img/banner-img/homepage-animation-banner.jpg"
    detailLevel={10}
    minDotRadius={0.1}
    maxDotRadius={4}
    maxSpeed={15}
    maxForce={0.8}
  />
);

export default HomeImgAnimation;
