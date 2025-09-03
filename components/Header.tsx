import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button onClick={onClick} className="text-gray-600 hover:text-rose-600 transition-colors duration-300">
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
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
          <NavLink onClick={() => navigateTo(Page.BioGenerator)}>AI Bio Puitu</NavLink>
          <NavLink onClick={() => navigateTo(Page.Chat)}>Thuchah</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="relative text-gray-600 hover:text-rose-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          </button>
          <img src="https://picsum.photos/id/1027/100/100" alt="User" className="h-10 w-10 rounded-full cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;