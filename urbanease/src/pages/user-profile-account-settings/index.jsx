import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProfileHeader from './components/ProfileHeader';
import TabNavigation from './components/TabNavigation';
import PersonalInfoTab from './components/PersonalInfoTab';
// Preferences moved to Settings page
import PaymentMethodsTab from './components/PaymentMethodsTab';
import SecurityTab from './components/SecurityTab';
import OrdersTab from './components/OrdersTab';
import RewardsTab from './components/RewardsTab';
import LogoutTab from './components/LogoutTab';

const UserProfileAccountSettings = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // Mock user data
  const [userData, setUserData] = useState({
    id: 1,
    name: "Satish Kumar",
    firstName: "Satish",
    lastName: "Kumar",
    email: "satish.kumar@example.com", 
    phone: "+91 (555) 123-4567",
    profileImage: new URL('../../../../images/Manish.webp', import.meta.url).href,
    memberSince: "January 2023",
    dateOfBirth: "1990-05-15",
    gender: "male",
    emailVerified: true,
    phoneVerified: true,
    identityVerified: false,
    totalBookings: 24,
    favoriteProviders: 8,
    loyaltyPoints: 1250,
    addresses: [
      {
        id: 1,
        type: 'home',
        label: 'Home',
        street: 'Satya Niketan Rd',
        city: 'Delhi',
        state: 'New Delhi',
        zipCode: '110001',
        isDefault: true
      },
      {
        id: 2,
        type: 'work',
        label: 'Office',
        street: '456 Rajiv Chowk',
        city: 'Delhi',
        state: 'New Delhi',
        zipCode: '110002',
        isDefault: false
      }
    ],
    emergencyContact: {
      name: "Rohit Kumar",
      relationship: "Spouse",
      phone: "+91 (555) 987-6543"
    },
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
      },
      privacy: {
        shareData: false,
        publicProfile: true,
        showActivity: true
      }
    },
    paymentMethods: [
      {
        id: 1,
        type: 'card',
        brand: 'visa',
        last4: '4242',
        expiryMonth: '12',
        expiryYear: '2025',
        holderName: 'Satish Kumar',  
        isDefault: true,
        billingAddress: {
          street: 'Satya Niketan Rd',
          city: 'Delhi',
          state: 'New Delhi',
          zipCode: '10001'
        }
      }
    ],
    twoFactorEnabled: false
  });

  const tabs = [
    {
      id: 'personal',
      label: 'Personal Info',
      description: 'Basic information',
      icon: 'User'
    },
    {
      id: 'orders',
      label: 'Orders',
      description: 'Bookings & history',
      icon: 'Receipt'
    },
    {
      id: 'rewards',
      label: 'Rewards',
      description: 'Membership & points',
      icon: 'Crown'
    },
    {
      id: 'payment',
      label: 'Payment Methods',
      description: 'Manage payments',
      icon: 'CreditCard'
    },
    {
      id: 'security',
      label: 'Security',
      description: 'Account security',
      icon: 'Shield'
    },
    {
      id: 'logout',
      label: 'Logout',
      description: 'Sign out',
      icon: 'LogOut'
    }
  ];

  const handleImageUpload = () => {
    // In real app, implement image upload functionality
    console.log('Image upload triggered');
  };

  const handleEditProfile = () => {
    setActiveTab('personal');
  };

  const handleSavePersonalInfo = (data) => {
    setUserData(prev => ({
      ...prev,
      ...data,
      name: `${data.firstName} ${data.lastName}`
    }));
  };

  const handleSavePreferences = (preferences) => {
    setUserData(prev => ({
      ...prev,
      preferences
    }));
  };

  const handleSavePaymentMethods = (paymentMethods) => {
    setUserData(prev => ({
      ...prev,
      paymentMethods
    }));
  };

  const handleSaveSecurity = (securityData) => {
    setUserData(prev => ({
      ...prev,
      ...securityData
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <PersonalInfoTab
            user={userData}
            onSave={handleSavePersonalInfo}
          />
        );
      
      case 'payment':
        return (
          <PaymentMethodsTab
            user={userData}
            onSave={handleSavePaymentMethods}
          />
        );
      case 'orders':
        return <OrdersTab user={userData} />;
      case 'rewards':
        return <RewardsTab user={userData} />;
      case 'security':
        return (
          <SecurityTab
            user={userData}
            onSave={handleSaveSecurity}
          />
        );
      case 'logout':
        return <LogoutTab user={userData} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Profile & Account Settings - UrbanEase</title>
        <meta name="description" content="Manage your profile, preferences, payment methods, and security settings on UrbanEase" />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Profile Header */}
          <ProfileHeader
            user={userData}
            onImageUpload={handleImageUpload}
            onEditProfile={handleEditProfile}
          />

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tab Navigation */}
            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabs={tabs}
            />

            {/* Main Content */}
            <div className="flex-1 lg:max-w-4xl">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileAccountSettings;
