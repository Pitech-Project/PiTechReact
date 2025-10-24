"use client";

import "@/styles/global/globals.css";
import ContactForm from "@/components/contact/contact-form";
import { OurOffice } from "@/components/contact/our-offices";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import ScrollToTopButton from "@/components/common/scroll-to-top";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Contact - Pi Techniques";
  }, []);
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <OurOffice />
      <ContactForm />
    </SectionObserverProvider>
  );
}
