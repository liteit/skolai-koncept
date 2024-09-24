import React from 'react';
import { ArrowRight } from 'lucide-react';

const InnovativeApproachSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/images/innovative-learning.jpg" 
            alt="Innovativt lärande i klassrummet" 
            className="rounded-lg shadow-lg mx-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Framtidsinriktad utbildning</h2>
          <p className="text-lg mb-6 text-gray-600">
            Vår metodik integrerar avancerad teknologi med beprövade pedagogiska 
            principer. Vi skapar en dynamisk lärmiljö där varje elev kan utvecklas 
            optimalt, stöttade av personanpassad undervisning och interaktiva 
            upplevelser.
          </p>
          <a 
            href="#learn-more" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Läs mer om vår approach
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InnovativeApproachSection;
