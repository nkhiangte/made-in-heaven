import React, { useState } from 'react';
import { MOCK_PROFILES } from '../constants';
import { UserProfile } from '../types';
import ProfileCard from './ProfileCard';
import SearchAndFilter from './SearchAndFilter';

interface DashboardProps {
  viewProfile: (profile: UserProfile) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ viewProfile }) => {
  const [profiles, setProfiles] = useState<UserProfile[]>(MOCK_PROFILES);

  // This is a placeholder for actual filtering logic
  const handleFilter = () => {
    // In a real app, this would filter profiles based on criteria
    console.log("Filtering profiles...");
  };

  return (
    <div className="space-y-8">
      <SearchAndFilter onFilter={handleFilter} />
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">I Tana Profile-te</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} onViewProfile={() => viewProfile(profile)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;