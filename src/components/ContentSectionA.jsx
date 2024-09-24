import React from 'react';
import { ArrowRight } from 'lucide-react';

const InnovativeApproachSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/images/innovative-learning.jpg" 
            alt="Innovativt lärande i klassrummet" 
            className="rounded-lg shadow-xl mx-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Innovativ approach till utbildning</h2>
          <p className="text-lg mb-6 text-gray-700">
            Vår unika metod kombinerar modern teknologi med beprövade pedagogiska 
            principer. Vi skapar en dynamisk lärmiljö där varje elev kan utforska, 
            experimentera och växa i sin egen takt, stöttade av AI-driven personalisering 
            och engagerande interaktiva upplevelser.
          </p>
          <a 
            href="#learn-more" 
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300"
          >
            Lär dig mer
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InnovativeApproachSection;
