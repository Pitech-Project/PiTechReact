"use client"

import { lightTheme } from "@/app/styles/MUI/theme";
import { AlwaysKeepSimple } from "@/components/always-keep-simple";
import { ShipManagement } from "@/components/ship-management";
import { ShipManagement2 } from "@/components/ship-management2";
import "../global/globals.css";
import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";

export default function Page() {

	useEffect(() => {
		document.body.classList.add("case-studies");

		return () => {
			document.body.classList.remove("case-studies");
		};
	}, []);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AlwaysKeepSimple darkTheme={true}/>
        <ShipManagement />
        <ShipManagement2 />
      </ThemeProvider>
    </>
  );
}
