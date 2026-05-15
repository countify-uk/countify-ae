import type { Metadata } from "next";
import BlogPageContent from "./BlogPageContent";

export const metadata: Metadata = {
  title: {
    absolute: "UAE Accounting & Tax Blog | Countify",
  },
  description:
    "Practical UAE accounting, VAT, corporate tax, R&D advisory and company formation guides from Countify's chartered accountants.",
  alternates: {
    canonical: "https://www.countify.ae/blog",
  },
  openGraph: {
    title: "UAE Accounting & Tax Blog | Countify",
    description:
      "Plain-English accounting and tax guides for UAE founders, SMEs and overseas owners.",
    url: "https://www.countify.ae/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Accounting & Tax Blog | Countify",
    description:
      "Practical UAE accounting and tax guides from Countify.",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
