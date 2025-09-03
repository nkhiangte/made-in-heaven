
import React from 'react';
import { MOCK_PROFILES } from '../constants';

const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ID</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Age</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Location</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Occupation</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Verified</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {MOCK_PROFILES.map((profile, index) => (
              <tr key={profile.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="text-left py-3 px-4">{profile.id}</td>
                <td className="text-left py-3 px-4 font-medium">{profile.name}</td>
                <td className="text-left py-3 px-4">{profile.age}</td>
                <td className="text-left py-3 px-4">{profile.location}</td>
                <td className="text-left py-3 px-4">{profile.occupation}</td>
                <td className="text-left py-3 px-4">
                  {profile.isVerified ? (
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Yes</span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
