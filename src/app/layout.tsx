
import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Countify",
  description: "Chartered Accountancy Excellence in the UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <ClientLayoutWrapper
        fontVariables={`${geistSans.variable} ${inter.variable}`}
      >
        {children}
      </ClientLayoutWrapper>
    </LanguageProvider>
  );
}