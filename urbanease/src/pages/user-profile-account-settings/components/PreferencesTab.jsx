import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const PreferencesTab = ({ user, onSave }) => {
  const [preferences, setPreferences] = useState({
    serviceCategories: user.preferences?.serviceCategories || [],
    notifications: user.preferences?.notifications || {
      push: true,
      email: true,
      sms: false,
      marketing: false
    },
    language: user.preferences?.language || 'en',
    accessibility: {
      darkMode: user.preferences?.accessibility?.darkMode || false
    },
    privacy: user.preferences?.privacy || {
      shareData: false,
      publicProfile: false,
      showActivity: true
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const serviceCategories = [
    { id: 'cleaning', name: 'House Cleaning', icon: 'Sparkles' },
    { id: 'plumbing', name: 'Plumbing', icon: 'Wrench' },
    { id: 'electrical', name: 'Electrical', icon: 'Zap' },
    { id: 'handyman', name: 'Handyman', icon: 'Hammer' },
    { id: 'beauty', name: 'Beauty & Wellness', icon: 'Scissors' },
    { id: 'tutoring', name: 'Tutoring', icon: 'BookOpen' },
    { id: 'fitness', name: 'Fitness Training', icon: 'Dumbbell' },
    { id: 'gardening', name: 'Gardening', icon: 'Flower' }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' }
  ];

  const handleServiceCategoryToggle = (categoryId) => {
    setPreferences(prev => ({
      ...prev,
      serviceCategories: prev.serviceCategories.includes(categoryId)
        ? prev.serviceCategories.filter(id => id !== categoryId)
        : [...prev.serviceCategories, categoryId]
    }));
  };

  const handleNotificationChange = (type, value) => {
    setPreferences(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [type]: value }
    }));
  };

  const handleAccessibilityChange = (type, value) => {
    const next = {
      ...preferences,
      accessibility: { ...preferences.accessibility, [type]: value }
    };
    setPreferences(next);
    if (type === 'darkMode') {
      if (value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
    onSave(next);
  };

  const handlePrivacyChange = (type, value) => {
    setPreferences(prev => ({
      ...prev,
      privacy: { ...prev.privacy, [type]: value }
    }));
  };

  const handleSave = () => {
    onSave(preferences);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Preferences</h2>
          <p className="text-sm text-muted-foreground">Customize your experience and notification settings</p>
        </div>
        <Button
          variant={isEditing ? "default" : "outline"}
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          iconName={isEditing ? "Save" : "Settings"}
          iconPosition="left"
        >
          {isEditing ? 'Save Changes' : 'Edit Preferences'}
        </Button>
      </div>

      {/* Service Categories */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Service Interests</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Select services you're interested in to receive personalized recommendations
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => isEditing && handleServiceCategoryToggle(category.id)}
              className={`p-4 border rounded-lg transition-all duration-200 cursor-pointer ${
                preferences.serviceCategories.includes(category.id)
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              } ${!isEditing ? 'cursor-default' : ''}`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className={`p-2 rounded-lg ${
                  preferences.serviceCategories.includes(category.id)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={category.icon} size={20} />
                </div>
                <span className="text-sm font-medium text-foreground">{category.name}</span>
                {preferences.serviceCategories.includes(category.id) && (
                  <Icon name="Check" size={16} className="text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Notification Settings</h3>
        
        <div className="space-y-4">
          <Checkbox
            label="Push Notifications"
            description="Receive notifications on your device"
            checked={preferences.notifications.push}
            onChange={(e) => handleNotificationChange('push', e.target.checked)}
            disabled={!isEditing}
          />
          
          <Checkbox
            label="Email Notifications"
            description="Get updates via email"
            checked={preferences.notifications.email}
            onChange={(e) => handleNotificationChange('email', e.target.checked)}
            disabled={!isEditing}
          />
          
          <Checkbox
            label="SMS Notifications"
            description="Receive text messages for important updates"
            checked={preferences.notifications.sms}
            onChange={(e) => handleNotificationChange('sms', e.target.checked)}
            disabled={!isEditing}
          />
          
          <Checkbox
            label="Marketing Communications"
            description="Receive promotional offers and updates"
            checked={preferences.notifications.marketing}
            onChange={(e) => handleNotificationChange('marketing', e.target.checked)}
            disabled={!isEditing}
          />
        </div>
      </div>

      

      {/* Accessibility */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Accessibility</h3>
        
        <div className="space-y-4">
          <Checkbox
            label="Dark Mode"
            description="Enable dark theme across the app"
            checked={preferences.accessibility.darkMode}
            onChange={(e) => handleAccessibilityChange('darkMode', e.target.checked)}
          />
        </div>
      </div>

      
    </div>
  );
};

export default PreferencesTab;
