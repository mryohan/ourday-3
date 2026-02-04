import React from 'react';
import Icon from '../../../components/AppIcon';

const GuestCountTracker = ({ totalResponses, attendingCeremony, attendingReception, notAttending }) => {
  const stats = [
    {
      id: 1,
      label: 'Total Responses',
      value: totalResponses,
      icon: 'Users',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 2,
      label: 'Attending Ceremony',
      value: attendingCeremony,
      icon: 'Church',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      id: 3,
      label: 'Attending Reception',
      value: attendingReception,
      icon: 'PartyPopper',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      id: 4,
      label: 'Unable to Attend',
      value: notAttending,
      icon: 'XCircle',
      color: 'text-muted-foreground',
      bgColor: 'bg-muted'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-4 md:p-6 lg:p-8 shadow-romantic-md border border-border">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="BarChart3" size={20} color="var(--color-primary)" />
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
          Guest Count Overview
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {stats?.map((stat) => (
          <div
            key={stat?.id}
            className="bg-background rounded-lg p-4 md:p-5 border border-border hover-lift transition-romantic"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${stat?.bgColor} flex items-center justify-center`}>
                <Icon name={stat?.icon} size={20} className={stat?.color} />
              </div>
              <span className={`text-2xl md:text-3xl lg:text-4xl font-bold ${stat?.color}`}>
                {stat?.value}
              </span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              {stat?.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-8 p-4 md:p-5 bg-background rounded-lg border border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm md:text-base font-medium text-foreground">
            Response Rate
          </span>
          <span className="text-sm md:text-base font-bold text-primary">
            {totalResponses > 0 ? Math.round((attendingCeremony / totalResponses) * 100) : 0}%
          </span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-romantic"
            style={{
              width: `${totalResponses > 0 ? (attendingCeremony / totalResponses) * 100 : 0}%`
            }}
          />
        </div>
        <p className="text-xs md:text-sm text-muted-foreground mt-2">
          {attendingCeremony} out of {totalResponses} guests confirmed attendance
        </p>
      </div>
    </div>
  );
};

export default GuestCountTracker;