type PrivacyItem = {
  text1?: string;
  text2?: string;
};
interface PrivacyType {
  title?: string;
  info?: string;
  list?: PrivacyItem[];
}
export const tabledata = [
  {
    coockie: "Strictly Necessary",
    purpose: "Enable basic site functionality",
    examples: "Session management, security",
  },
  {
    coockie: "Performance / Analytics",
    purpose: "Improve features, track interactions",
    examples: "Google Analytics",
  },
  {
    coockie: "Functional",
    purpose: "Remember preferences",
    examples: "Language, form inputs",
  },
];

export const termsofuse = [
  {
    info: "By accessing this website, you agree to comply with these Terms of Use. If you do not agree, please discontinue use of the website.\nWebsite Use",
    list: [
      "Website content is for general information and business use",
      "You agree not to misuse the site, conduct unlawful activity, or attempt unauthorized access",
      "Content may change without prior notice",
    ],
  },
  {
    title: "Intellectual Property",
    info: "All content, trademarks, branding, graphics, code, and design belong to Pi Techniques Pvt. Ltd. unless otherwise indicated.\nYou may not reproduce, copy, distribute, or modify any content without written permission.",
  },
  {
    title: "User Submissions",
    info: "When you provide information via forms or email, you grant us permission to use it for service and communication purposes.",
  },
  {
    title: "Third-Party Services",
    info: "We are not responsible for third-party site functionality, links, content, or terms.\nDisclaimers",
    list: [
      "We provide the site on an “as is” and “as available” basis",
      "We do not guarantee uninterrupted access, accuracy, or completeness",
      "Use of the site is at your own risk",
    ],
  },
  {
    title: "Limitation of Liability",
    info: "We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website.",
  },
  {
    title: "Indenification",
    info: "You agree to indemnify and hold Pi Techniques harmless from any claims arising from:",
    list: [
      "Your use of the site",
      "Violation of these terms",
      "Violation of rights of others",
    ],
  },
  {
    title: "Governing Law & Jurisdiction",
    info: "These Terms are governed by the laws of Mumbai, Maharashtra, India, and disputes shall be resolved under the exclusive jurisdiction of its courts.",
  },
  {
    title: "Termination",
    info: "We may restrict or terminate access to the site without notice if we believe the Terms have been violated.",
  },
];

export const privacypolicy: PrivacyType[] = [
  {
    info: "Pi Techniques Pvt. Ltd. (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our website, products, and services.\nPersonal Data We Collect\nWe may collect:",
    list: [
      {
        text1: "Identity Data: ",
        text2: " Full name, organization, role/designation",
      },
      { text1: "Contact  Data:", text2: " Email address, phone number" },
      {
        text1: "Technical Data:",
        text2: " IP address, browser type, operating system, device data",
      },
      {
        text1: "Usage Data:",
        text2: " Website pages visited, interactions, preferences",
      },
      {
        text1: "Project / Inquiry Data:",
        text2: " Information shared for proposals or service delivery",
      },
    ],
  },
  {
    title: "How We Collect Data",
    list: [
      {
        text2:
          "Directly from you through contact forms, subscriptions, email, or contracts",
      },
      { text2: "Automatically via cookies, analytics tools, and log files" },
      { text2: "From business partners or publicly available sources" },
    ],
  },
  {
    title: "How We Use Your Data",
    info: "We process personal information for:",
    list: [
      { text2: "Responding to inquiries & support requests" },
      {
        text2:
          "Contractual obligations (service delivery, project engagements)",
      },
      { text2: "Improving website performance and user experience" },
      { text2: "Marketing communication (with consent)" },
      { text2: "Legal compliance and security monitoring" },
    ],
  },
  {
    title: "Legal Basis for Processing (GDPR)",
    info: "Where applicable, we process data on the following bases:",
    list: [
      { text2: "Performance of a contract" },
      { text2: "Consent, where explicitly provided" },
      { text2: "Legitimate business interests" },
      { text2: "Compliance with legal obligations" },
    ],
  },
  {
    title: "Data Sharing & Disclosure",
    info: "We may share data with:",
    list: [
      {
        text2:
          "Trusted third-party service providers (hosting, analytics, communication)",
      },
      {
        text2:
          "Legal authorities, where required by law We <strong>do not</strong> sell personal information.",
      },
    ],
  },
  {
    title: "Data Retention",
    info: "We retain personal data only as long as necessary to fulfill the purpose it was collected for, or as required by law.",
  },
  {
    title: "International Transfers",
    info: "If data is transferred outside India / EEA, we ensure adequate safeguards such as Standard Contractual Clauses.",
  },
  {
    title: "Data Security",
    info: "We maintain technical and organizational measures to secure data from unauthorized access, alteration, loss, or misuse.",
  },
  {
    title: "Links to Third-Party Sites",
    info: "Our website may contain external links. We are not responsible for their content or privacy practices.",
  },
  {
    title: "Updates to This Policy",
    info: "We may update this policy occasionally. Changes will be posted on this page with updated dates.",
  },
];
