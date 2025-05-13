"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import MainHeader from "@/components/mainHeader";
import { ChartLine, Eye , CheckCircle , ShieldCheck, User, RefreshCw } from "lucide-react";
import TeamSection from "@/components/teamSection";
const AboutPage = () => {
  const { language } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const content = {
    en: {
      title: "About Us – Countify",
      subtitle: "Expert Accounting & Business Support Across the UAE",
      sections: [
        {
          content: [
            "At Countify AE, we are your trusted partner for reliable, efficient, and fully compliant accounting, tax, and business setup services across the United Arab Emirates. As an extension of our UK head office based in Glasgow, Countify brings over 15 years of Chartered Accountancy expertise to support startups, SMEs, and growing businesses in the UAE.",
            "Whether you're launching a company in a Freezone or Mainland, need help with bookkeeping, payroll, VAT, or corporate tax — our Dubai-based team ensures everything is handled professionally and in full alignment with FTA and IFRS regulations.",
            "We combine global knowledge with local insight to simplify your financial, tax, and compliance responsibilities — so you can focus on what matters most: growing your business.",
          ],
        },
        {
          title: "Our Core Values",
          items: [
            "Accuracy & Compliance",
            "Transparency & Trust",
            "Personalized Client Support",
            "Continuous Innovation",
          ],
        },
       
      ],
    },
    ar: {
      title: "من نحن – Countify",
      subtitle: "خدمات محاسبية ومالية متكاملة في جميع أنحاء الإمارات",
      sections: [
        {
          content: [
            "في Countify الإمارات، نحن شريكك الموثوق به لتقديم خدمات محاسبة، ضرائب، وتأسيس أعمال دقيقة، فعّالة، ومتوافقة تمامًا مع قوانين دولة الإمارات. نحن جزء من الشركة الأم في المملكة المتحدة، التي يقع مقرها الرئيسي في غلاسكو، ونقدم خبرة تزيد عن 15 عامًا في المحاسبة القانونية لخدمة الشركات الناشئة والصغيرة والمتوسطة والمتنامية في الإمارات.",
            "سواء كنت بصدد تأسيس شركتك في منطقة حرة أو في البر الرئيسي، أو كنت بحاجة إلى مسك دفاتر، إدارة رواتب، ضريبة القيمة المضافة، أو ضريبة الشركات — فإن فريقنا في دبي يقدم خدمات احترافية متوافقة مع قوانين الهيئة الاتحادية للضرائب (FTA) ومعايير التقارير المالية الدولية (IFRS).",
            "نجمع بين الخبرة العالمية والمعرفة المحلية لتبسيط التزاماتك المالية والضريبية والتقيد باللوائح — حتى تركز على الأهم: تنمية عملك.",
          ],
        },
        {
          title: "قيمنا الأساسية",
          items: [
            "الدقة والامتثال",
            "الشفافية والثقة",
            "دعم مخصص لكل عميل",
            "الابتكار المستمر",
          ],
        },
      
      ],
    },
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="bg-gradient-to-tr from-[#0a112d] to-[#1a3a8f] bg-footer bg-cover bg-no-repeat bg-center">
      <motion.section
        className="min-h-screen container w-full relative"
        initial="hidden"
        animate="show"
        variants={container}
        // style={{
        //   background: "url(./images/bg-effect-01.svg)"
        // }}
      >
        <motion.section aria-labelledby="page-title" variants={item}>
          <MainHeader
            title={currentContent.title}
            description={currentContent.subtitle}
          />
        </motion.section>

        {/* Content Sections */}
        <motion.div className="px-5 py-8" variants={container}>
          <div className=" mx-auto text-white space-y-8">
            {/* About Text */}
            <motion.div variants={item}>
              {currentContent.sections[0]?.content?.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="mb-4 text-lg leading-relaxed"
                  variants={item}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div variants={item}>
              <motion.h2
                className="text-2xl font-bold mb-8 text-[#dca958] text-center"
                variants={item}
              >
                {currentContent.sections[1].title}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentContent.sections[1]?.items?.map((itemText, index) => {
                  const icons = [CheckCircle, ShieldCheck, User, RefreshCw];

                  const IconComponent = icons[index % icons.length];

                  return (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="card m-auto text-gray-300 w-[clamp(300px,90%,400px)] hover:brightness-90 transition-all cursor-pointer group bg-[rgba(15,23,42,0.6)] backdrop-blur-md hover:bg-[rgba(30,41,59,0.6)] border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative"

                    >
                      <div className="px-8 py-10 mx-auto justify-center items-center flex flex-col">
                        <IconComponent className="flex rounded-full justify-center w-10 h-10 mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-secondary-color transition-all" />
                        <div className="uppercase font-bold text-xl mt-6 text-center">
                          {itemText}
                        </div>
                      </div>
                      <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
                      <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-blue-950 group-hover:via-secondary-color w-[70%] m-auto rounded transition-all" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Team Image Section */}
          <motion.div className="mt-12" variants={item}>
            <Image
              src="/images/UAE-counitfy-tas-services.webp"
              alt="Countify Team"
              width={1200}
              height={700}
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid gap-8 mt-12 mx-auto">
            <motion.div
              className="grid lg:grid-cols-4 rounded-xl border border-white/30 bg-gradient-to-r from-[#0a112d] to-[#1a3a8f] overflow-hidden"
              variants={item}
            >
              <div className="flex justify-center items-center text-center text-2xl text-[#dca958] p-6">
                <div>
                  <div className="Btn relative">
                    <span className="svgContainer">
                      <ChartLine className="svgIcon" />
                    </span>
                    <span className="BG"></span>
                  </div>
                  <h3 className="pb-4 lg:pb-0">
                    {language === "ar" ? "مهمتنا" : "Mission"}
                  </h3>
                </div>
              </div>
              <p className="lg:text-xl p-6 text-xl text-center lg:text-left lg:col-span-3 italic font-semibold text-white">
                {language === "ar"
                  ? "أن نكون الشريك الموثوق به في تقديم الحلول المالية والمحاسبية التي تمكن عملائنا من النجاح في بيئة الأعمال التنافسية في الإمارات."
                  : "To be the trusted partner providing financial and accounting solutions that enable our clients to succeed in the competitive business environment of the UAE."}
              </p>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-4 rounded-xl border border-white/30 bg-gradient-to-r from-[#0a112d] to-[#1a3a8f] overflow-hidden"
              variants={item}
            >
              <div className="flex justify-center items-center text-center text-2xl text-[#dca958] p-6">
                <div>
                  <div className="Btn relative">
                    <span className="svgContainer">
                      <Eye className="svgIcon" />
                    </span>
                    <span className="BG"></span>
                  </div>
                  <h3 className="pb-4 lg:pb-0">
                    {language === "ar" ? "رؤيتنا" : "Vision"}
                  </h3>
                </div>
              </div>
              <p className="lg:text-xl p-6 text-xl text-center lg:text-left lg:col-span-3 italic font-semibold text-white">
                {language === "ar"
                  ? "الريادة في تقديم خدمات محاسبية ومالية مبتكرة وعالية الجودة تعزز ثقة العملاء وتسهم في نمو أعمالهم."
                  : "To lead in providing innovative, high-quality accounting and financial services that build client trust and contribute to their business growth."}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <TeamSection />
      </motion.section>
    </div>
  );
};

export default AboutPage;
