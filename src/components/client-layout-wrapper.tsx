"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/navbar";
import Footer from "./footer";

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
        <title>Accounting & Tax Services UAE | Company Setup, VAT, Payroll, Tax Filing</title>
        <meta name="description" content="Explore expert accounting, VAT, tax, and company formation services in UAE. Chartered Accountant with 15+ years of experience. Serving startups, SMEs, and corporates." />
        <meta property="og:title" content="Accounting & Tax Services UAE | Company Setup, VAT, Payroll, Tax Filing" />
        <meta property="og:description" content="Explore expert accounting, VAT, tax, and company formation services in UAE. Chartered Accountant with 15+ years of experience. Serving startups, SMEs, and corporates." />
        <meta property="og:image" content="/images/countify-og.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://countify.ae/" />
      </head>
      <body className={`${fontVariables} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
