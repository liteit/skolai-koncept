import React from 'react';
import { Lightbulb } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Lightbulb className="w-8 h-8 text-yellow-500 mr-2" />
          <span className="text-xl font-bold">SkolAi </span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Hem</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Om oss</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;