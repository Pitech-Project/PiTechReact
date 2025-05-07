"use client"

import { lightTheme } from "@/app/styles/MUI/theme";
import "../global/globals.css";
import { ThemeProvider } from "@mui/material";
import ContactForm from "@/components/contact-form";
import { OurOffice } from "@/components/our-offices";

export default function Page() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <ContactForm />
        <OurOffice />
      </ThemeProvider>
    </>
  );
}
