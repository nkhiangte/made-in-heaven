
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProfileDetailView from './components/ProfileDetailView';
import BioGenerator from './components/BioGenerator';
import CompatibilityChecker from './components/CompatibilityChecker';
import ChatView from './components/ChatView';
import KundliMatcher from './components/KundliMatcher';
import { Page, UserProfile, UserRole } from './types';
import { MOCK_PROFILES } from './constants';
import AuthPage from './components/AuthPage';
import AdminDashboard from './components/AdminDashboard';
import AdminHeader from './components/AdminHeader';
import VerificationPage from './components/VerificationPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(MOCK_PROFILES[0]);
  const [loggedInAs, setLoggedInAs] = useState<UserRole | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const viewProfile = (profile: UserProfile) => {
    setSelectedProfile(profile);
    setCurrentPage(Page.ProfileDetail);
  };
  
  const handleLogin = (role: UserRole) => {
    setLoggedInAs(role);
    if (role === UserRole.USER) {
      // Create a mutable copy for the session, starting as unverified
      setCurrentUser({ ...MOCK_PROFILES[0], isVerified: false });
    }
  };
  
  const handleLogout = () => {
    setLoggedInAs(null);
    setCurrentUser(null);
    setCurrentPage(Page.Dashboard);
  };
  
  const handleVerificationSuccess = () => {
    setCurrentUser(prev => prev ? { ...prev, isVerified: true } : null);
    navigateTo(Page.Dashboard);
  };

  const renderUserContent = () => {
    switch (currentPage) {
      case Page.Dashboard:
        return <Dashboard viewProfile={viewProfile} />;
      case Page.ProfileDetail:
        return selectedProfile ? <ProfileDetailView profile={selectedProfile} goBack={() => navigateTo(Page.Dashboard)} /> : <Dashboard viewProfile={viewProfile} />;
      case Page.BioGenerator:
        return <BioGenerator />;
      case Page.CompatibilityChecker:
        return <CompatibilityChecker />;
      case Page.KundliMatcher:
        return <KundliMatcher />;
      case Page.Chat:
        return <ChatView />;
      case Page.Verification:
        return <VerificationPage onVerificationSuccess={handleVerificationSuccess} />;
      default:
        return <Dashboard viewProfile={viewProfile} />;
    }
  };
  
  if (!loggedInAs) {
    return <AuthPage onLogin={handleLogin} />;
  }
  
  if (loggedInAs === UserRole.ADMIN) {
    return (
      <div className="min-h-screen bg-gray-100">
        <AdminHeader onLogout={handleLogout} />
        <main className="container mx-auto px-4 py-8">
            <AdminDashboard />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800">
      <Header 
        navigateTo={navigateTo} 
        onLogout={handleLogout}
        isUserVerified={currentUser?.isVerified || false}
      />
      <main className="container mx-auto px-4 py-8">
        {renderUserContent()}
      </main>
    </div>
  );
};

export default App;
