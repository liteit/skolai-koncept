import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContentSectionC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img 
            src="alma_small.jpeg" 
            alt="Skapa övningar" 
            className="rounded-lg shadow-xl mx-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Alma Assistenten</h2>
          <p className="text-lg mb-6 text-gray-700">
            Assistenten hjälper i första hand läraren att skapa nya engagerande övningar mha AI, som är kopplat till elevens intressen. Med ett anpassat AI interface finn fler möjligheter att skapa ett verktyg som blir både praktiskt och effektivt.
          </p>
          <a 
            href="https://alma-assistent.vercel.app/" 
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300"
          >
            Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentSectionC;
