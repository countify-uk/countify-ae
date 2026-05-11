import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Team │ ACCA Chartered Accountants UAE │ Countify",
  description: "Meet the Countify team — ACCA-qualified chartered accountants and specialists serving UAE businesses. Big 4 alumni with expertise in tax, R&D, VAT, company formation and bookkeeping.",
};
export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
