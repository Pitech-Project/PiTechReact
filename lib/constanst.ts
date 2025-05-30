"use client";

import type { FormData } from "@/components/careers/career-form";

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

export const EXPERIENCE_REQUIREMENTS = [
  "4+ years of experience",
  "Proven experience in build engineering, release engineering, or related roles within a DevOps or Agile environment.",
  "Strong understanding of CI/CD concepts, version control systems, and automation tools.",
  "Familiarity with scripting languages (e.g. PowerShell, batch, shell) and build automation tools (e.g., AzureDevOps, Jenkins, GitLab CI/CD, Travis CI).",
  "Experience with containerization and container orchestration tools (e.g., Docker, Kubernetes) is a must.",
  "Knowledge of DevOps best practices and principles.",
  "Relevant certifications in DevOps, CI/CD, or related areas are advantageous.",
];

export const KEY_RESPONSIBILITIES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
];

export const GOOD_TO_HAVE = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
];

export const SERVICES = {
  SERVICES1: "Application Development",
  SERVICES2: "Mobile Development",
  SERVICES3: "Website Development",
  SERVICES4: "User Experience & Visual Design",
  SERVICES5: "Business Intelligence & Data Analytics",
  SERVICES6: "IT Infrastructure",
};
