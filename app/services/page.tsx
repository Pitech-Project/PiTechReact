"use client"

import { lightTheme } from "@/app/styles/MUI/theme";
import "../global/globals.css";
import { ThemeProvider } from "@mui/material";
import { CraftingSolutions } from "@/components/crafting-solutions";
import { Service } from "@/components/Service";
import SmoothTextSlider from "@/components/top-companies";
import ServicesSolution from "@/components/Service-solutions";

export default function Page() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CraftingSolutions />
        <Service />
        <SmoothTextSlider homeSlider={false}/>
        <ServicesSolution />
      </ThemeProvider>
    </>
  );
}
