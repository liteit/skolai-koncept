import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConceptCard from '../components/ConceptCard';
import PlayfulContentSection from '../components/PlayfulContentSection';
import InnovativeApproachSection from '../components/InnovativeApproachSection';
import ProfessionalResultsSection from '../components/ProfessionalResultsSection';
import { Brain, Laptop, Users, TrendingUp } from 'lucide-react';

const concepts = [
  {
    title: "Personanpassat lärande",
    description: "Skräddarsydda läroplaner som anpassas efter varje elevs unika behov och inlärningsstil.",
    icon: <Brain className="w-12 h-12 text-blue-600" />
  },
  {
    title: "Digital kompetens",
    description: "Integrering av modern teknologi i undervisningen för att förbereda elever för framtidens arbetsmarknad.",
    icon: <Laptop className="w-12 h-12 text-green-600" />
  },
  {
    title: "Samarbete och kommunikation",
    description: "Fokus på att utveckla starka samarbets- och kommunikationsfärdigheter genom grupprojekt och presentationer.",
    icon: <Users className="w-12 h-12 text-purple-600" />
  },
  {
    title: "Kontinuerlig utvärdering",
    description: "Regelbunden uppföljning och analys av elevernas framsteg för att säkerställa optimal utveckling.",
    icon: <TrendingUp className="w-12 h-12 text-red-600" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Framtidens utbildning: Innovativa metoder för optimal inlärning</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600">
            Utforska våra banbrytande utbildningskoncept som kombinerar modern pedagogik, teknologi och personanpassning för att skapa en effektiv och engagerande lärmiljö.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {concepts.map((concept, index) => (
              <ConceptCard key={index} {...concept} />
            ))}
          </div>
        </div>
        <PlayfulContentSection />
        <InnovativeApproachSection />
        <ProfessionalResultsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
