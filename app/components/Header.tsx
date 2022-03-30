import { Link } from 'remix';
import React from 'react';

const Header: React.FC = () => (
  <header className="top-0 z-10 border-b bg-white py-5 sm:sticky sm:h-20">
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:justify-between">
        <div className="mb-4 flex flex-col items-center sm:mb-0 sm:flex-row">
          <Link to="/" className="text-2xl text-blue-900">
            Ben Crevis
          </Link>
          <div className="flex space-x-5 text-center sm:ml-8">
            <Link to="/resume" className="text-gray-500 hover:text-pink-700">
              Resume
            </Link>
            <Link
              to="/open-source"
              className="text-gray-500 hover:text-pink-700"
            >
              Open Source
            </Link>
            <Link to="/services" className="text-gray-500 hover:text-pink-700">
              Services
            </Link>
            <Link to="/recipes" className="text-gray-500 hover:text-pink-700">
              Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
