
import type { Metadata } from "next";
import { Geist, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
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

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Accountants in UAE │ VAT, Corporate Tax, R&D & Company Formation │ Countify",
    template: "%s │ Countify",
  },
  description: "Countify offers expert accounting, VAT, corporate tax, R&D advisory and company formation services across Dubai, Abu Dhabi and Sharjah. ACCA-qualified chartered accountants with Big 4 experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <ClientLayoutWrapper
        fontVariables={`${geistSans.variable} ${inter.variable} ${ibmPlexArabic.variable}`}
      >
        {children}
      </ClientLayoutWrapper>
    </LanguageProvider>
  );
}