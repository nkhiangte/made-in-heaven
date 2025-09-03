import React from 'react';
import { UserProfile } from '../types';

interface ProfileDetailViewProps {
  profile: UserProfile;
  goBack: () => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="text-xl font-semibold text-rose-800 border-b border-rose-200 pb-2 mb-4">{title}</h3>
    <div className="space-y-3 text-gray-700">
      {children}
    </div>
  </div>
);

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="grid grid-cols-3 gap-4">
    <span className="font-medium text-gray-500">{label}</span>
    <span className="col-span-2">{value}</span>
  </div>
);


const ProfileDetailView: React.FC<ProfileDetailViewProps> = ({ profile, goBack }) => {
  return (
    <div className="max-w-6xl mx-auto">
       <button onClick={goBack} className="mb-6 flex items-center text-rose-600 hover:text-rose-800 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Hma-en ah Kir Rawh
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative w-48 h-48 mx-auto">
                <img 
                    src={profile.photoUrl} 
                    alt={profile.name} 
                    className={`rounded-full w-48 h-48 object-cover border-4 border-rose-200 ${profile.isPhotoBlurred ? 'blur-lg' : ''}`}
                />
                {profile.isPhotoBlurred && (
                    <button className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white font-semibold">Thlalâk Dil Rawh</button>
                )}
            </div>
            <h2 className="text-3xl font-bold mt-4">{profile.name}</h2>
            <p className="text-gray-500">{profile.occupation}</p>
            {profile.isVerified && (
              <div className="mt-2 inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm-2.22 7.072a.75.75 0 00.025 1.06l4.25 4.5a.75.75 0 001.085-.025l6.25-6.5a.75.75 0 00-1.085-1.036l-5.69 5.952-3.72-3.963a.75.75 0 00-1.06.025z" clipRule="evenodd" /></svg>
                Profile Fiah Tawh
              </div>
            )}
             <div className="mt-6 flex flex-col space-y-3">
                <button className="w-full bg-rose-500 text-white py-3 px-4 rounded-lg hover:bg-rose-600 transition-colors text-lg font-semibold">Inzawmna Siam Rawh</button>
                <button className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors text-lg font-semibold">Dahthat</button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <DetailSection title="Ka Chanchin">
             <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
          </DetailSection>

          <DetailSection title="Thil Pawimawh Hmasate">
            <DetailItem label="Kum" value={`${profile.age} kum`} />
            <DetailItem label="Awmna Hmun" value={profile.location} />
            <DetailItem label="Sakhua" value={profile.religion} />
            <DetailItem label="Hnam" value={profile.caste} />
          </DetailSection>
          
          <DetailSection title="Zirna & Hnathawh">
            <DetailItem label="Zirna" value={profile.education} />
            <DetailItem label="Hnathawh" value={profile.occupation} />
            <DetailItem label="Kum khata sum lakluh" value={profile.income} />
          </DetailSection>

          <DetailSection title="Nunphung">
            <DetailItem label="Chaw" value={profile.lifestyle.diet} />
            <DetailItem label="Zu" value={profile.lifestyle.drinking} />
            <DetailItem label="Zuk leh hmuam" value={profile.lifestyle.smoking} />
          </DetailSection>

           <DetailSection title="Chhungkaw Chanchin">
             <p className="text-gray-600 leading-relaxed">{profile.familyDetails}</p>
          </DetailSection>

          <DetailSection title="Kawppui Duhzawng">
            <p className="text-gray-600 leading-relaxed">{profile.partnerPreferences}</p>
          </DetailSection>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailView;