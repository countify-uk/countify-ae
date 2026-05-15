import type { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Countify UAE",
  },
  description:
    "Read how Countify UAE collects, uses and protects personal information submitted through our website and contact forms.",
  alternates: {
    canonical: "https://www.countify.ae/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Countify UAE",
    description:
      "How Countify UAE handles personal information submitted through this website.",
    url: "https://www.countify.ae/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Countify UAE",
    description: "How Countify UAE handles website personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
