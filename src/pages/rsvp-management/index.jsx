import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useGuestParameters from '../../hooks/useGuestParameters';
import BottomFloatingMenu from '../../components/ui/BottomFloatingMenu';
import RSVPForm from './components/RSVPForm';
import EventDetailsCard from './components/EventDetailsCard';
import GuestCountTracker from './components/GuestCountTracker';
import SuccessConfirmation from './components/SuccessConfirmation';
import Icon from '../../components/AppIcon';

const RSVPManagement = () => {
  const navigate = useNavigate();
  const guestData = useGuestParameters();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const [guestStats, setGuestStats] = useState({
    totalResponses: 87,
    attendingCeremony: 72,
    attendingReception: 68,
    notAttending: 15
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRSVPSubmit = async (formData) => {
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setGuestStats(prev => ({
      totalResponses: prev?.totalResponses + 1,
      attendingCeremony: formData?.attendingCeremony ? prev?.attendingCeremony + formData?.numberOfGuests : prev?.attendingCeremony,
      attendingReception: formData?.attendingReception ? prev?.attendingReception + formData?.numberOfGuests : prev?.attendingReception,
      notAttending: (!formData?.attendingCeremony && !formData?.attendingReception) ? prev?.notAttending + formData?.numberOfGuests : prev?.notAttending
    }));

    setSubmittedData(formData);
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    navigate(`/wedding-invitation-display?guestId=${guestData?.guestId}&name=${encodeURIComponent(guestData?.guestName)}&type=${guestData?.invitationType}`);
  };

  if (guestData?.isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-base md:text-lg text-muted-foreground">Loading RSVP form...</p>
        </div>
      </div>
    );
  }

  if (guestData?.error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card rounded-xl p-6 md:p-8 shadow-romantic-md border border-border text-center">
          <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center mx-auto mb-4">
            <Icon name="AlertCircle" size={32} color="var(--color-error)" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            Invalid Invitation Link
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            {guestData?.error}. Please check your invitation link or contact the couple.
          </p>
          <button
            onClick={() => navigate('/wedding-invitation-display')}
            className="text-primary hover:text-primary/80 font-medium transition-romantic"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>RSVP - {guestData?.coupleNames || 'Wedding Invitation'}</title>
        <meta name="description" content="Confirm your attendance for our special day. Please RSVP with your meal preferences and guest information." />
      </Helmet>
      <div className="min-h-screen bg-background pb-24">
        <header className="bg-card border-b border-border shadow-romantic-sm sticky top-0 z-50">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate(`/wedding-invitation-display?guestId=${guestData?.guestId}&name=${encodeURIComponent(guestData?.guestName)}&type=${guestData?.invitationType}`)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-romantic press-scale"
                aria-label="Back to invitation"
              >
                <Icon name="ArrowLeft" size={20} />
                <span className="text-sm md:text-base font-medium">Back</span>
              </button>
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
                RSVP
              </h1>
              <div className="w-16" />
            </div>
          </div>
        </header>

        <main className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
          <div className="mb-6 md:mb-8 lg:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 md:mb-4">
              We Hope You Can Join Us
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Please confirm your attendance by filling out the form below. We look forward to celebrating this special day with you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <RSVPForm
                guestData={guestData}
                onSubmit={handleRSVPSubmit}
                isSubmitting={isSubmitting}
              />
            </div>

            <div className="space-y-6 md:space-y-8">
              <EventDetailsCard
                coupleNames={guestData?.coupleNames}
                weddingDate={guestData?.weddingDate}
              />

              <GuestCountTracker
                totalResponses={guestStats?.totalResponses}
                attendingCeremony={guestStats?.attendingCeremony}
                attendingReception={guestStats?.attendingReception}
                notAttending={guestStats?.notAttending}
              />
            </div>
          </div>
        </main>

        <BottomFloatingMenu />

        {showSuccess && submittedData && (
          <SuccessConfirmation
            guestName={submittedData?.guestName}
            attendingCeremony={submittedData?.attendingCeremony}
            attendingReception={submittedData?.attendingReception}
            onClose={handleCloseSuccess}
          />
        )}
      </div>
    </>
  );
};

export default RSVPManagement;