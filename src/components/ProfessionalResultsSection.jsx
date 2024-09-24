import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Kritiskt tänkande', value: 85 },
  { name: 'Problemlösning', value: 90 },
  { name: 'Kreativitet', value: 80 },
  { name: 'Samarbete', value: 88 },
  { name: 'Digital kompetens', value: 92 },
];

const ProfessionalResultsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Mätbara resultat</h2>
        <div className="mb-8">
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Vår innovativa utbildningsmetod har visat sig ge betydande förbättringar 
            i nyckelkompetenser som är avgörande för framtidens arbetsmarknad. 
            Nedan ser du genomsnittliga förbättringar hos våra elever efter ett år.
          </p>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalResultsSection;