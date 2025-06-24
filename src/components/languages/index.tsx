import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss"; // Ensure you have this file for styles
const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    if (typeof i18n.changeLanguage === "function") {
      const newLang = i18n.language === "vi" ? "en" : "vi";
      i18n.changeLanguage(newLang);
    } else {
      console.error("i18n.changeLanguage is not available", i18n);
    }
  };

  return (
    <button
      className='lang-toggle px-2 py-1 rounded bg-gray-200 text-xs w-[120px] h-[30px]'
      onClick={toggleLanguage}>
      {t("language_toggle")}
    </button>
  );
};

export default LanguageToggle;
