import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Countify UAE │ ACCA Chartered Accountants │ Big 4 Experience",
  },
  description:
    "Meet Countify UAE, ACCA-qualified chartered accountants founded by Big 4 alumni and serving businesses across Dubai, Abu Dhabi and Sharjah.",
  alternates: {
    canonical: "https://www.countify.ae/about",
    languages: {
      "en-AE": "https://www.countify.ae/about",
      "ar-AE": "https://www.countify.ae/about?lang=ar",
    },
  },
  openGraph: {
    title: "About Countify UAE │ ACCA Chartered Accountants",
    description:
      "ACCA-qualified UAE accountants with Big 4 experience, practical advice and responsive support for growing businesses.",
    url: "https://www.countify.ae/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Countify UAE │ ACCA Chartered Accountants",
    description:
      "Meet the ACCA-qualified accountants behind Countify UAE.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
