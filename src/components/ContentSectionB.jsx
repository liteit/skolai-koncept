import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContentSectionB = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Memory med ord från intresse</h2>
          <p className="text-lg mb-6 text-gray-700">
            Ett memory skapas baserat på barnets intresse. Exemplet skapar korta ord som är kopplade till intresset. 
            Barnet ser även grafiskt hur många par som hittats och hur många som är kvar. 
            När alla paren är funna grattas eleven. 
            Potentiell utveckling:
            - Visa bild på intresset när eleven grattas
            - Ta tid och tävla mot sig själv
            - Läsa upp orden under spelets gågn eller efteråt   
          
          </p>
          <a 
            href="https://memory-mirror-magic.vercel.app/" 
            className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition duration-300"
          >
            Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="memory_ord_small.jpeg" 
            alt="Glada barn i skolan" 
            className="rounded-lg shadow-xl mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSectionB;