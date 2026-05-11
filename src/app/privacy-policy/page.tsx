import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Countify UAE",
  },
  description:
    "Read how Countify UAE collects, uses and protects personal information submitted through our website and contact forms.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Countify UAE",
    description:
      "How Countify UAE handles personal information submitted through this website.",
    url: "/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Countify UAE",
    description: "How Countify UAE handles website personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-b from-[#0a112d] via-[#061640] to-[#0a112d] text-white">
        <div className="container mx-auto px-5 pt-32 pb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#dca958]">
            Website policy
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-white/70">
            This page explains how Countify UAE handles information shared
            through our website, consultation forms and direct enquiries.
          </p>
        </div>
      </section>

      <main className="container mx-auto max-w-4xl px-5 py-14">
        {[
          {
            title: "Information we collect",
            body: "When you contact us, we may collect your name, email address, phone number, company name, service interest and any details you choose to include in your message. We also receive basic technical information such as browser, device and page interaction data through standard website analytics.",
          },
          {
            title: "How we use your information",
            body: "We use your information to respond to enquiries, arrange consultations, provide requested services, improve our website and keep basic business records. We do not sell your personal information.",
          },
          {
            title: "Sharing information",
            body: "We may share information with trusted service providers who help us operate the website, manage communications or deliver professional services. Where required, we may also share information with regulators, authorities or advisers.",
          },
          {
            title: "Keeping information secure",
            body: "We use reasonable administrative and technical measures to protect information. No website can guarantee absolute security, so please avoid sending highly sensitive documents through general contact forms unless requested through a secure channel.",
          },
          {
            title: "Your choices",
            body: "You can ask us to update, correct or delete personal information where applicable. You can also ask us to stop using your details for marketing communication.",
          },
          {
            title: "Contact",
            body: "For privacy questions, email info@countify.ae or write to Countify UAE, Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.",
          },
        ].map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-2xl font-bold text-[#0a112d]">
              {section.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              {section.body}
            </p>
          </section>
        ))}

        <div className="mt-14 rounded-xl bg-gray-50 p-6">
          <p className="text-sm text-gray-600">
            Last updated: May 11, 2026. For service-specific questions, please
            visit our <Link className="text-[#1a3a8f] underline" href="/contact">contact page</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
