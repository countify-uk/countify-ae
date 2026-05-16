
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ClientLayoutWrapper from "@/components/client-layout-wrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.countify.ae"),
  title: {
    default: "Accounting & Tax Services UAE | Countify",
    template: "%s │ Countify",
  },
  description:
    "ACCA-qualified accountants for UAE businesses. VAT, corporate tax, R&D advisory, bookkeeping & company formation — done right.",
  alternates: {
    canonical: "https://www.countify.ae/",
    languages: {
      "x-default": "https://www.countify.ae/",
      "en": "https://www.countify.ae/",
      "ar": "https://www.countify.ae/?lang=ar",
    },
  },
  openGraph: {
    title: "Accounting & Tax Services UAE | Countify",
    description:
      "ACCA-qualified accountants for UAE businesses. VAT, corporate tax, R&D advisory, bookkeeping & company formation — done right.",
    url: "https://www.countify.ae/",
    siteName: "Countify UAE",
    images: [
      {
        url: "/images/countify-og.webp",
        width: 1200,
        height: 630,
        alt: "Countify UAE chartered accountants",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CountifyUAE",
    creator: "@CountifyUAE",
    title: "Accounting & Tax Services UAE | Countify",
    description:
      "ACCA-qualified accountants for UAE businesses. VAT, corporate tax, R&D advisory, bookkeeping & company formation.",
    images: ["/images/countify-og.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${inter.variable} ${notoSansArabic.variable} antialiased`}>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["AccountingService", "LocalBusiness"],
              name: "Countify UAE",
              description:
                "ACCA-qualified chartered accountants offering VAT, corporate tax, R&D advisory, company formation and bookkeeping services across UAE.",
              url: "https://www.countify.ae",
              logo: "https://www.countify.ae/images/countify-logo-light.png",
              telephone: "+971585117901",
              email: "info@countify.ae",
              image: "https://www.countify.ae/images/countify-og.webp",
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-18:00",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.1669,
                longitude: 55.2471,
              },
              hasMap: "https://maps.app.goo.gl/pyYwD53Ce7BPrQkw9",
              areaServed: [
                { "@type": "City", name: "Dubai" },
                { "@type": "City", name: "Abu Dhabi" },
                { "@type": "City", name: "Sharjah" },
                { "@type": "Country", name: "United Arab Emirates" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Accounting & Tax Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "R&D Advisory UAE" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit Preparation UAE" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "UAE Corporate Tax Filing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "VAT Registration & Filing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Company Formation UAE" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bookkeeping Services" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payroll Services UAE" } },
                ],
              },
              sameAs: [
                "https://www.instagram.com/countifyuae/",
                "https://www.linkedin.com/company/countify-uae/",
                "https://x.com/CountifyUAE",
              ],
            }),
          }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do I need to register for corporate tax in UAE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Since the introduction of UAE Corporate Tax in June 2023, all businesses must register with the FTA and file a corporation tax return. Countify handles the full registration and filing process.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the UAE corporate tax rate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The standard rate is 9% on taxable income above AED 375,000. Income below this threshold is taxed at 0%. Small Business Relief may apply for businesses with revenue under AED 3 million. Free Zone entities may qualify for 0% on qualifying income.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do UAE businesses qualify for R&D tax incentives?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The UAE has introduced R&D incentives as part of its Corporate Tax framework, offering qualifying businesses enhanced tax deductions of 30% to 50% above qualifying R&D expenditure. Countify is one of the very few UAE accountancy firms offering compliant end-to-end R&D advisory, led by an experienced R&D team with over 7 years of specialist R&D experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to set up a company in UAE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A freezone company can typically be set up within 3 to 7 working days. Mainland setup takes slightly longer. Countify manages the full process.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can Countify help a UK business set up in UAE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Countify operates in both the UK and UAE. We help UK businesses navigate the full UAE setup process with the benefit of understanding both jurisdictions.",
                  },
                },
              ],
            }),
          }}
        />
        <LanguageProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </LanguageProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
