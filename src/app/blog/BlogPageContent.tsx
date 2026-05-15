"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useLanguage } from "@/context/LanguageContext";

const arabicPosts: Record<string, { title: string; excerpt: string; category: string; readTime: string }> = {
  "uk-business-setting-up-in-uae": {
    title: "تأسيس شركة بريطانية في الإمارات: ما يجب ترتيبه قبل بدء النشاط",
    excerpt: "دليل عملي للمؤسسين في المملكة المتحدة حول الشركة الإماراتية والحساب البنكي والتسجيل الضريبي وإعداد المالية للسنة الأولى.",
    category: "تأسيس الشركات",
    readTime: "٧ دقائق قراءة",
  },
  "uae-corporate-tax-guide-2026": {
    title: "ضريبة الشركات في الإمارات 2026: دليل مبسط للشركات الصغيرة والمتوسطة",
    excerpt: "ما تحتاج الشركات الإماراتية إلى معرفته عن التسجيل والدخل الخاضع للضريبة وقواعد المناطق الحرة والمواعيد والسجلات.",
    category: "ضريبة الشركات",
    readTime: "٨ دقائق قراءة",
  },
  "freezone-vs-mainland-uae": {
    title: "المنطقة الحرة أم البر الرئيسي في الإمارات: كيف تختار الهيكل المناسب",
    excerpt: "مقارنة عملية بين شركات المناطق الحرة والبر الرئيسي للمؤسسين والاستشاريين والتجار والمالكين من الخارج.",
    category: "تأسيس الشركات",
    readTime: "٦ دقائق قراءة",
  },
  "uae-rd-tax-incentives-guide": {
    title: "حوافز البحث والتطوير في الإمارات: كيف تحدد المشاريع المؤهلة",
    excerpt: "دليل واضح لتحديد أنشطة وتكاليف ووثائق البحث والتطوير لأغراض ضريبة الشركات في الإمارات.",
    category: "استشارات البحث والتطوير",
    readTime: "٧ دقائق قراءة",
  },
  "vat-registration-uae-guide": {
    title: "التسجيل في ضريبة القيمة المضافة في الإمارات: متى تسجل وما الذي يجب تحضيره",
    excerpt: "دليل واضح حول حدود التسجيل في ضريبة القيمة المضافة وتوقيته والمستندات المطلوبة والتحضير لأول إقرار.",
    category: "ضريبة القيمة المضافة",
    readTime: "٦ دقائق قراءة",
  },
};

export default function BlogPageContent() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] text-white" dir={language === "ar" ? "rtl" : "ltr"}>
      <section className="container mx-auto px-5 pt-32 pb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#dca958]">
          {language === "ar" ? "رؤى Countify" : "Countify insights"}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          {language === "ar" ? "أدلة عملية للمحاسبة والضرائب في الإمارات" : "Practical UAE accounting and tax guides"}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
          {language === "ar"
            ? "ملاحظات واضحة للمؤسسين وفرق المالية والمالكين من الخارج الذين يريدون تقليل المفاجآت عند التعامل مع الضرائب ومسك الدفاتر وتأسيس الشركات في الإمارات."
            : "Straightforward notes for founders, finance teams and overseas owners who want fewer surprises when dealing with UAE tax, bookkeeping and company setup."}
        </p>
      </section>

      <section className="container mx-auto grid gap-6 px-5 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const localized = language === "ar" ? arabicPosts[post.slug] : null;
          return (
            <article
              key={post.slug}
              className="flex min-h-[320px] flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#dca958]/60"
            >
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-wider text-white/45">
                <span>{localized?.category || post.category}</span>
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat(language === "ar" ? "ar-AE" : "en-AE", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }).format(new Date(post.date))}
                </time>
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#dca958]">
                  {localized?.title || post.title}
                </Link>
              </h2>
              <p className="mt-4 flex-1 text-sm leading-6 text-white/65">
                {localized?.excerpt || post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#dca958]"
              >
                {language === "ar" ? "اقرأ الدليل" : "Read guide"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
