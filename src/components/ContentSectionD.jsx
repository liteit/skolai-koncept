import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContentSectionD = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Bildstödsgenerering</h2>
          <p className="text-lg mb-6 text-gray-700">
            Bildgenerator tar ett uttryck i stil med "Pojke Spelar Piano" 4 bilder skapas, en som beskriver vad som sker och tre mindre kort som besktiver en pojke, verbet spelar samt ett piano. Det är möjligt att lägga text på korten som skrivs ut. Korten lägger sedan eleven på mallen för att skapa meningen. Färgkodning för kort med verb är möjligt.    
          </p>
          <a 
            href="https://simple-illustration-generator.vercel.app/" 
            className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition duration-300"
          >
            Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="boy_plays_piano_small.jpeg" 
            alt="boy plays piano" 
            className="rounded-lg shadow-xl mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSectionD;