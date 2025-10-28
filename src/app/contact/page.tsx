"use client";
import MainHeader from "@/components/mainHeader";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const service = searchParams.get("service") || "";
  const phone = searchParams.get("phone") || "";
  const company = searchParams.get("company") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    company: "",
  });

  const services = [
    { value: "bookkeeping", label: "Bookkeeping" },
    { value: "company-formation", label: "Company Formation" },
    { value: "payroll-services", label: "Payroll Services" },
    { value: "vat-return", label: "VAT Return" },
    { value: "year-end-accounts", label: "Year-end Accounts" },
  ];
  useEffect(() => {
    setFormData({
      name,
      email,
      service,
      phone,
      company,
    });
  }, [name, email, service, phone, company]);

  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium text-white/80 text-base">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white py-3 px-4 text-gray-900 text-lg w-full rounded-md"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="font-medium text-white/80 text-base"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-white py-3 px-4 text-gray-900 text-lg w-full rounded-md"
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="font-medium text-white/80 text-base"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="bg-white py-3 px-4 text-gray-900 text-lg w-full rounded-md"
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label
            htmlFor="company"
            className="font-medium text-white/80 text-base"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="bg-white py-3 px-4 text-gray-900 text-lg w-full rounded-md"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="service"
          className="font-medium text-white/80 text-base"
        >
          Service
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
          className="bg-white py-3 px-4 text-gray-900 text-lg w-full rounded-md"
        >
          <option value="">Select a Service</option>
          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-[#dca958] hover:bg-[#e69c31] text-white md:py-4 py-2 text-lg w-full rounded-md"
      >
        Send
      </button>
    </form>
  );
};

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState("uk");
  const toggleLocation = (location: string) => {
    setActiveLocation((prev) => (prev === location ? "" : location));
  };
  return (
    <section className="bg-contact bg-cover bg-no-repeat bg-fixed bg-center relative">
      <MainHeader
        title="Contact Us"
        description="Get in touch with us for any inquiries or assistance."
      />
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactForm />
            </Suspense>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-white/10 backdrop-blur-lg">
              <div data-orientation="vertical">
                <div
                  data-state={activeLocation === "uk" ? "closed" : "open"}
                  className="border-none border-2 border-b-slate-200"
                >
                  <h3 className="flex">
                    <button
                      type="button"
                      onClick={() => toggleLocation("uk")}
                      aria-controls="uk-section"
                      aria-expanded={activeLocation === "uk"}
                      className={`flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>svg]:rotate-180 border-none font-bold text-xl hover:no-underline ${
                        activeLocation === "uk"
                          ? "text-[#fbc670]"
                          : "text-white"
                      }`}
                    >
                      Countify UK
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          activeLocation === "uk" ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <motion.div
                    id="uk-section"
                    role="region"
                    aria-labelledby="uk-button"
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      activeLocation === "uk"
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-sm text-white"
                  >
                    <div className="pb-4 pt-0">
                      <div className="flex flex-col items-center lg:items-start text-white px-0">
                        <div className="py-2 lg:py-3 w-full flex items-center mb-0">
                          <Image
                            alt="Write to us"
                            loading="lazy"
                            width={72}
                            height={72}
                            decoding="async"
                            className="lg:w-18 lg:h-18 mr-6"
                            src="/images/chat-ic.png"
                          />
                          <div>
                            <h6 className="text-white-lilac mb-3 text-lg lg:text-[24px] leading-[26px] lg:leading-[34px] font-medium">
                              Write to us
                            </h6>
                            <a
                              href="mailto:info@countify.co.uk"
                              className="text-gray-ebb text-white transition-colors relative group"
                            >
                              info@countify.co.uk
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-700"></span>
                            </a>
                          </div>
                        </div>
                        <div className="py-2 lg:py-3 w-full flex items-center mb-0 border-t border-slate-50/20">
                          <Image
                            alt="UK office"
                            loading="lazy"
                            width={200}
                            height={200}
                            decoding="async"
                            className="lg:w-24 lg:h-24 mr-6"
                            src="/images/location-ic.png"
                          />
                          <div>
                            <h6 className="text-white-lilac mb-3 text-lg lg:text-[24px] leading-[26px] lg:leading-[34px] font-medium">
                              UK Office
                            </h6>
                            <p className="font-semibold">Countify UK</p>
                            <p className="text-gray-ebb mb-4">
                              3rd Floor, St. Georges Building, 5 St. Vincent
                              Place, Glasgow, G1 2DH
                            </p>
                          </div>
                        </div>
                        <div className="py-2 lg:py-3 border-t border-slate-50/20 w-full flex items-center">
                          <Image
                            alt="Call us"
                            loading="lazy"
                            width={72}
                            height={72}
                            decoding="async"
                            className="lg:w-18 lg:h-18 mr-6"
                            src="/images/phone-ic.png"
                          />
                          <div>
                            <h6 className="text-white-lilac mb-3 text-lg lg:text-[24px] leading-[26px] lg:leading-[34px] font-medium">
                              Call us
                            </h6>
                            <a
                              href="tel:+01412754860"
                              className="text-gray-ebb text-lg text-white transition-colors relative group"
                            >
                              + 014 127 54860
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-700"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Countify UAE */}
                <div
                  data-state={activeLocation === "uae" ? "open" : "closed"}
                  className="border-none border-2 border-b-slate-200"
                >
                  <h3 className="flex">
                    <button
                      type="button"
                      onClick={() => toggleLocation("uae")}
                      aria-controls="uae-section"
                      aria-expanded={activeLocation === "uae"}
                      className={`flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>svg]:rotate-180 border-none font-bold text-xl hover:no-underline ${
                        activeLocation === "uae"
                          ? "text-[#fbc670]"
                          : "text-white"
                      }`}
                    >
                      Countify UAE
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200 ${
                          activeLocation === "uae" ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <motion.div
                    id="uae-section"
                    role="region"
                    aria-labelledby="uae-button"
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      activeLocation === "uae"
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-sm text-white"
                  >
                    <div className="pb-4 pt-0">
                      <div className="flex flex-col items-center lg:items-start text-white px-0">
                        <div className="py-2 lg:py-3 w-full flex items-center mb-0">
                          <Image
                            alt="Write to us"
                            loading="lazy"
                            width={72}
                            height={72}
                            decoding="async"
                            className="lg:w-18 lg:h-18 mr-6"
                            src="/images/chat-ic.png"
                          />
                          <div>
                            <h6 className="text-white-lilac mb-3 text-lg lg:text-[24px] leading-[26px] lg:leading-[34px] font-medium">
                              Write to us
                            </h6>
                            <a
                              href="mailto:info@countify.ae"
                              className="text-gray-ebb text-white transition-colors relative group"
                            >
                              info@countify.ae
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-700"></span>
                            </a>
                          </div>
                        </div>
                        <div className="py-2 lg:py-3 w-full flex items-center mb-0 border-t border-slate-50/20">
                          <Image
                            alt="UAE office"
                            loading="lazy"
                            width={200}
                            height={200}
                            decoding="async"
                            className="lg:w-18 lg:h-18 mr-6"
                            src="/images/location-ic.png"
                          />
                          <div>
                            <h6 className="text-white-lilac mb-3 text-lg lg:text-[24px] leading-[26px] lg:leading-[34px] font-medium">
                              UAE Office
                            </h6>
                            <p className="font-semibold">Countify UAE</p>
                            <p className="text-gray-ebb mb-4">
                              1 Shams Business Centre Sharjah Media
                              City Shams Free Zone SHARJAH
                            </p>
                          </div>
                        </div>
                        <div className="py-2 lg:py-3 border-t border-slate-50/20 w-full flex items-center">
                          <Image
                            alt="Call us"
                            loading="lazy"
                            width={72}
                            height={72}
                            decoding="async"
                            className="lg:w-18 lg:h-18 mr-6"
                            src="/images/phone-ic.png"
                          />
                          <div>
                            <h6 className="text-white-lilac mb-3 text-lg lg:text-[24px] leading-[26px] lg:leading-[34px] font-medium">
                              Call us
                            </h6>
                            <a
                              href="tel:+97585117901"
                              className="text-gray-ebb text-lg text-white transition-colors relative group"
                            >
                              058 511 7901
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-700"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
