import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "Our Team | ACCA Chartered Accountants UAE | Countify",
  },
  description:
    "Meet the Countify UAE team of ACCA-qualified accountants and specialists in tax, R&D, VAT, company formation and bookkeeping.",
  alternates: {
    canonical: "https://www.countify.ae/team",
    languages: {
      "en-AE": "https://www.countify.ae/team",
      "ar-AE": "https://www.countify.ae/team?lang=ar",
    },
  },
  openGraph: {
    title: "Our Team | Countify UAE",
    description:
      "Meet the accountants and specialists supporting Countify clients across the UAE.",
    url: "https://www.countify.ae/team",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Countify UAE",
    description:
      "Meet the Countify UAE accounting and tax team.",
  },
};
export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="schema-team-members"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                name: "Hannan Khokhar",
                jobTitle: "CEO — FCCA",
                worksFor: { "@type": "Organization", name: "Countify UAE", url: "https://www.countify.ae" },
                image: "https://www.countify.ae/images/team/uae/hannan-khokhar.webp",
                sameAs: ["https://www.linkedin.com/company/countify-uae/"],
              },
              {
                "@type": "Person",
                name: "Kamran Ishaq",
                jobTitle: "COO — ACCA",
                worksFor: { "@type": "Organization", name: "Countify UAE", url: "https://www.countify.ae" },
                image: "https://www.countify.ae/images/team/uae/kamran-ishaq-fcca-countify.webp",
              },
              {
                "@type": "Person",
                name: "Rabia Ali",
                jobTitle: "HR Manager",
                worksFor: { "@type": "Organization", name: "Countify UAE", url: "https://www.countify.ae" },
                image: "https://www.countify.ae/images/team/uae/mrs-hannan.webp",
              },
              {
                "@type": "Person",
                name: "Arslan Saleem",
                jobTitle: "Senior Manager — MSc Finance",
                worksFor: { "@type": "Organization", name: "Countify UAE", url: "https://www.countify.ae" },
                image: "https://www.countify.ae/images/team/uae/arslan-saleem.webp",
              },
              {
                "@type": "Person",
                name: "Muhammad Hasnain",
                jobTitle: "Accounts Assistant",
                worksFor: { "@type": "Organization", name: "Countify UAE", url: "https://www.countify.ae" },
                image: "https://www.countify.ae/images/team/uae/muhammad-hasnain.webp",
              },
              {
                "@type": "Person",
                name: "Umer Iqbal",
                jobTitle: "Bookkeeper",
                worksFor: { "@type": "Organization", name: "Countify UAE", url: "https://www.countify.ae" },
                image: "https://www.countify.ae/images/team/uae/umer-iqbal.webp",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
