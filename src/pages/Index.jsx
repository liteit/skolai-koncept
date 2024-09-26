import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConceptCard from '../components/ConceptCard';
import ContentSectionA from '../components/ContentSectionA';
import ContentSectionB from '../components/ContentSectionB';
import ContentSectionC from '../components/ContentSectionC';
import ContentSectionD from '../components/ContentSectionD';
import ContentSectionE from '../components/ContentSectionE';
import { Brain, Gamepad2, Cpu, Users } from 'lucide-react';

const concepts = [
  {
    title: "Mer personligt lärande med AI",
    description: "Vi anpassar stödet efter varje elevs unika behov och inlärningsstil.",
    icon: <Brain className="w-12 h-12 text-blue-500" />
  },
  {
    title: "AI-Assisterad Kreativitet",
    description: "Vi hjälper elever generera idéer och utveckla kreativiteten inom olika ämnen.",
    icon: <Cpu className="w-12 h-12 text-red-500" />
  },
  {
    title: "Gamification",
    description: "Förvandlar övningar till spännande äventyr där elever löser problem de har intresse för.",
    icon: <Gamepad2 className="w-12 h-12 text-green-500" />
  },
  {
    title: "Hybridträning med digitalt och analogt",
    description: "Vi tar hjälp av senaste tekniken för att skapa så engagerande övningar som möjlig, både digitalt och enalogt.",
    icon: <Users className="w-12 h-12 text-purple-500" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Innovativa koncept för framtidens lärande</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Vi utforskar olika koncept som kombinerar barns intressen och nyfikenhet för att skapa engagerande lärandemetoder.
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
