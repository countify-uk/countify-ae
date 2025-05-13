import { useLanguage } from "@/context/LanguageContext";
export const useFooterLinks = () => {
    const { t } = useLanguage();
    
  return [
    {
      title: "Quick Links",
      links: [
        { label: t("nav.home", "Home"), href: "/" },
        { label: t("nav.about", "About Countify"), href: "/about" },
        { label: t("nav.services", "Our Services"), href: "/services" },
        { label: t("nav.team", "Our Team"), href: "/team" },
        { label: t("nav.contact", "Contact"), href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: t("services.bookkeeping.title"), href: "/services/bookkeeping" },
        { label: t("services.formation.title"), href: "/services/company-formation" },
        { label: t("services.payroll.title"), href: "/services/payroll-services" },
        { label: t("services.vat.title"), href: "/services/vat-return" },
        { label: t("services.accounts.title"), href: "/services/year-end-accounts" },
      ],
    },
];
}