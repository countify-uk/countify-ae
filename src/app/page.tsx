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
export default function Home() {
  return (
    <>
      <Header heroImages={heroImages} />
      <IntroSection />
      <ServiceSection />
      <Faqs />
      <WhyChooseCard />
    </>
  );
}
