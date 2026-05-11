import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "Our Team | ACCA Chartered Accountants UAE | Countify",
  },
  description:
    "Meet the Countify UAE team of ACCA-qualified accountants and specialists in tax, R&D, VAT, company formation and bookkeeping.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team | Countify UAE",
    description:
      "Meet the accountants and specialists supporting Countify clients across the UAE.",
    url: "/team",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Countify UAE",
    description:
      "Meet the Countify UAE accounting and tax team.",
  },
};
export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
