import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AdminDashboardTabs from '../../components/ui/AdminDashboardTabs';
import UserManagementTab from './components/UserManagementTab';
import TemplateManagementTab from './components/TemplateManagementTab';
import ContentManagementTab from './components/ContentManagementTab';
import AnalyticsTab from './components/AnalyticsTab';

const AdminDashboard = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    const tabParam = searchParams?.get('tab');
    if (tabParam && ['users', 'templates', 'content', 'analytics']?.includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserManagementTab />;
      case 'templates':
        return <TemplateManagementTab />;
      case 'content':
        return <ContentManagementTab />;
      case 'analytics':
        return <AnalyticsTab />;
      default:
        return <UserManagementTab />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminDashboardTabs />
      <main className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;