"use client";

import Navbar from "@/components/navbar";
import Footer from "./footer";
import CookieConsent from "./CookieConsent";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}
