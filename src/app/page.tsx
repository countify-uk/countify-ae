'use client';
import dynamic from "next/dynamic";
import IntroSection from "@/components/intro-section";
import Header from "@/components/header";
import { heroImages } from "@/data/heroImages";
// import ServiceSection from "@/components/servicesection";
// import Faqs from "@/components/faq";
// import WhyChooseCard from "@/components/whyChooseCard";
const ServiceSection = dynamic(() => import("@/components/servicesection"), {
  ssr: false,
});
const Faqs = dynamic(() => import("@/components/faq"), { ssr: false });
const WhyChooseCard = dynamic(() => import("@/components/whyChooseCard"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
     <Header heroImages={heroImages} />
  <IntroSection />
         {/* <div     className="bg-white bg-no-repeat bg-cover bg-center bg-fixed" 
        style={{ 
          backgroundImage: "url('/images/svgexport-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}>
        </div> */}
        <ServiceSection />
        <Faqs />
        <WhyChooseCard />
    </>
  );
}
