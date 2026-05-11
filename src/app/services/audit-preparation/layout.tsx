import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Audit Preparation Services UAE │ Get Audit-Ready │ Dubai & Sharjah │ Countify",
  },
  description:
    "Prepare your business for a clean, smooth statutory audit. Countify's audit preparation service ensures your financial records, documentation and internal controls are fully audit-ready across Dubai, Abu Dhabi and Sharjah.",
  alternates: {
    canonical: "/services/audit-preparation",
  },
};

export default function AuditPreparationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
