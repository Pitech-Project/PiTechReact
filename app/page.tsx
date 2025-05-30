"use client";

import { Box } from "@mui/material";
import "@/styles/global/globals.css";
import Count from "@/components/home/count";
import { Services } from "@/components/home/services";
import Testimonial from "@/components/home/testimonials";
import SmoothTextSlider from "@/components/common/top-companies";
import WhoWeAre from "@/components/common/who-we-are";
import OurWorkCarousel from "@/components/home/our-work-carousel";
import HomeBanner from "@/components/home/home-banner";

export default function Home() {
  const transformup = true;
  return (
    <Box bgcolor={"custom.bgcolor"}>
      <HomeBanner transformup={transformup} />
      <Count />
      <WhoWeAre
        title={"who we are"}
        buttondisplay={true}
        aboutus={false}
        transformup={transformup}
      />
      <Services transformup={transformup} />
      <OurWorkCarousel />
      <SmoothTextSlider homeSlider={true} />
      <Testimonial />
    </Box>
  );
}
