"use client";
import MainHeader from "@/components/mainHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

type ContactFormData = {
  name: string;
  email: string;
  service: string;
  phone: string;
  company: string;
  message: string;
  website: string;
};

const emptyFormData: ContactFormData = {
  name: "",
  email: "",
  service: "",
  phone: "",
  company: "",
  message: "",
  website: "",
};

const ContactForm = () => {
  const searchParams = useSearchParams();
  const { t, language } = useLanguage();
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const service = searchParams.get("service") || "";
  const phone = searchParams.get("phone") || "";
  const message = searchParams.get("message") || "";

  const [formData, setFormData] = useState<ContactFormData>(emptyFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const services = [
    { value: "rd-advisory", label: t("form.services.rd-advisory", "R&D Advisory") },
    { value: "corporate-tax", label: t("services.corporate-tax.title", "Corporate Tax") },
    { value: "vat-return", label: t("form.services.vat-return", "VAT Registration & Filing") },
    { value: "company-formation", label: t("form.services.company-formation", "Company Formation") },
    { value: "bookkeeping", label: t("form.services.bookkeeping", "Bookkeeping") },
    { value: "payroll-services", label: t("form.services.payroll-services", "Payroll Services") },
    { value: "year-end-accounts", label: t("form.services.year-end-accounts", "Year-End Accounts") },
    { value: "audit-preparation", label: t("form.services.audit-preparation", "Audit Preparation") },
  ];

  const getServiceLabel = (value: string) =>
    services.find((item) => item.value === value)?.label || value || (language === "ar" ? "لم يتم الاختيار" : "Not selected");

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      name,
      email,
      service,
      phone,
      message,
    }));
  }, [name, email, service, phone, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "contact",
          source: window.location.href,
        }),
      });
      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        setSubmitStatus({
          type: "error",
          message:
            result?.message ||
            language === "ar"
              ? "تعذر إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة."
              : "Your message could not be sent. Please try again or contact us directly.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: result?.message || (language === "ar" ? "شكرًا لك. سنتواصل معك قريبًا." : "Thank you. We will contact you shortly."),
      });
      setSubmittedData(formData);
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          language === "ar"
            ? "تعذر إرسال رسالتك. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة."
            : "Your message could not be sent. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus?.type === "success" && submittedData) {
    const summaryRows = [
      { label: language === "ar" ? "الاسم" : "Name", value: submittedData.name },
      { label: language === "ar" ? "البريد الإلكتروني" : "Email", value: submittedData.email },
      { label: language === "ar" ? "الهاتف" : "Phone", value: submittedData.phone },
      { label: language === "ar" ? "الشركة" : "Company", value: submittedData.company },
      { label: language === "ar" ? "الخدمة" : "Service", value: getServiceLabel(submittedData.service) },
      { label: language === "ar" ? "الرسالة" : "Message", value: submittedData.message },
    ].filter((item) => item.value);

    return (
      <motion.div
        role="status"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-2xl border border-green-400/25 bg-green-400/10 p-6 text-center"
      >
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-400/15 ring-1 ring-green-300/30">
          <CheckCircle2 className="h-12 w-12 text-green-300" strokeWidth={1.8} />
        </div>
        <h3 className="text-2xl font-bold text-white">
          {language === "ar" ? "ØªÙ… Ø¥Ø±Ø³Ø§Ù„ Ø·Ù„Ø¨Ùƒ" : "Your enquiry has been sent"}
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">
          {submitStatus.message}{" "}
          {language === "ar"
            ? "Ø£Ø±Ø³Ù„Ù†Ø§ Ø£ÙŠØ¶Ù‹Ø§ ØªØ£ÙƒÙŠØ¯Ù‹Ø§ Ø¥Ù„Ù‰ Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ."
            : "We have also sent a confirmation email to your inbox."}
        </p>

        <div className="mt-7 rounded-xl border border-white/10 bg-[#0a112d]/60 p-5 text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#dca958]">
            {language === "ar" ? "Ù…Ù„Ø®Øµ Ø§Ù„Ø·Ù„Ø¨" : "Submission summary"}
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            {summaryRows.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-white/40">
                  {item.label}
                </dt>
                <dd className="mt-1 break-words text-sm font-semibold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-white/70">
            {language === "ar" ? "الاسم الكامل" : "Full Name"} *
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#dca958] focus:ring-1 focus:ring-[#dca958]/50 transition-all"
            placeholder={language === "ar" ? "اسمك الكامل" : "John Smith"}
            required
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-white/70">
            {language === "ar" ? "البريد الإلكتروني" : "Email"} *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#dca958] focus:ring-1 focus:ring-[#dca958]/50 transition-all"
            placeholder="you@company.com"
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-white/70">
            {language === "ar" ? "رقم الهاتف" : "Phone (UAE)"}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#dca958] focus:ring-1 focus:ring-[#dca958]/50 transition-all"
            placeholder="+971 5X XXX XXXX"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-sm font-medium text-white/70">
            {language === "ar" ? "الشركة" : "Company"}
          </label>
          <input
            id="company"
            name="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#dca958] focus:ring-1 focus:ring-[#dca958]/50 transition-all"
            placeholder={language === "ar" ? "اسم الشركة" : "Company name"}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="service" className="text-sm font-medium text-white/70">
          {language === "ar" ? "الخدمة المطلوبة" : "Service Required"}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#dca958] focus:ring-1 focus:ring-[#dca958]/50 transition-all"
        >
          <option value="" className="bg-[#0a112d]">{language === "ar" ? "اختر خدمة" : "Select a service"}</option>
          {services.map((s) => (
            <option key={s.value} value={s.value} className="bg-[#0a112d]">
              {s.label}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-white/70">
          {language === "ar" ? "رسالتك" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#dca958] focus:ring-1 focus:ring-[#dca958]/50 transition-all resize-none"
          placeholder={language === "ar" ? "أخبرنا عن احتياجاتك..." : "Tell us about your requirements..."}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#dca958] to-[#e69c31] hover:shadow-lg hover:shadow-[#dca958]/20 transition-all duration-300 disabled:opacity-60"
      >
        {isSubmitting
          ? (language === "ar" ? "جارٍ الإرسال..." : "Sending...")
          : (language === "ar" ? "أرسل رسالتك" : "Send Message")}
      </button>
      {submitStatus && (
        <p
          role="status"
          className={`text-sm ${
            submitStatus.type === "success" ? "text-green-300" : "text-red-300"
          }`}
        >
          {submitStatus.message}
        </p>
      )}
    </form>
  );
};

const ContactPage = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] min-h-screen">
      <MainHeader
        title={language === "ar" ? "تواصل معنا" : "Get in Touch"}
        description={
          language === "ar"
            ? "نحن هنا لمساعدتك. تواصل مع فريقنا اليوم."
            : "We're here to help. Reach out to our team today."
        }
        breadcrumb={[
          { label: language === "ar" ? "الرئيسية" : "Home", href: "/" },
          { label: language === "ar" ? "تواصل معنا" : "Contact" },
        ]}
      />

      <section className="container mx-auto px-5 py-12 lg:py-16">
        <motion.div
          className="max-w-5xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {language === "ar"
              ? "سواء كنت تبدأ عملك في الإمارات أو تحتاج إلى دعم ضريبي مستمر — فريقنا من المحاسبين المعتمدين مستعد لمساعدتك. استشارة أولية مجانية لجميع العملاء الجدد."
              : "Whether you're launching a business in the UAE or need ongoing tax and compliance support — our ACCA-qualified team is ready to help. Free initial consultation for all new clients."}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-3 bg-white/[0.03] border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-white mb-1">
              {language === "ar" ? "أرسل لنا رسالة" : "Send us a message"}
            </h2>
            <p className="text-white/40 text-sm mb-6">
              {language === "ar"
                ? "سنرد خلال ساعات العمل"
                : "We'll respond within 1 business day"}
            </p>
            <Suspense fallback={<div className="text-white/40">{language === "ar" ? "جارٍ التحميل..." : "Loading..."}</div>}>
              <ContactForm />
            </Suspense>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#dca958]/10 to-[#dca958]/5 border-2 border-[#dca958]/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#dca958] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {language === "ar" ? "مكتب الإمارات" : "UAE Office"}
                  </h3>
                  <span className="text-[#dca958] text-xs font-semibold uppercase tracking-wider">
                    {language === "ar" ? "المقر الرئيسي" : "Primary"}
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Meydan Grandstand, 6th floor<br />
                Meydan Road, Nad Al Sheba<br />
                Dubai, U.A.E.
              </p>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                <Phone className="w-4 h-4 text-[#dca958]" />
                <a href="tel:+971585117901" className="hover:text-[#dca958] transition-colors font-medium">
                  +971 58 511 7901
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                <Mail className="w-4 h-4 text-[#dca958]" />
                <a href="mailto:info@countify.ae" className="hover:text-[#dca958] transition-colors">
                  info@countify.ae
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs mt-3">
                <Clock className="w-3.5 h-3.5" />
                <span>{language === "ar" ? "الأحد – الخميس: 9 ص – 6 م" : "Mon-Fri 9am – 6pm"}</span>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {language === "ar" ? "مكتب المملكة المتحدة" : "UK Office"}
                  </h3>
                  <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                    {language === "ar" ? "المقر الرئيسي" : "Head Office"}
                  </span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                3rd Floor, St. Georges Building<br />
                5 St. Vincent Place<br />
                Glasgow, G1 2DH
              </p>
              <div className="flex items-center gap-2 text-white/50 text-sm mb-2">
                <Mail className="w-4 h-4 text-white/40" />
                <a href="mailto:info@countify.co.uk" className="hover:text-white transition-colors">
                  info@countify.co.uk
                </a>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
              <a
                href="https://wa.me/971585117901"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {language === "ar" ? "تحدث عبر واتساب" : "Chat on WhatsApp"}
                  </p>
                  <p className="text-white/40 text-xs">
                    {language === "ar" ? "رد فوري خلال ساعات العمل" : "Instant reply during business hours"}
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
              <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-3">
                {language === "ar" ? "نخدم" : "Serving"}
              </p>
              <div className="flex flex-wrap gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah"].map((city) => (
                  <span key={city} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-5 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: language === "ar" ? "استشارة مجانية" : "Free Consultation",
              desc: language === "ar"
                ? "استشارة أولية مجانية لجميع العملاء الجدد بدون أي التزام."
                : "No-obligation initial consultation for all new clients. Let's discuss your needs.",
            },
            {
              title: language === "ar" ? "رد سريع" : "Fast Response",
              desc: language === "ar"
                ? "نرد خلال يوم عمل واحد. أسرع عبر واتساب."
                : "We respond within 1 business day. Faster via WhatsApp during office hours.",
            },
            {
              title: language === "ar" ? "مؤهلون من ACCA" : "ACCA Qualified",
              desc: language === "ar"
                ? "تتحدث مباشرة مع محاسبين قانونيين معتمدين، وليس مندوبي مبيعات."
                : "You speak directly with qualified chartered accountants, not salespeople.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
