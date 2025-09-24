import React from "react";

function Generate({ handleonclick, loading }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Call to Action Text */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-800">Ready to Cook?</h3>
        <p className="text-gray-600">Let's create something delicious with your ingredients!</p>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleonclick}
        disabled={loading}
        className={`
          relative overflow-hidden group
          px-12 py-4 text-xl font-bold rounded-full
          transform transition-all duration-300
          shadow-2xl hover:shadow-3xl
          focus:outline-none focus:ring-4 focus:ring-orange-200
          ${loading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed scale-95"
            : "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white hover:scale-105 active:scale-95"
          }
        `}
      >
        {/* Background Animation */}
        {!loading && (
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
        
        {/* Button Content */}
        <div className="relative z-10 flex items-center gap-3">
          {loading ? (
            <>
              {/* Loading Spinner */}
              <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Creating Magic...</span>
            </>
          ) : (
            <>
              {/* Chef Hat Icon */}
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15v-3h4v3H8z"/>
              </svg>
              <span className="group-hover:tracking-wider transition-all duration-300">
                Generate Recipe
              </span>
              {/* Arrow Icon */}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </div>

        {/* Ripple Effect */}
        {!loading && (
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 group-active:animate-ping"></div>
          </div>
        )}
      </button>

      {/* Decorative Elements */}
      {!loading && (
        <div className="flex gap-2 opacity-60">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
        </div>
      )}
    </div>
  );
}

export default Generate;
