import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">{t('aboutSkolAI')}</h3>
            <p className="text-sm">{t('skolAIDescription')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">{t('contactUs')}</h3>
            <p className="text-sm">{t('email')}: info@admeliora.ai</p>
            <p className="text-sm">{t('phone')}: 08-123 45 67</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">{t('followUs')}</h3>
            <div className="flex space-x-4">
            <a href="https://www.admeliora.ai" className="text-white hover:text-gray-300">Homepage</a>
            <a href="https://www.linkedin.com/company/aiadmeliora" className="text-white hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;