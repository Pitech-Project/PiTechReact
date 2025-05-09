"use client"

import { lightTheme } from "@/app/styles/MUI/theme";
import { AlwaysKeepSimple } from "@/components/always-keep-simple";
import { ShipManagement } from "@/components/ship-management";
import { ShipManagement2 } from "@/components/ship-management2";
import "../global/globals.css";
import { ThemeProvider } from "@mui/material";

export default function Page() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AlwaysKeepSimple/>
        <ShipManagement />
        <ShipManagement2 />
      </ThemeProvider>
    </>
  );
}
