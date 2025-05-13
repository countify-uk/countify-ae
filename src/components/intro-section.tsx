"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const IntroSection = () => {
  const { t } = useLanguage();
  const text = t(
    "home.intro",
    "Welcome to your reliable partner for accounting, tax, and business setup services across the UAE. Backed by 15+ years of Chartered Accountancy expertise, we serve startups, SMEs, and established enterprises with precision, compliance, and care. Whether you need help setting up your company, managing monthly bookkeeping, filing VAT or corporate tax, or finalising year-end accounts, our experienced team ensures you remain compliant and focused on growth."
  );
  const words = text.split(" ");
  return (
    <>
      {" "}
      <section
        className="w-full h-auto py-6 relative container lg:py-16"
        id="intro-section" 
      >
     
        <div className="text-lg md:text-3xl lg:text-4xl font-medium leading-normal text-white mx-auto relative">
          <svg
            className="absolute  top-0 left-4 transform -translate-x-3 -translate-y-2 h-8 w-8 text-slate-300/60"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
          </svg>
          <p className="text-white leading-relaxed pl-10">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </p>
        </div>
      </section>
    
    </>
  );
};

export default IntroSection;
