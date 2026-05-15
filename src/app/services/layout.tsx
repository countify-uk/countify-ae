import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Accounting & Tax Services UAE | VAT, R&D, Payroll | Countify",
  },
  description:
    "UAE accounting, VAT, corporate tax, R&D advisory, company formation, bookkeeping and payroll support for startups, SMEs and growing companies.",
  alternates: {
    canonical: "https://www.countify.ae/services",
    languages: {
      "en-AE": "https://www.countify.ae/services",
      "ar-AE": "https://www.countify.ae/services?lang=ar",
    },
  },
  openGraph: {
    title: "Accounting & Tax Services UAE | Countify",
    description:
      "Explore Countify services for UAE VAT, corporate tax, R&D advisory, bookkeeping, payroll and company formation.",
    url: "https://www.countify.ae/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting & Tax Services UAE | Countify",
    description:
      "UAE accounting, tax and compliance services for startups and SMEs.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
