import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "R&D Tax Advisory UAE | Development Incentives | Countify",
  },
  description:
    "Claim UAE R&D tax incentives with Countify. We identify qualifying spend, prepare documentation and help maximise your corporate tax benefit.",
  alternates: {
    canonical: "https://www.countify.ae/services/rd-advisory",
    languages: {
      "en-AE": "https://www.countify.ae/services/rd-advisory",
      "ar-AE": "https://www.countify.ae/services/rd-advisory?lang=ar",
    },
  },
  openGraph: {
    title: "R&D Tax Advisory UAE | Countify",
    description:
      "End-to-end UAE R&D advisory for identifying qualifying expenditure and preparing robust claims.",
    url: "https://www.countify.ae/services/rd-advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "R&D Tax Advisory UAE | Countify",
    description:
      "Practical UAE R&D tax incentive support from Countify.",
  },
};

export default function RDAdvisoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
