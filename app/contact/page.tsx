"use client";

import "@/styles/global/globals.css";
import ContactForm from "@/components/contact/contact-form";
import { OurOffice } from "@/components/contact/our-offices";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import ScrollToTopButton from "@/components/common/scroll-to-top";

export default function Page() {
  return (
    <SectionObserverProvider>
      <ScrollToTopButton />
      <OurOffice />
      <ContactForm />
    </SectionObserverProvider>
  );
}
