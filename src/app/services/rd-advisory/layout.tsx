import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "R&D Tax Advisory UAE │ Research & Development Incentives │ Countify",
  description: "Claim your UAE R&D tax incentives with Countify. End-to-end R&D advisory led by Hannan Khokhar FCCA with 7+ years specialist experience. We identify qualifying expenditure, prepare submissions and maximise your R&D benefit.",
};
export default function RDAdvisoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
