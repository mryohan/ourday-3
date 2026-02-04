import React, { useState, useEffect, useCallback } from 'react';
import Icon from '../AppIcon';

const StoryNavigationController = ({ 
  totalSections = 20, 
  currentSection = 0, 
  onSectionChange 
}) => {
  const [activeIndex, setActiveIndex] = useState(currentSection);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handlePrevious = useCallback(() => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      onSectionChange?.(newIndex);
    }
  }, [activeIndex, onSectionChange]);

  const handleNext = useCallback(() => {
    if (activeIndex < totalSections - 1) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      onSectionChange?.(newIndex);
    }
  }, [activeIndex, totalSections, onSectionChange]);

  const handleDotClick = useCallback((index) => {
    setActiveIndex(index);
    onSectionChange?.(index);
  }, [onSectionChange]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e?.targetTouches?.[0]?.clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e?.targetTouches?.[0]?.clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e?.key === 'ArrowLeft') {
        e?.preventDefault();
        handlePrevious();
      } else if (e?.key === 'ArrowRight') {
        e?.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext]);

  useEffect(() => {
    setActiveIndex(currentSection);
  }, [currentSection]);

  return (
    <div 
      className="fixed inset-0 z-1100 pointer-events-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button
        onClick={handlePrevious}
        disabled={activeIndex === 0}
        className={`
          absolute left-4 top-1/2 -translate-y-1/2 pointer-events-auto
          w-12 h-12 rounded-full bg-card shadow-romantic-md
          flex items-center justify-center
          transition-romantic hover-lift press-scale
          ${activeIndex === 0 
            ? 'opacity-30 cursor-not-allowed' :'opacity-80 hover:opacity-100'
          }
        `}
        aria-label="Previous section"
        aria-disabled={activeIndex === 0}
      >
        <Icon name="ChevronLeft" size={24} color="var(--color-foreground)" />
      </button>
      <button
        onClick={handleNext}
        disabled={activeIndex === totalSections - 1}
        className={`
          absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto
          w-12 h-12 rounded-full bg-card shadow-romantic-md
          flex items-center justify-center
          transition-romantic hover-lift press-scale
          ${activeIndex === totalSections - 1 
            ? 'opacity-30 cursor-not-allowed' :'opacity-80 hover:opacity-100'
          }
        `}
        aria-label="Next section"
        aria-disabled={activeIndex === totalSections - 1}
      >
        <Icon name="ChevronRight" size={24} color="var(--color-foreground)" />
      </button>
      <div 
        className="absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-auto"
        role="navigation"
        aria-label="Story progress"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-card rounded-full shadow-romantic-md">
          {Array.from({ length: totalSections })?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`
                w-2 h-2 rounded-full transition-romantic
                ${index === activeIndex 
                  ? 'bg-primary w-8' :'bg-muted-foreground hover:bg-foreground'
                }
              `}
              aria-label={`Go to section ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-4 right-4 pointer-events-auto">
        <div className="px-4 py-2 bg-card rounded-full shadow-romantic-md">
          <span className="font-caption text-sm font-medium text-foreground">
            {activeIndex + 1} / {totalSections}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryNavigationController;