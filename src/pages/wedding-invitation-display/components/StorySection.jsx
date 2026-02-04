import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StorySection = ({ section }) => {
  const renderContent = () => {
    switch (section?.type) {
      case 'hero':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <Image
              src={section?.backgroundImage}
              alt={section?.backgroundImageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="relative z-10 text-center px-4 md:px-8 lg:px-12 max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                {section?.title}
              </h1>
              {section?.subtitle && (
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-caption">
                  {section?.subtitle}
                </p>
              )}
            </div>
          </div>
        );

      case 'photo':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 bg-background">
            <div className="w-full max-w-2xl lg:max-w-4xl">
              <Image
                src={section?.image}
                alt={section?.imageAlt}
                className="w-full h-auto rounded-lg shadow-romantic-lg"
              />
              {section?.caption && (
                <p className="mt-4 md:mt-6 text-center text-sm md:text-base lg:text-lg text-muted-foreground font-caption">
                  {section?.caption}
                </p>
              )}
            </div>
          </div>
        );

      case 'quote':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="max-w-3xl text-center">
              <Icon name="Quote" size={48} className="mx-auto mb-6 md:mb-8 text-primary opacity-50" />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground mb-6 md:mb-8">
                "{section?.quote}"
              </blockquote>
              {section?.author && (
                <cite className="text-base md:text-lg lg:text-xl text-muted-foreground font-caption not-italic">
                  — {section?.author}
                </cite>
              )}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="w-full h-full overflow-y-auto p-4 md:p-8 lg:p-12 bg-background">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground">
                {section?.title}
              </h2>
              <div className="space-y-6 md:space-y-8">
                {section?.events?.map((event, index) => (
                  <div key={index} className="flex gap-4 md:gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Icon name={event?.icon} size={24} color="white" />
                      </div>
                      {index < section?.events?.length - 1 && (
                        <div className="w-0.5 flex-1 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                        {event?.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground font-caption mb-2">
                        {event?.time}
                      </p>
                      <p className="text-sm md:text-base text-foreground">
                        {event?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black">
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                src={section?.videoUrl}
                title={section?.videoTitle}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="w-full h-full overflow-y-auto p-4 md:p-8 lg:p-12 bg-background">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-foreground">
                {section?.title}
              </h2>
              <div className="prose prose-lg max-w-none text-foreground">
                {section?.content?.split('\n')?.map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="w-full h-full overflow-y-auto p-4 md:p-8 lg:p-12 bg-background">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground">
                {section?.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {section?.images?.map((img, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-romantic">
                    <Image
                      src={img?.url}
                      alt={img?.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-romantic"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-background">
            <p className="text-muted-foreground">Content not available</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full min-h-screen">
      {renderContent()}
    </div>
  );
};

export default StorySection;