import React from 'react';
import { UserProfile } from '../types';

interface ProfileCardProps {
  profile: UserProfile;
  onViewProfile: (profile: UserProfile) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onViewProfile }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img
          src={profile.photoUrl}
          alt={profile.name}
          className={`w-full h-64 object-cover ${profile.isPhotoBlurred ? 'blur-md' : ''}`}
        />
        {profile.isPhotoBlurred && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white font-semibold">Thlalâk A Fiah Lo</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
          {profile.isVerified && (
             <span title="Profile Fiah Tawh" className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm-2.22 7.072a.75.75 0 00.025 1.06l4.25 4.5a.75.75 0 001.085-.025l6.25-6.5a.75.75 0 00-1.085-1.036l-5.69 5.952-3.72-3.963a.75.75 0 00-1.06.025z" clipRule="evenodd" />
                </svg>
             </span>
          )}
        </div>
        <p className="text-gray-600">{profile.age} kum, {profile.occupation}</p>
        <p className="text-gray-500 text-sm mt-1">{profile.location}</p>
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition-colors">Ngaihsakna Thawn</button>
          <button onClick={() => onViewProfile(profile)} className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">Profile En Rawh</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;