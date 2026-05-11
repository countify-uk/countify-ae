"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const IntroSection = () => {
  const { t } = useLanguage();
  const text = t(
    "home.intro",
    "Welcome to your reliable partner for accounting, tax, and business setup services across the UAE. Backed by 15+ years of Chartered Accountancy expertise, we serve startups, SMEs, and established enterprises with precision, compliance, and care. Whether you need help setting up your company, managing monthly bookkeeping, filing VAT or corporate tax, or finalising year-end accounts, our experienced team ensures you remain compliant and focused on growth."
  );
  return (
    <section
      className="w-full h-auto py-12 lg:py-20 relative"
      id="intro-section"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          <svg
            className="absolute -top-4 -left-2 h-12 w-12 text-[#dca958]/30"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
          </svg>
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90 pl-8 border-l-2 border-[#dca958]/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {text}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
