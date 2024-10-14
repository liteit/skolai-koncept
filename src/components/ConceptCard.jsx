import React from 'react';
import { useTranslation } from 'react-i18next';

const ConceptCard = ({ title, description, icon }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{t(title)}</h3>
      <p className="text-gray-600">{t(description)}</p>
    </div>
  );
};

export default ConceptCard;