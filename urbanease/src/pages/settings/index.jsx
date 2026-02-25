import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PreferencesTab from '../user-profile-account-settings/components/PreferencesTab';

const Settings = () => {
  const [userData, setUserData] = useState({
    preferences: {
      serviceCategories: ['cleaning', 'plumbing', 'electrical'],
      notifications: {
        push: true,
        email: true,
        sms: false,
        marketing: false
      },
      language: 'en',
      accessibility: {
        highContrast: false,
        largeText: false,
        screenReader: false
      }
    }
  });

  const handleSavePreferences = (preferences) => {
    setUserData(prev => ({
      ...prev,
      preferences
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Settings - UrbanEase</title>
        <meta name="description" content="Manage your application and account settings." />
      </Helmet>

      <Header />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-foreground mb-6">Settings</h1>
          <PreferencesTab user={userData} onSave={handleSavePreferences} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
