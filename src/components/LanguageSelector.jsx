import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button onClick={() => changeLanguage('sv')} className="focus:outline-none">
        <img src="/flags/sv.svg" alt="Swedish" className="w-6 h-6" />
      </button>
      <button onClick={() => changeLanguage('en')} className="focus:outline-none">
        <img src="/flags/en.svg" alt="English" className="w-6 h-6" />
      </button>
      <button onClick={() => changeLanguage('nl')} className="focus:outline-none">
        <img src="/flags/nl.svg" alt="Dutch" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LanguageSelector;