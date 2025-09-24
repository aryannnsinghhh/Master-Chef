import React from "react";

function Header() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-8 md:p-12">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-6 left-12 w-6 h-6 bg-orange-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-4 right-16 w-3 h-3 bg-white rounded-full animate-bounce delay-500"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Chef Icon with Animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20 group-hover:scale-110 transition-all duration-300">
              <img
                className="w-16 h-16 md:w-20 md:h-20 filter drop-shadow-lg"
                src="chef-icon.svg"
                alt="AI Chef"
              />
            </div>
          </div>
          
          {/* Title with Modern Typography */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
              AI Chef
            </h1>
            <p className="text-orange-100 text-lg md:text-xl font-medium">
              Your Personal Recipe Assistant
            </p>
          </div>
        </div>
        
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
