"use client";

import { Box } from "@mui/material";
import "@/styles/global/globals.css";
import { Services } from "@/components/home/services";
import SmoothTextSlider from "@/components/common/top-companies";
import WhoWeAre from "@/components/common/who-we-are";
import OurWorkCarousel from "@/components/home/our-work-carousel";
import HomeBanner from "@/components/home/home-banner";
import Testimonial from "@/components/home/testimonials";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Homepage - Pi Techniques";
  }, []);
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <Box bgcolor={"custom.bgcolor"}>
        <HomeBanner />
        {/* <Count /> */}
        <WhoWeAre />
        <Services />
        <OurWorkCarousel />
        <SmoothTextSlider homeSlider={true} />
        <Testimonial />
      </Box>
    </SectionObserverProvider>
  );
}
