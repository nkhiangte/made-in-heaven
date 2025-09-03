
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  navigateTo: (page: Page) => void;
  onLogout: () => void;
  isUserVerified: boolean;
}

const NavLink: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button onClick={onClick} className="text-gray-600 hover:text-rose-600 transition-colors duration-300">
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ navigateTo, onLogout, isUserVerified }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo(Page.Dashboard)}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <h1 className="text-2xl font-bold text-gray-800">Made in Heaven</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink onClick={() => navigateTo(Page.Dashboard)}>Hma-en</NavLink>
          <NavLink onClick={() => navigateTo(Page.CompatibilityChecker)}>Inremna Enna</NavLink>
          <NavLink onClick={() => navigateTo(Page.KundliMatcher)}>AI Matchmaker</NavLink>
          <NavLink onClick={() => navigateTo(Page.BioGenerator)}>AI Bio Puitu</NavLink>
          <NavLink onClick={() => navigateTo(Page.Chat)}>Thuchah</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
           {isUserVerified ? (
            <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm-2.22 7.072a.75.75 0 00.025 1.06l4.25 4.5a.75.75 0 001.085-.025l6.25-6.5a.75.75 0 00-1.085-1.036l-5.69 5.952-3.72-3.963a.75.75 0 00-1.06.025z" clipRule="evenodd" /></svg>
              Fiah Tawh
            </div>
          ) : (
            <button 
              onClick={() => navigateTo(Page.Verification)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Fiahna Pe Rawh
            </button>
          )}
          <button 
            onClick={onLogout}
            className="bg-rose-500 text-white py-2 px-6 rounded-lg hover:bg-rose-600 transition-colors font-semibold"
          >
            Chhuak Rawh
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
