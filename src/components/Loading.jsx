import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-cyber-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative w-32 h-32 mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-cyber-green/30 rounded-full animate-spin border-t-cyber-green"></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-4 border-4 border-cyber-orange/30 rounded-full animate-spin border-t-cyber-orange" style={{ animationDirection: 'reverse' }}></div>
          
          {/* Inner Ring */}
          <div className="absolute inset-8 border-4 border-cyber-green/30 rounded-full animate-spin border-t-cyber-green"></div>
          
          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-tech text-cyber-green animate-pulse">
              C4I
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <p className="text-cyber-green font-tech text-xl animate-pulse">
            Code4Impact
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-cyber-orange font-tech text-sm mt-4">
            Initializing Learning Environment
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-shimmer"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-orange to-transparent animate-shimmer" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 