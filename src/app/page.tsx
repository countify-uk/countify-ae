import dynamic from "next/dynamic";
import IntroSection from "@/components/intro-section";
import Header from "@/components/header";
import { heroImages } from "@/data/heroImages";

const ServiceSection = dynamic(() => import("@/components/servicesection"), {
  ssr: true,
});
const Faqs = dynamic(() => import("@/components/faq"), { ssr: true });
const WhyChooseCard = dynamic(() => import("@/components/whyChooseCard"), {
  ssr: true,
});
const ProcessSection = dynamic(() => import("@/components/processSection"), {
  ssr: true,
});
export default function Home() {
  return (
    <>
      <Header heroImages={heroImages} />
      <IntroSection text="Welcome to your reliable partner for accounting, tax, and business setup services across the UAE. Backed by 15+ years of Chartered Accountancy expertise, we serve startups, SMEs, and established enterprises with precision, compliance, and care. Whether you need help setting up your company, managing monthly bookkeeping, filing VAT or corporate tax, or finalising year-end accounts, our experienced team ensures you remain compliant and focused on growth." />
      <ServiceSection />
      <ProcessSection />
      <WhyChooseCard />
      <Faqs />
    </>
  );
}
