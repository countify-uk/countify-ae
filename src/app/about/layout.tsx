import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Countify UAE │ ACCA Chartered Certified Accountants │ Big 4 Experience",
  description: "Countify is an ACCA-qualified chartered accountancy firm serving businesses across the UAE. Founded by Big 4 alumni with 20+ years combined experience. Based in Dubai, serving Dubai, Sharjah, Abu Dhabi and beyond.",
};
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
