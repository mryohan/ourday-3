import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SuccessConfirmation = ({ guestName, attendingCeremony, attendingReception, onClose }) => {
  return (
    <div className="fixed inset-0 z-1200 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-xl shadow-romantic-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-48 md:h-56 overflow-hidden rounded-t-xl">
          <Image
            src="https://images.unsplash.com/photo-1592787610600-1d2e0c03e951"
            alt="Elegant wedding celebration with champagne glasses, pink roses, white candles, and romantic table setting with soft lighting"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-success flex items-center justify-center animate-bounce">
              <Icon name="Check" size={32} color="#FFFFFF" strokeWidth={3} />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Thank You, {guestName}!
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Your RSVP has been successfully submitted
          </p>

          <div className="bg-background rounded-lg p-4 md:p-5 mb-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm md:text-base text-foreground">Wedding Ceremony</span>
              <div className="flex items-center gap-2">
                {attendingCeremony ?
                <>
                    <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                    <span className="text-sm md:text-base font-medium text-success">Attending</span>
                  </> :

                <>
                    <Icon name="XCircle" size={20} color="var(--color-muted-foreground)" />
                    <span className="text-sm md:text-base font-medium text-muted-foreground">Not Attending</span>
                  </>
                }
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm md:text-base text-foreground">Reception</span>
              <div className="flex items-center gap-2">
                {attendingReception ?
                <>
                    <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                    <span className="text-sm md:text-base font-medium text-success">Attending</span>
                  </> :

                <>
                    <Icon name="XCircle" size={20} color="var(--color-muted-foreground)" />
                    <span className="text-sm md:text-base font-medium text-muted-foreground">Not Attending</span>
                  </>
                }
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-start gap-3">
                <Icon name="Mail" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground text-left">
                  A confirmation email has been sent to your registered email address with all the event details.
                </p>
              </div>
            </div>

            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-start gap-3">
                <Icon name="Calendar" size={20} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground text-left">
                  Save the date: Saturday, June 14, 2026. We can't wait to celebrate with you!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <Button
              variant="default"
              size="lg"
              fullWidth
              onClick={onClose}
              iconName="ArrowLeft"
              iconPosition="left">

              Return to Invitation
            </Button>
          </div>
        </div>
      </div>
    </div>);

};

export default SuccessConfirmation;