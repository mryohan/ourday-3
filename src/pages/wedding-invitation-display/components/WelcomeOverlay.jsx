import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WelcomeOverlay = ({ guestName, coupleNames, onDismiss }) => {
  return (
    <div className="fixed inset-0 z-1200 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-romantic-2xl max-w-md w-full p-6 md:p-8 text-center">
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon name="Heart" size={32} color="var(--color-primary)" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Welcome{guestName ? `, ${guestName}` : ''}!
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-6 font-caption">
          You're invited to celebrate the wedding of
        </p>
        
        <h3 className="text-3xl md:text-4xl font-serif text-primary mb-8">
          {coupleNames || 'Sarah & Michael'}
        </h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base text-foreground">
            <Icon name="Calendar" size={20} color="var(--color-primary)" />
            <span className="font-caption">June 15, 2026</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm md:text-base text-foreground">
            <Icon name="MapPin" size={20} color="var(--color-primary)" />
            <span className="font-caption">The Grand Ballroom, New York</span>
          </div>
        </div>
        
        <p className="text-sm md:text-base text-muted-foreground mb-8 font-caption">
          Swipe or click the arrows to explore our story
        </p>
        
        <Button
          variant="default"
          size="lg"
          fullWidth
          onClick={onDismiss}
          iconName="ArrowRight"
          iconPosition="right"
        >
          View Invitation
        </Button>
      </div>
    </div>
  );
};

export default WelcomeOverlay;