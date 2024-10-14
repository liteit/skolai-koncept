import React from 'react';
import { Lightbulb } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Lightbulb className="w-8 h-8 text-yellow-500 mr-2" />
          <span className="text-xl font-bold">SkolAi </span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">{t('home')}</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">{t('about')}</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">{t('contact')}</a></li>
          </ul>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
};

export default Header;