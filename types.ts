
export interface UserProfile {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  photoUrl: string;
  isPhotoBlurred: boolean;
  isVerified: boolean;
  religion: string;
  caste: string;
  location: string;
  education: string;
  occupation: string;
  income: string;
  familyDetails: string;
  lifestyle: {
    diet: string;
    drinking: string;
    smoking: string;
  };
  bio: string;
  partnerPreferences: string;
}

export enum Page {
  Dashboard = 'DASHBOARD',
  ProfileDetail = 'PROFILE_DETAIL',
  Chat = 'CHAT',
  BioGenerator = 'BIO_GENERATOR',
  CompatibilityChecker = 'COMPATIBILITY_CHECKER',
  KundliMatcher = 'KUNDLI_MATCHER'
}

// FIX: Add and export KundliDetails interface to resolve import error in KundliMatcher.tsx.
export interface KundliDetails {
  name: string;
  dob: string;
  tob: string;
  pob: string;
}
