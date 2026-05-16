"use client";
import React from "react";
import MainHeader from "@/components/mainHeader";
import { teamMembers } from "@/data/teamData";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TeamPage = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <section className="relative bg-gradient-to-tr from-[#0a112d] via-[#061640] to-[#1a3a8f] bg-contact bg-no-repeat bg-cover bg-center overflow-hidden">
        {/* Decorative gold glow */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#dca958]/10 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#dca958]/5 blur-3xl pointer-events-none"
        />

        <MainHeader
          title={language === "ar" ? "فريقنا - خبراء المحاسبة والضرائب" : "Our Expert UAE Accounting Team"}
          description={
            language === "ar"
              ? "تعرّف على المتخصصين خلف Countify. مؤهلون من ACCA وFCCA ويمتلكون خبرة Big 4 لتقديم خدمات محاسبة وضرائب واستشارات موثوقة في الإمارات."
              : "Meet the dedicated professionals behind Countify. ACCA & FCCA-qualified, with Big 4 experience — delivering reliable accounting, tax, and advisory across the UAE."
          }
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-16 lg:py-24" id="team" aria-label="Countify UAE leadership team">
            {/* Section eyebrow */}
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-xs sm:text-sm font-semibold text-[#dca958] uppercase tracking-[0.25em] mb-3">
                {language === "ar" ? "القيادة والخبرة" : "Leadership & Expertise"}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {language === "ar" ? "الأشخاص خلف أرقامك" : "The people behind your numbers"}
              </h2>
              <div className="w-16 h-[2px] bg-[#dca958] mx-auto mt-6" />
            </div>

            {/* Team grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#dca958]/60 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#dca958]/10"
                >
                  {/* Portrait */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#0a112d] to-[#1a3a8f]">
                    <Image
                      src={member.image}
                      alt={`${language === "ar" ? member.nameAr || member.name : member.name} — ${language === "ar" ? member.roleAr || member.role : member.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      priority={index < 3}
                      quality={80}
                    />
                    {/* Gradient overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a112d] via-[#0a112d]/70 to-transparent"
                    />
                    {/* Gold tag - credentials */}
                    {member.credentials && (
                      <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-[#0a112d] bg-[#dca958] rounded-full shadow-md">
                        {member.credentials}
                      </span>
                    )}
                    {/* Name + role overlay on image */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                        {language === "ar" ? member.nameAr || member.name : member.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[#dca958] uppercase tracking-wider">
                        {language === "ar" ? member.roleAr || member.role : member.role}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="relative">
                      <svg
                        className="absolute -top-1 -left-1 h-6 w-6 text-[#dca958]/30"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="pl-7 text-sm text-white/70 leading-relaxed line-clamp-4">
                        {language === "ar" ? member.descriptionAr || member.description : member.description}
                      </p>
                    </div>

                    {/* Socials */}
                    {(member.socials?.instagram || member.socials?.linkedin) && (
                      <div className="flex items-center gap-2 mt-5 pt-5 border-t border-white/10">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on LinkedIn`}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-[#dca958] hover:text-[#dca958] hover:bg-[#dca958]/10 transition-all duration-200"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.instagram && (
                          <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on Instagram`}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-[#dca958] hover:text-[#dca958] hover:bg-[#dca958]/10 transition-all duration-200"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Hover gold accent border */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#dca958] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.article>
              ))}
            </div>

            {/* CTA strip */}
            <div className="max-w-4xl mx-auto mt-20 text-center">
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                {language === "ar"
                  ? "هل تبحث عن فريق يجمع بين صرامة Big 4 واستشارات مرنة مناسبة للمؤسسين؟"
                  : "Looking to work with a team that combines Big 4 rigor with founder-friendly advisory?"}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white uppercase tracking-wider rounded-full bg-gradient-to-r from-[#dca958] to-[#e69c31] hover:from-[#e69c31] hover:to-[#dca958] transition-all duration-300 shadow-lg shadow-[#dca958]/20 hover:shadow-[#dca958]/40"
              >
                {t("form.title", "Book a Consultation")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
