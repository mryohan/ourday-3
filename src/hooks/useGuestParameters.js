import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const useGuestParameters = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [guestData, setGuestData] = useState({
    guestId: null,
    guestName: null,
    invitationType: null,
    coupleNames: null,
    weddingDate: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    try {
      const guestId = searchParams?.get('guestId');
      const guestName = searchParams?.get('name');
      const invitationType = searchParams?.get('type') || 'standard';
      const coupleNames = searchParams?.get('couple');
      const weddingDate = searchParams?.get('date');

      if (!guestId && location?.pathname === '/wedding-invitation-display') {
        setGuestData(prev => ({
          ...prev,
          isLoading: false,
          error: 'Missing guest identification',
        }));
        return;
      }

      setGuestData({
        guestId: guestId || null,
        guestName: guestName ? decodeURIComponent(guestName) : null,
        invitationType,
        coupleNames: coupleNames ? decodeURIComponent(coupleNames) : null,
        weddingDate: weddingDate || null,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setGuestData(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to process guest parameters',
      }));
    }
  }, [searchParams, location?.pathname]);

  const updateGuestData = (updates) => {
    setGuestData(prev => ({
      ...prev,
      ...updates,
    }));
  };

  return {
    ...guestData,
    updateGuestData,
  };
};

export default useGuestParameters;