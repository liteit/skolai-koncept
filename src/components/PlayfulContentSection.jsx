import React from 'react';
import { ArrowRight } from 'lucide-react';

const PlayfulContentSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Engagerande lärande för framtiden</h2>
          <p className="text-lg mb-6 text-gray-600">
            Vår innovativa approach kombinerar modern pedagogik med teknologi 
            för att skapa en stimulerande lärmiljö. Vi fokuserar på att utveckla 
            kritiskt tänkande, kreativitet och samarbetsförmåga hos varje elev.
          </p>
          <a 
            href="#demo" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Utforska vår metodik
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/engaged-students.jpg" 
            alt="Engagerade elever i klassrummet" 
            className="rounded-lg shadow-lg mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PlayfulContentSection;
