import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Countify UAE │ Accountants in Dubai, Abu Dhabi & Sharjah",
  },
  description:
    "Get in touch with Countify UAE. Chartered accountants serving businesses across Dubai, Abu Dhabi and Sharjah. Call +971 58 511 7901 or email info@countify.ae for a free consultation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
