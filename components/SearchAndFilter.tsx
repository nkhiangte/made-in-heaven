import React from 'react';

interface SearchAndFilterProps {
  onFilter: () => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ onFilter }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Kum Bithliah</label>
          <div className="flex items-center space-x-2 mt-1">
            <input type="number" defaultValue={25} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500" />
            <span>atan</span>
            <input type="number" defaultValue={35} className="w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500" />
          </div>
        </div>
        <div>
          <label htmlFor="religion" className="block text-sm font-medium text-gray-700">Sakhua</label>
          <select id="religion" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md">
            <option>Kristian</option>
            <option>Hindu</option>
            <option>Muslim</option>
            <option>Sikh</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Awmna Hmun</label>
          <input type="text" placeholder="e.g., Aizawl" id="location" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <div>
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Hnathawh</label>
          <input type="text" placeholder="e.g., Software Engineer" id="profession" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <button
          onClick={onFilter}
          className="w-full bg-rose-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-rose-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
        >
          Zawnna
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;