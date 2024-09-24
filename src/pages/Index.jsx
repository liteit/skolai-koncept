import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConceptCard from '../components/ConceptCard';
import { Brain, Gamepad2, Cpu, Users } from 'lucide-react';

const concepts = [
  {
    title: "AI-Driven Personligt Lärande",
    description: "Använder AI för att anpassa läroplanen efter varje elevs unika behov och inlärningsstil.",
    icon: <Brain className="w-12 h-12 text-blue-500" />
  },
  {
    title: "Gamifierad Matematik",
    description: "Förvandlar matematiklektioner till spännande äventyr där elever löser problem för att avancera.",
    icon: <Gamepad2 className="w-12 h-12 text-green-500" />
  },
  {
    title: "Kollaborativ Problemlösning",
    description: "Uppmuntrar elever att arbeta tillsammans i virtuella rum för att lösa komplexa, verklighetstrogna problem.",
    icon: <Users className="w-12 h-12 text-purple-500" />
  },
  {
    title: "AI-Assisterad Kreativitet",
    description: "Använder AI för att hjälpa elever generera idéer och utveckla kreativa projekt inom olika ämnen.",
    icon: <Cpu className="w-12 h-12 text-red-500" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Framtidens Lärande: Innovativa Koncept</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Utforska våra banbrytande koncept som kombinerar barns intressen, nyfikenhet och gamification för att skapa mer engagerande och effektiva lärandemetoder.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concepts.map((concept, index) => (
            <ConceptCard key={index} {...concept} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
