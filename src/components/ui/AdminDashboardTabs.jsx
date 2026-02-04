import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const AdminDashboardTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('users');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'users', label: 'Users', icon: 'Users', path: '/admin-dashboard?tab=users' },
    { id: 'templates', label: 'Templates', icon: 'Layout', path: '/admin-dashboard?tab=templates' },
    { id: 'content', label: 'Content', icon: 'FileText', path: '/admin-dashboard?tab=content' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3', path: '/admin-dashboard?tab=analytics' },
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams?.get('tab');
    if (tabParam && tabs?.some(tab => tab?.id === tabParam)) {
      setActiveTab(tabParam);
    } else {
      setActiveTab('users');
    }
  }, [location?.search]);

  const handleTabClick = (tab) => {
    setActiveTab(tab?.id);
    navigate(tab?.path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="hidden md:block sticky top-0 z-100 bg-card border-b border-border shadow-romantic-sm">
        <div className="max-w-screen-xl mx-auto px-6">
          <nav role="navigation" aria-label="Admin dashboard navigation">
            <ul className="flex items-center gap-1">
              {tabs?.map((tab) => (
                <li key={tab?.id}>
                  <button
                    onClick={() => handleTabClick(tab)}
                    className={`
                      flex items-center gap-2 px-6 py-4
                      font-caption font-medium text-sm
                      transition-romantic border-b-2
                      ${activeTab === tab?.id
                        ? 'text-primary border-primary' :'text-muted-foreground border-transparent hover:text-foreground hover:border-muted'
                      }
                    `}
                    aria-current={activeTab === tab?.id ? 'page' : undefined}
                  >
                    <Icon 
                      name={tab?.icon} 
                      size={20} 
                      strokeWidth={activeTab === tab?.id ? 2.5 : 2}
                    />
                    <span>{tab?.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="md:hidden sticky top-0 z-100 bg-card border-b border-border shadow-romantic-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Icon 
              name={tabs?.find(t => t?.id === activeTab)?.icon || 'Users'} 
              size={20} 
              color="var(--color-primary)"
            />
            <span className="font-caption font-medium text-foreground">
              {tabs?.find(t => t?.id === activeTab)?.label || 'Users'}
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-romantic press-scale"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon 
              name={isMobileMenuOpen ? 'X' : 'Menu'} 
              size={24} 
              color="var(--color-foreground)"
            />
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav 
            className="border-t border-border bg-background"
            role="navigation"
            aria-label="Admin dashboard mobile navigation"
          >
            <ul className="py-2">
              {tabs?.map((tab) => (
                <li key={tab?.id}>
                  <button
                    onClick={() => handleTabClick(tab)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3
                      font-caption font-medium text-sm
                      transition-romantic
                      ${activeTab === tab?.id
                        ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }
                    `}
                    aria-current={activeTab === tab?.id ? 'page' : undefined}
                  >
                    <Icon 
                      name={tab?.icon} 
                      size={20} 
                      strokeWidth={activeTab === tab?.id ? 2.5 : 2}
                    />
                    <span>{tab?.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default AdminDashboardTabs;