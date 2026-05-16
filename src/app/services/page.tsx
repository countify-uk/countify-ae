"use client";
import MainHeader from "@/components/mainHeader";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import services from "@/data/services.json";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  const { t, language } = useLanguage();

  const title = t("services.title", "Our Services");
  const description = t(
    "services.description",
    "Explore our comprehensive range of accounting, tax, and business setup services tailored to meet your needs."
  );

  return (
    <div className="bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] min-h-screen">
      <MainHeader
        title={title}
        description={description}
        breadcrumb={[
          { label: t("nav.home", "Home"), href: "/" },
          { label: t("nav.services", "Services") },
        ]}
      />

      <section className="container mx-auto px-5 pt-8 pb-6">
        <motion.p
          className="text-white/60 text-center text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t(
            "services.para",
            "Discover our expert accounting, tax, and business setup services, tailored to your unique needs. We offer personalized solutions designed to simplify your financial processes, ensure compliance, and drive business growth."
          )}
        </motion.p>
      </section>

      <section className="container mx-auto px-5 pb-24">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Link
                href={service.link}
                className="group block"
                aria-label={`View details for ${service.title[language]}`}
              >
                <article
                  className={`relative overflow-hidden rounded-2xl h-[340px] border border-white/10 shadow-sm hover:shadow-xl hover:shadow-[#dca958]/5 transition-all duration-300 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      alt={service.title[language]}
                      loading={index < 3 ? "eager" : "lazy"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      src={service.image}
                    />
                  </div>

                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a112d] via-[#0a112d]/70 to-transparent group-hover:via-[#0a112d]/80 transition-all duration-500"></div>

                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                    <h2 className="font-bold text-xl text-white group-hover:text-[#dca958] transition-colors duration-300 mb-2">
                      {service.title[language]}
                    </h2>
                    <p className="text-sm text-white/60 line-clamp-2 mb-4">
                      {service.description[language]}
                    </p>
                    <div
                      aria-hidden="true"
                      className="flex items-center gap-1 text-[#dca958] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <span>{(service as any).button_text?.[language] || t("button.learnMore", "Learn more")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="container mx-auto px-5 pb-24">
        <div className="bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t("services.notFound.title", "Can't find what you're looking for?")}
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto mb-8">
            {t("services.notFound.body", "Get in touch for a free consultation and we'll help you find the right solution for your business.")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#dca958] to-[#e69c31] rounded-full hover:shadow-lg hover:shadow-[#dca958]/20 transition-all duration-300"
          >
            {t("button.contactUs", "Contact Us")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Services;
