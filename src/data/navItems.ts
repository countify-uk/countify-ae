import { useLanguage } from "@/context/LanguageContext";

export type MenuItem = {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
};

export const NavMenu = (): MenuItem[] => {
  const { t } = useLanguage();

  return [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    {
      label: t("nav.services"),
      href: "/services",
      children: [
        { label: t("services.bookkeeping.title"), href: "/services/bookkeeping" },
        { label: t("services.formation.title"), href: "/services/company-formation" },
        { label: t("services.payroll.title"), href: "/services/payroll-services" },
        { label: t("services.vat.title"), href: "/services/vat-return" },
        { label: t("services.corporate-tax.title"), href: "/services/corporate-tax" },
        { label: t("services.accounts.title"), href: "/services/year-end-accounts" },
      ],
    },
    { label: t("nav.team"), href: "/team" },
    { label: t("nav.contact"), href: "/contact" },
  ];
};