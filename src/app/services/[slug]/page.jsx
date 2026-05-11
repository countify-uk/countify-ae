import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import services from "@/data/services.json";
import MainHeader from "@/components/mainHeader";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Countify AE",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: {
      absolute: service.meta.title_en,
    },
    description: service.meta.description_en,
    alternates: {
      canonical: service.canonical,
    },
    openGraph: {
      title: service.meta.title_en,
      description: service.meta.description_en,
      url: service.canonical,
      type: "website",
      images: [
        {
          url: `https://www.countify.ae${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title.en,
        },
      ],
      siteName: "Countify AE",
    },
    twitter: {
      card: "summary_large_image",
      title: service.meta.title_en,
      description: service.meta.description_en,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const service = services.find((s) => s.slug === slug);
  const lang = cookieStore.get("language")?.value === "ar" ? "ar" : "en";

  if (!service) return notFound();

  const t = (key) => service.content?.[`${key}_${lang}`];

  return (
    <>
      <div className="bg-gradient-to-tr from-[#0a112d] to-[#1a3a8f] py-10 bg-contact bg-no-repeat bg-cover bg-center">
        <MainHeader
          title={service.title[lang]}
          description={service.description[lang]}
        />
        <div className="flex justify-between max-w-6xl mx-auto py-10 text-white px-7">
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2.5">
              <li className="inline-flex items-center gap-1.5">
                <Link
                  className="transition-colors text-white hover:text-white/60"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="text-white/60">/</li>
              <li className="inline-flex items-center gap-1.5">
                <Link 
                  className="transition-colors text-white hover:text-white/60"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li className="text-white/60">/</li>
              <li className="inline-flex items-center gap-1.5">
                <span className="text-white/60">{service.title[lang]}</span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-6 pb-10 mb-12 rounded-lg bg-white text-black shadow">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src={service.image}
              alt={`${service.title[lang]} — Countify UAE`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="prose mt-8 max-w-none">
            <h2 className="text-[#1a3a8f] font-bold text-2xl mb-4">
              {t("h1")}
            </h2>
            <p>{t("intro")}</p>

            {service.content[`why_2026_${lang}`] && (
              <div className="bg-amber-50 border-l-4 border-[#dca958] p-4 my-6 rounded">
                <p className="text-gray-800 font-medium">{service.content[`why_2026_${lang}`]}</p>
              </div>
            )}

            {service.content[`why_bookkeeping_${lang}`] && (
              <div className="bg-blue-50 border-l-4 border-[#1a3a8f] p-4 my-6 rounded">
                <p className="text-gray-800 font-medium">{service.content[`why_bookkeeping_${lang}`]}</p>
              </div>
            )}

            <h3 className="text-[#1a3a8f] font-bold text-2xl my-4">
              {lang === "ar" ? "خدماتنا تشمل" : "Our Services Include"}
            </h3>

            <ul className="space-y-4 pl-4 pb-6">
                {service.content[`services_${lang}`]?.map(
                  (item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#dca958] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  )
                )}
              </ul>
            <h3 className="text-[#1a3a8f] font-bold text-2xl my-4 ">
              {lang === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?"}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                {service.content[`why_us_${lang}`]?.map(
                  (item, i) => (
                    <li key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-start">
                        <div className="bg-[#0a112d] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-lg text-gray-700">{item}</span>
                      </div>
                    </li>
                  )
                )}
              </ul>

              {service.content[`faq_${lang}`] && (
                <>
                  <h3 className="text-[#1a3a8f] font-bold text-2xl my-4">
                    {lang === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
                  </h3>
                  <div className="space-y-4 my-6">
                    {service.content[`faq_${lang}`].map((faq, i) => (
                      <details key={i} className="border border-gray-200 rounded-lg overflow-hidden group">
                        <summary className="flex items-center justify-between p-5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors font-medium text-gray-900">
                          {faq.q}
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="p-5 border-t border-gray-200">
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </>
              )}

              <section className="bg-gradient-to-tl from-[rgb(45,79,142)] via-[#0a112d] to-[#1a3a8f] p-8 rounded-xl text-white">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {lang === "ar" ? "هل أنت مستعد؟" : "Ready to Get Started?"}
                </h2>
                <p className="text-lg mb-6">{t("cta")}</p>
                <Link
                  href={`/contact?lang=${lang}`}
                  className="inline-flex items-center justify-center bg-[#dca958] hover:bg-[#e69c31] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                >
                  {lang === "ar" ? "اتصل بنا الآن" : "Contact Us Now"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
