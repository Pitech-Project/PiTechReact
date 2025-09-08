"use client";

import type { FormData } from "@/components/careers/career-form";
import casestudy1 from "@/public/assets/img/case-studies/case-studies1.png";
import casestudy2 from "@/public/assets/img/case-studies/case-studies-2.png";
import casestudy3 from "@/public/assets/img/case-studies/case-studies-3.png";
import casestudy4 from "@/public/assets/img/case-studies/case-studies-4.png";

type FieldConfig = {
  id: number;
  type: string;
  name: keyof FormData;
  label: string;
};

export const apiUrl = {
  api: {
    getApi: "/api/get-submissions",
    saveApi: "/api/save-submission",
  },
};

export const fileExtension = {
  pdf: "application/pdf",
  msword: "application/msword",
  document:
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export const careerFormFields: FieldConfig[] = [
  {
    id: 1,
    type: "text",
    name: "name",
    label: "First Name ",
  },
  {
    id: 2,
    type: "text",
    name: "lastname",
    label: "Last Name ",
  },
  {
    id: 3,
    type: "email",
    name: "email",
    label: "Email ",
  },
  {
    id: 4,
    type: "number",
    name: "contactnumber",
    label: "Contact Number ",
  },
];

export const SERVICES = {
  SERVICES1: "Tailored and templated – apps that make an impact",
  SERVICES2: "Strategic intelligence, real-time decisions",
  SERVICES3: "Infrastructure that moves at the speed of business",
  SERVICES4: "Sleek interfaces compliment effortless journeys ",
  SERVICES5: "Strategic mobile innovation built with precision",
  SERVICES6: "Web experiences that click",
};

export const caseStudy = [
  {
    id: "chanakya",
    title: "chanakya | Fashion",
    subTitle: "Threading technology into fashion",
    info: "Transforming a legacy fashion export house with a tailor-made ERP ecosystem across R&D, sampling, and production.",
    tags: ["Mobile", "Tablet"],
    img: casestudy1,
    isBgBlack: true,
  },
  {
    id: "ibs",
    title: "IBS intelligence | Fintec",
    subTitle: "Transforming fintech publishing",
    info: "Building a secure, scalable digital platform that centralizes premium fintech research, protects IP, and boosts subscription revenue.",
    tags: ["Web", "Desktop", "Mobile", "Tablet"],
    img: casestudy2,
    isBgBlack: false,
  },
  {
    id: "citiusTech",
    title: "citiustech | healthcare",
    subTitle: "The strong and steady ERP evolution",
    info: "Transforming a simple timesheet tracker into a decade-strong ERP that streamlines people, processes, projects, and payments for IT services.",
    tags: ["Web", "Desktop", "Mobile", "Tablet"],
    img: casestudy3,
    isBgBlack: false,
  },
  {
    id: "tajGroupofHotels",
    title: "taj | hospitality",
    subTitle: "A premium, car rental management system",
    info: "Powering 70+ Taj Hotels with a unified, luxury-grade car rental management system that streamlines bookings, fleet logistics, and guest service.",
    tags: ["Mobile", "Tablet"],
    img: casestudy4,
    isBgBlack: true,
  },
];
