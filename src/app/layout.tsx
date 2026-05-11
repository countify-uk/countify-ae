
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
  metadataBase: new URL("https://www.countify.ae"),
  title: {
    default: "Accountants in UAE | VAT, Tax & R&D Advisory | Countify",
    template: "%s │ Countify",
  },
  description:
    "ACCA-qualified accountants in the UAE for VAT, corporate tax, R&D advisory, company formation, bookkeeping and payroll.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Accountants in UAE | VAT, Tax & R&D Advisory | Countify",
    description:
      "ACCA-qualified accountants helping UAE businesses with VAT, corporate tax, R&D advisory, company formation and bookkeeping.",
    url: "/",
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
    title: "Accountants in UAE | VAT, Tax & R&D Advisory | Countify",
    description:
      "ACCA-qualified accountants helping UAE businesses stay compliant and ready for growth.",
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
      <body className={`${geistSans.variable} ${inter.variable} ${ibmPlexArabic.variable} antialiased`}>
        <LanguageProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
