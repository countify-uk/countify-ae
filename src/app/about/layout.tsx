import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Countify UAE │ ACCA Chartered Accountants │ Big 4 Experience",
  },
  description:
    "Countify is an ACCA-qualified chartered accountancy firm serving businesses across the UAE. Founded by Big 4 alumni with 20+ years combined experience. Based in Sharjah, serving Dubai, Abu Dhabi and beyond.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
