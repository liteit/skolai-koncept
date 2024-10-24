import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConceptCard from '../components/ConceptCard';
import ContentSectionA from '../components/ContentSectionA';
import ContentSectionB from '../components/ContentSectionB';
import ContentSectionC from '../components/ContentSectionC';
import ContentSectionD from '../components/ContentSectionD';
import ContentSectionE from '../components/ContentSectionE';
import ContentSectionF from '../components/ContentSectionF';
import ContentSectionG from '../components/ContentSectionG';

import { Brain, Gamepad2, Cpu, Users } from 'lucide-react';

const Index = () => {
  const { t } = useTranslation();

  const concepts = [
    {
      title: t('personalLearning'),
      description: t('personalLearningDesc'),
      icon: <Brain className="w-12 h-12 text-blue-500" />
    },
    {
      title: t('assistedCreativity'),
      description: t('assistedCreativityDesc'),
      icon: <Cpu className="w-12 h-12 text-red-500" />
    },
    {
      title: t('playAndLearn'),
      description: t('playAndLearnDesc'),
      icon: <Gamepad2 className="w-12 h-12 text-green-500" />
    },
    {
      title: t('hybridTraining'),
      description: t('hybridTrainingDesc'),
      icon: <Users className="w-12 h-12 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">{t('mainTitle')}</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t('mainDescription')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {concepts.map((concept, index) => (
              <ConceptCard key={index} {...concept} />
            ))}
          </div>
        </div>
    
        <ContentSectionA />
        <ContentSectionB />  
        <ContentSectionC />    
        <ContentSectionD />
        <ContentSectionE />  
        <ContentSectionF />
        <ContentSectionG />
   
      </main>
      <Footer />
    </div>
  );
};

export default Index;