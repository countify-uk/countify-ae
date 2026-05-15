'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#020B2D] border-t border-white/20 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <p className="text-white/80 text-sm max-w-2xl">
        {t("cookie.text", "We use cookies to improve your experience. By continuing to use this site, you agree to our")}{' '}
        <Link href="/privacy-policy" className="text-[#dca958] hover:underline">{t("cookie.policy", "Privacy Policy")}</Link>.
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button onClick={decline} className="px-4 py-2 text-sm text-white/60 border border-white/20 rounded hover:border-white/40 transition-colors">
          {t("cookie.decline", "Decline")}
        </button>
        <button onClick={accept} className="px-4 py-2 text-sm bg-[#dca958] text-white rounded hover:bg-[#e69c31] transition-colors font-medium">
          {t("cookie.accept", "Accept")}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
