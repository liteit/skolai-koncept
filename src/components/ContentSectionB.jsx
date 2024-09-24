import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContentSectionB = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Memory som engagerar</h2>
          <p className="text-lg mb-6 text-gray-700">
            Konceptet genererar ett memory baserat på barnets intresse. Det finns möjlighet att skapa dynamiska bilder med ord. Genom att integrera lek, teknologi och kreativitet skapar vi en miljö där varje barn kan blomstra och 
            utvecklas i sin egen takt.
          </p>
          <a 
            href="https://whimsical-memory-mosaic.vercel.app/" 
            className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition duration-300"
          >
            Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/happy-school-children.jpg" 
            alt="Glada barn i skolan" 
            className="rounded-lg shadow-xl mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSectionB;