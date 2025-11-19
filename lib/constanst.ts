"use client";

import type { FormData } from "@/components/careers/career-form";
import casestudy1 from "@/public/assets/img/case-studies/case-studies1.png";
import casestudy2 from "@/public/assets/img/case-studies/case-studies-2.png";
import casestudy3 from "@/public/assets/img/case-studies/case-studies-3.png";
import casestudy4 from "@/public/assets/img/case-studies/laptop-4.png";

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
  SERVICES1: "Tailored and templated apps that make an impact",
  SERVICES7: "Harnessing generative AI for real-world impact",
  SERVICES2: "Strategic intelligence, real-time decisions",
  SERVICES3: "Sleek interfaces complimenting effortless journeys ",
  SERVICES4: "Strategic mobile innovation built with precision",
  SERVICES5: "Web experiences that click",
  SERVICES6: "Infrastructure that scales, DevOps that delivers",
  SERVICES8: "Connecting systems, creating seamless workflows",
};

export const LOTTIEANIMATION = {
  LottiePlayer1: `https://lottie.host/e099a1fa-cc41-4a4c-b468-45d1efaabd08/ZI74c8HxKR.lottie`,
  LottiePlayer7: `https://lottie.host/4973ca11-3386-4057-adac-5fa8098ac387/2ueAe6Xxwb.lottie`,
  LottiePlayer2: `https://lottie.host/5ddf6e19-2253-4413-a68a-4395b41fafd9/PyspVcKRLz.lottie`,
  LottiePlayer3:
    "https://lottie.host/8b9c39bd-c58f-4cf9-b147-492435685393/ScoJHZOyj9.lottie",
  LottiePlayer4:
    "https://lottie.host/9588ccb3-f1b5-448d-8940-605f112cbd84/ACvLh4sJQ4.lottie",
  LottiePlayer5:
    "https://lottie.host/357aebd0-19ba-45bd-9058-dd4b9a2f8297/hr0mQTHeMm.lottie",
  LottiePlayer6:
    "https://lottie.host/9274627e-7752-49fb-b054-f4d91750bf3e/sPhBzDgj8F.lottie",
  LottiePlayer8:
    "https://lottie.host/41aca960-62bb-4e93-b976-bbff74c44864/pDzfVTtitx.lottie",
};

export const caseStudy = [
  {
    id: "chanakya",
    title: "chanakya | Fashion & LIFESTYLE",
    subTitle: "Threading technology into fashion",
    info: "Transforming a legacy fashion export house with a tailor-made ERP ecosystem across R&D, sampling, and production.",
    tags: [
      "Enterprise .NET + SQL",
      "Data & Messaging",
      "ETL & Data Pipelines",
      "Database Integration & API",
      "Xamarin",
    ],
    img: casestudy1,
    isBgBlack: true,
  },
  {
    id: "ibs",
    title: "IBS intelligence | Fintec",
    subTitle: "Transforming fintech publishing",
    info: "Building a secure, scalable digital platform that centralizes premium fintech research, protects IP, and boosts subscription revenue.",
    tags: [
      "HTML5 & CSS3",
      "WordPress",
      "Woo Commerce",
      "SEO & Performance Optimization",
    ],
    img: casestudy2,
    isBgBlack: false,
  },
  {
    id: "citiusTech",
    title: "citiustech | healthcare Technology",
    subTitle: "The strong and steady ERP evolution",
    info: "Transforming a simple timesheet tracker into a decade-strong ERP that streamlines people, processes, projects, and payments for IT services.",
    tags: [
      "Enterprise .NET + SQL",
      "ETL & Data Pipelines",
      "Database Integration & API",
      "MVC",
      "HTML5 & CSS3",
    ],
    img: casestudy3,
    isBgBlack: false,
  },
  {
    id: "tajGroupofHotels",
    title: "taj | hospitality",
    subTitle: "A premium, car rental management system",
    info: "Powering 70+ Taj Hotels with a unified, luxury-grade car rental management system that streamlines bookings, fleet logistics, and guest service.",
    tags: [
      "Enterprise .NET + SQL",
      "Database Integration & API",
      "MVC",
      "HTML5 & CSS3",
    ],
    img: casestudy4,
    isBgBlack: true,
  },
];
