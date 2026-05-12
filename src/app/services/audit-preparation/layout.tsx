import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Audit Preparation Services UAE | Get Audit-Ready | Countify",
  },
  description:
    "Get audit-ready in the UAE with organised records, reconciliations, schedules and auditor support from Countify's accounting team.",
  alternates: {
    canonical: "https://www.countify.ae/services/audit-preparation",
  },
  openGraph: {
    title: "Audit Preparation Services UAE | Countify",
    description:
      "Prepare clean records, reconciliations and schedules before your UAE audit begins.",
    url: "https://www.countify.ae/services/audit-preparation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit Preparation Services UAE | Countify",
    description:
      "Audit-ready accounting support for UAE businesses.",
  },
};

export default function AuditPreparationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
