"use client"

import { lightTheme } from "@/app/styles/MUI/theme";
import { AlwaysKeepSimple } from "@/components/always-keep-simple";
import "../global/globals.css";
import { ThemeProvider } from "@mui/material";
import { AccessPlateforms } from "@/components/access-plateforms";
import { Challenges } from "@/components/challenges";
import { FeaturesOfProject } from "@/components/Features-of-project";


export default function Page() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AlwaysKeepSimple/>
        <AccessPlateforms />
        <Challenges />
        <FeaturesOfProject />
      </ThemeProvider>
    </>
  );
}
