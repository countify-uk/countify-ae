import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Accounting & Tax Services UAE │ VAT, Corporate Tax, R&D, Payroll │ Countify",
  description: "Full-service accountancy for UAE businesses — VAT filing, corporate tax, R&D advisory, company formation, bookkeeping and payroll. Serving startups, SMEs and growing businesses in Dubai, Abu Dhabi and Sharjah.",
};
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
