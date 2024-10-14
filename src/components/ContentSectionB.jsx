import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const ContentSectionB = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">{t('memoryWithWords')}</h2>
          <p className="text-lg mb-6 text-gray-700">
            {t('memoryWithWordsDesc')}
          </p>
          <a 
            href="https://memory-mirror-magic.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition duration-300"
          >
            {t('demo')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="memory_ord_small.jpeg" 
            alt={t('memoryWordsAlt')} 
            className="rounded-lg shadow-xl mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSectionB;