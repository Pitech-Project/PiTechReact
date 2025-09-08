"use client";

import "@/styles/global/globals.css";
import ContactForm from "@/components/contact/contact-form";
import { OurOffice } from "@/components/contact/our-offices";

export default function Page() {
  return (
    <>
      <OurOffice />
      <ContactForm />
    </>
  );
}
