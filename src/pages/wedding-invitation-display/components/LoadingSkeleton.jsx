import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-4">
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-primary/20 rounded-full animate-pulse" />
        <div className="space-y-3">
          <div className="h-8 md:h-10 w-64 bg-muted rounded-lg mx-auto animate-pulse" />
          <div className="h-6 md:h-8 w-48 bg-muted rounded-lg mx-auto animate-pulse" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;