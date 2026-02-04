import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const BottomFloatingMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'Home', path: '/wedding-invitation-display' },
    { id: 'rsvp', label: 'RSVP', icon: 'Calendar', path: '/rsvp-management' },
    { id: 'schedule', label: 'Schedule', icon: 'Clock', path: '/wedding-invitation-display#schedule' },
    { id: 'gallery', label: 'Gallery', icon: 'Image', path: '/wedding-invitation-display#gallery' },
    { id: 'info', label: 'Info', icon: 'Info', path: '/wedding-invitation-display#info' },
  ];

  useEffect(() => {
    const currentPath = location?.pathname;
    const currentHash = location?.hash?.replace('#', '');
    
    if (currentPath === '/rsvp-management') {
      setActiveSection('rsvp');
    } else if (currentHash) {
      setActiveSection(currentHash);
    } else {
      setActiveSection('home');
    }
  }, [location]);

  const handleNavigation = (item) => {
    setActiveSection(item?.id);
    
    if (item?.path?.includes('#')) {
      const [path, hash] = item?.path?.split('#');
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      navigate(item?.path);
    }
  };

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-1000 bg-card shadow-romantic-lg border-t border-border"
      role="navigation"
      aria-label="Guest navigation menu"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex items-center justify-around h-20">
          {menuItems?.map((item) => (
            <li key={item?.id} className="flex-1">
              <button
                onClick={() => handleNavigation(item)}
                className={`
                  w-full flex flex-col items-center justify-center gap-1 py-2 px-3
                  transition-romantic hover-lift press-scale
                  ${activeSection === item?.id 
                    ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                  }
                `}
                aria-label={item?.label}
                aria-current={activeSection === item?.id ? 'page' : undefined}
              >
                <Icon 
                  name={item?.icon} 
                  size={24} 
                  strokeWidth={activeSection === item?.id ? 2.5 : 2}
                />
                <span className="font-caption text-xs font-medium">
                  {item?.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BottomFloatingMenu;