import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EventDetailsCard = ({ coupleNames, weddingDate }) => {
  const eventDetails = [
  {
    id: 1,
    title: 'Wedding Ceremony',
    date: 'Saturday, June 14, 2026',
    time: '3:00 PM',
    venue: 'St. Mary\'s Cathedral',
    address: '123 Cathedral Avenue, San Francisco, CA 94102',
    icon: 'Church',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_117fe55d0-1768919539589.png",
    imageAlt: 'Beautiful white church interior with elegant wooden pews, stained glass windows casting colorful light, and ornate altar decorated with white flowers'
  },
  {
    id: 2,
    title: 'Reception',
    date: 'Saturday, June 14, 2026',
    time: '6:00 PM - 11:00 PM',
    venue: 'Grand Ballroom at The Fairmont',
    address: '950 Mason Street, San Francisco, CA 94108',
    icon: 'PartyPopper',
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    imageAlt: 'Luxurious ballroom with crystal chandeliers, round tables with white linens and pink floral centerpieces, elegant gold chairs, and romantic ambient lighting'
  }];


  return (
    <div className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-romantic-md border border-border">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-2">
          {coupleNames || 'Sarah & Michael'}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          {weddingDate || 'June 14, 2026'}
        </p>
      </div>
      <div className="space-y-4 md:space-y-6">
        {eventDetails?.map((event) =>
        <div
          key={event?.id}
          className="bg-background rounded-lg overflow-hidden border border-border hover-lift transition-romantic">

            <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden">
              <Image
              src={event?.image}
              alt={event?.imageAlt}
              className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon name={event?.icon} size={20} color="#FFFFFF" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {event?.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="Calendar" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm md:text-base font-medium text-foreground">
                    {event?.date}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {event?.time}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm md:text-base font-medium text-foreground">
                    {event?.venue}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {event?.address}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event?.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm md:text-base text-primary hover:text-primary/80 transition-romantic">

                  <Icon name="Navigation" size={16} />
                  <span className="font-medium">Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 md:mt-8 p-4 md:p-5 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-sm md:text-base font-medium text-foreground">
              Important Information
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Please arrive 15 minutes before the ceremony begins</li>
              <li>• Cocktail attire requested</li>
              <li>• Parking is available at both venues</li>
              <li>• The reception includes dinner and dancing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>);

};

export default EventDetailsCard;