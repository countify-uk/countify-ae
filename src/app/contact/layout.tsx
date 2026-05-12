import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Countify UAE │ Accountants in Dubai, Abu Dhabi & Sharjah",
  },
  description:
    "Contact Countify UAE for accounting, VAT, corporate tax and R&D advisory support. Call +971 58 511 7901 or email info@countify.ae.",
  alternates: {
    canonical: "https://www.countify.ae/contact",
  },
  openGraph: {
    title: "Contact Countify UAE",
    description:
      "Speak with ACCA-qualified accountants for UAE accounting, tax and compliance support.",
    url: "https://www.countify.ae/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Countify UAE",
    description:
      "Contact Countify UAE for accounting, VAT and corporate tax support.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
