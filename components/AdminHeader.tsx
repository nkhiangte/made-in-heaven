
import React from 'react';

interface AdminHeaderProps {
  onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
           </svg>
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <button
          onClick={onLogout}
          className="bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-700 transition-colors font-semibold"
        >
          Chhuak Rawh
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
