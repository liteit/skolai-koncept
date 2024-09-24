import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Om SkolAI</h3>
            <p className="text-sm">Vi strävar efter att revolutionera utbildning genom innovativa, engagerande och personanpassade lärandemetoder.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Kontakta oss</h3>
            <p className="text-sm">Email: info@skolai.se</p>
            <p className="text-sm">Telefon: 08-123 45 67</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Följ oss</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">Facebook</a>
              <a href="#" className="text-white hover:text-gray-300">Twitter</a>
              <a href="#" className="text-white hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 SkolAi. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;