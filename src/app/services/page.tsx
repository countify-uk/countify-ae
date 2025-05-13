"use client";
import MainHeader from "@/components/mainHeader";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import services from "@/data/services.json";
import Image from "next/image";
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const Services = () => {
  const { t, language } = useLanguage();

  const title = language === "ar" ? "خدماتنا" : "Our Services";
  const description =
    language === "ar"
      ? "استكشف مجموعة خدماتنا الشاملة في المحاسبة والضرائب وتأسيس الأعمال المصممة لتلبية احتياجاتك."
      : "Explore our comprehensive range of accounting, tax, and business setup services tailored to meet your needs.";
  return (
    <>
      <div className="bg-gradient-to-tr from-[#0a112d] to-[#1a3a8f] bg-footer bg-no-repeat bg-cover bg-center">
        <motion.section aria-labelledby="page-title" variants={item}>
          <MainHeader title={title} description={description} />
        </motion.section>
        <div className="container mx-auto px-4 py-8">
          <p>
            {t(
              "services.para",
              "Discover our expert accounting, tax, and business setup services, tailored to your unique needs. We offer personalized solutions designed to simplify your financial processes, ensure compliance, and drive business growth. Let us help you achieve your goals with our trusted expertise and commitment to excellence."
            )}
          </p>
        </div>
        <div className="container pb-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              className="group inset-0 z-30"
              aria-label={`View details for ${service.title[language]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <article
                className={`card-wrapper flex gap-4 group overflow-hidden border border-slate-50/40 h-[300px] rounded-xl transition duration-300 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                role="article"
              >
                <div className="text-left relative w-full card-content overflow-hidden">
                  <div className="absolute z-20 bottom-5 px-5 space-y-2 h-auto w-full transition-all duration-300 inset-0 flex flex-col justify-end">
                    <h2 className="font-bold relative text-xl text-white group-hover:text-[#dca958] duration-300 transition">
                      {service.title[language]}{" "}
                    </h2>
                    <p className="text-sm font-normal relative text-white/80">
                      {service.description[language]}{" "}
                    </p>
                  </div>
                  <div className="bg-gradient-to-t from-[#0a112d] w-full h-full absolute rounded-b-xl group-hover:opacity-100 opacity-70 transition duration-300 z-10"></div>
                  <Image
                    alt={`Image of ${service.title[language]}`}
                    loading="lazy"
                    width={612}
                    height={300}
                    decoding="async"
                    className="w-full object-cover h-full rounded-xl group-hover:scale-110 duration-500 transition"
                    src={service.image}
                  />
                </div>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};
export default Services;
