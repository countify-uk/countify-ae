"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/navbar";
import Footer from "./footer";
import CookieConsent from "./CookieConsent";
import Script from "next/script";

export default function ClientLayoutWrapper({
  children,
  fontVariables,
}: {
  children: React.ReactNode;
  fontVariables: string;
}) {
  const { language } = useLanguage();

  return (
    <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <title>Accountants in UAE │ VAT, Corporate Tax, R&D & Company Formation │ Countify</title>
        <meta name="description" content="Countify offers expert accounting, VAT, corporate tax, R&D advisory and company formation services across Dubai, Abu Dhabi and Sharjah. ACCA-qualified chartered accountants with Big 4 experience. Get a free consultation today." />
        <meta property="og:title" content="Accountants in UAE │ VAT, Corporate Tax, R&D & Company Formation │ Countify" />
        <meta property="og:description" content="Countify offers expert accounting, VAT, corporate tax, R&D advisory and company formation services across Dubai, Abu Dhabi and Sharjah. ACCA-qualified chartered accountants with Big 4 experience. Get a free consultation today." />
        <meta property="og:image" content="https://www.countify.ae/images/countify-og.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.countify.ae/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CountifyUAE" />
        <meta name="twitter:creator" content="@CountifyUAE" />
        <meta name="twitter:title" content="Accountants in UAE │ VAT, Corporate Tax, R&D & Company Formation │ Countify" />
        <meta name="twitter:description" content="Countify offers expert accounting, VAT, corporate tax, R&D advisory and company formation services across Dubai, Abu Dhabi and Sharjah." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.countify.ae/" />
        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Countify UAE",
              "description": "ACCA-qualified chartered accountants offering VAT, corporate tax, R&D advisory, company formation and bookkeeping services across UAE.",
              "url": "https://www.countify.ae",
              "logo": "https://www.countify.ae/images/countify-logo-light.png",
              "telephone": "+971585117901",
              "email": "info@countify.ae",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1 Shams Business Centre, Sharjah Media City",
                "addressLocality": "Sharjah",
                "addressCountry": "AE"
              },
              "areaServed": [
                { "@type": "City", "name": "Dubai" },
                { "@type": "City", "name": "Abu Dhabi" },
                { "@type": "City", "name": "Sharjah" },
                { "@type": "Country", "name": "United Arab Emirates" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Accounting & Tax Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "R&D Advisory UAE" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UAE Corporate Tax Filing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VAT Registration & Filing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Formation UAE" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bookkeeping Services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payroll Services UAE" } }
                ]
              },
              "sameAs": ["https://www.countify.co.uk"]
            })
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
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do I need to register for corporate tax in UAE?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. Since the introduction of UAE Corporate Tax in June 2023, most businesses with taxable income above AED 375,000 must register with the FTA and file a return. Countify handles the full registration and filing process." }
                },
                {
                  "@type": "Question",
                  "name": "What is the UAE corporate tax rate?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The standard rate is 9% on taxable income above AED 375,000. Income below this threshold is taxed at 0%. Small Business Relief may apply for businesses with revenue under AED 3 million. Free Zone entities may qualify for 0% on qualifying income." }
                },
                {
                  "@type": "Question",
                  "name": "Do UAE businesses qualify for R&D tax incentives?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. The UAE introduced R&D incentives as part of the corporate tax framework. Qualifying R&D expenditure may attract a 30% to 50% deduction above cost. Countify provides end-to-end R&D advisory to help you claim the maximum benefit." }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to set up a company in UAE?",
                  "acceptedAnswer": { "@type": "Answer", "text": "A freezone company can typically be set up within 3 to 7 working days. Mainland setup takes slightly longer. Countify manages the full process." }
                },
                {
                  "@type": "Question",
                  "name": "Can Countify help a UK business set up in UAE?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Countify operates in both the UK and UAE. We help UK businesses navigate the full UAE setup process with the benefit of understanding both jurisdictions." }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${fontVariables} antialiased`}>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
