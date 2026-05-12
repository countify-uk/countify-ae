"use client";
import MainHeader from "@/components/mainHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const service = searchParams.get("service") || "";
  const phone = searchParams.get("phone") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    company: "",
    message: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const services = [
    { value: "rd-advisory", label: "R&D Advisory" },
    { value: "corporate-tax", label: "Corporate Tax" },
    { value: "vat-return", label: "VAT Registration & Filing" },
    { value: "company-formation", label: "Company Formation" },
    { value: "bookkeeping", label: "Bookkeeping" },
    { value: "payroll-services", label: "Payroll Services" },
    { value: "year-end-accounts", label: "Year-End Accounts" },
    { value: "audit-preparation", label: "Audit Preparation" },
  ];

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      name,
      email,
      service,
      phone,
    }));
  }, [name, email, service, phone]);

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
            "Your message could not be sent. Please try again or contact us directly.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: result?.message || "Thank you. We will contact you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        service: "",
        phone: "",
        company: "",
        message: "",
        website: "",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Your message could not be sent. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Suspense fallback={<div className="text-white/40">Loading...</div>}>
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
