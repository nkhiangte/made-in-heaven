
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProfileDetailView from './components/ProfileDetailView';
import BioGenerator from './components/BioGenerator';
import CompatibilityChecker from './components/CompatibilityChecker';
import ChatView from './components/ChatView';
import { Page, UserProfile } from './types';
import { MOCK_PROFILES } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(MOCK_PROFILES[0]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const viewProfile = (profile: UserProfile) => {
    setSelectedProfile(profile);
    setCurrentPage(Page.ProfileDetail);
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.Dashboard:
        return <Dashboard viewProfile={viewProfile} />;
      case Page.ProfileDetail:
        return selectedProfile ? <ProfileDetailView profile={selectedProfile} goBack={() => navigateTo(Page.Dashboard)} /> : <Dashboard viewProfile={viewProfile} />;
      case Page.BioGenerator:
        return <BioGenerator />;
      case Page.CompatibilityChecker:
        return <CompatibilityChecker />;
      case Page.Chat:
        return <ChatView />;
      default:
        return <Dashboard viewProfile={viewProfile} />;
    }
  };

  return (
    <div className="min-h-screen bg-rose-50 text-gray-800">
      <Header navigateTo={navigateTo} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
