
import React, { useState } from 'react';
import { UserRole } from '../types';

interface AuthPageProps {
  onLogin: (role: UserRole) => void;
}

type View = 'welcome' | 'user_login' | 'admin_login';

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [view, setView] = useState<View>('welcome');

  const LoginForm: React.FC<{ role: UserRole }> = ({ role }) => (
    <div className="w-full max-w-sm">
      <button onClick={() => setView('welcome')} className="mb-6 flex items-center text-gray-600 hover:text-gray-800 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Kir Leh Rawh
      </button>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        {role === UserRole.ADMIN ? 'Admin' : 'User'} Luhna
      </h2>
      <p className="text-center text-gray-500 mb-8">I chanchin chhu lut rawh le.</p>
      <form onSubmit={(e) => { e.preventDefault(); onLogin(role); }} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input type="email" id="email" required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 p-3" defaultValue={role === UserRole.ADMIN ? 'admin@madeinheaven.com' : 'user@madeinheaven.com'}/>
        </div>
        <div>
          <label htmlFor="password"className="block text-sm font-medium text-gray-700">Thufim</label>
          <input type="password" id="password" required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 p-3" defaultValue="password" />
        </div>
        <button type="submit" className="w-full bg-rose-500 text-white py-3 px-4 rounded-lg hover:bg-rose-600 transition-colors text-lg font-semibold">
          Lut Rawh
        </button>
      </form>
    </div>
  );

  const WelcomeView = () => (
    <div className="text-center">
      <div className="flex justify-center items-center space-x-3 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <h1 className="text-5xl font-bold text-gray-800">Made in Heaven-ah kan lo lawm a che</h1>
      </div>
      <p className="text-xl text-gray-500 mb-12">I nunkhuaa i kawppui tur i zawn theihna tur.</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button onClick={() => setView('user_login')} className="bg-rose-500 text-white py-4 px-10 rounded-lg hover:bg-rose-600 transition-colors text-xl font-semibold shadow-lg">
          User Angin Lut Rawh
        </button>
        <button onClick={() => setView('admin_login')} className="bg-gray-700 text-white py-4 px-10 rounded-lg hover:bg-gray-800 transition-colors text-xl font-semibold shadow-lg">
          Admin Angin Lut Rawh
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-orange-100 p-4">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl p-10 rounded-2xl shadow-2xl transition-all duration-500">
        {view === 'welcome' && <WelcomeView />}
        {view === 'user_login' && <LoginForm role={UserRole.USER} />}
        {view === 'admin_login' && <LoginForm role={UserRole.ADMIN} />}
      </div>
    </div>
  );
};

export default AuthPage;
