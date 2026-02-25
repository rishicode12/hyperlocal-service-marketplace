import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import AnalyticsDashboard from './components/AnalyticsDashboard';

const ProviderDashboardBookingManagement = () => {
  

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Provider Dashboard - UrbanEase</title>
        <meta name="description" content="Manage your service business with comprehensive booking management, customer communication, and performance analytics." />
      </Helmet>

      <Header />

      <div className="pt-16">
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
            <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        <AnalyticsDashboard />
        </div>

        <div className="lg:hidden h-20"></div>
      </div>
    </div>
  );
};

export default ProviderDashboardBookingManagement;
