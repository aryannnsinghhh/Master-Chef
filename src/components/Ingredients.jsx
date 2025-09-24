import React from "react";

function Ingredients({ ingredientArr, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
          <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Your Ingredients
        </h2>
        <p className="text-gray-600">
          {ingredientArr.length} ingredient{ingredientArr.length !== 1 ? 's' : ''} ready to cook with
        </p>
      </div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ingredientArr.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="group relative bg-gradient-to-br from-white to-gray-50 
                       rounded-2xl shadow-md hover:shadow-xl
                       border border-gray-100 hover:border-orange-200
                       p-4 transition-all duration-300 transform hover:-translate-y-1
                       overflow-hidden min-h-[4rem] flex flex-col justify-center"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-start justify-between gap-3 min-h-[3rem]">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Ingredient Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 
                               rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Ingredient Name - with proper text wrapping */}
                <div className="flex-1 min-w-0">
                  <span className="font-semibold text-gray-800 text-lg capitalize block
                                   break-words hyphens-auto leading-tight"
                        style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                    {item}
                  </span>
                </div>
              </div>

              {/* Delete Button - Always visible and accessible */}
              <button
                onClick={() => handleDelete(index)}
                className="w-9 h-9 bg-red-500 hover:bg-red-600 
                         text-white rounded-full
                         flex items-center justify-center flex-shrink-0
                         transition-all duration-200 transform hover:scale-110
                         shadow-md hover:shadow-lg
                         opacity-70 hover:opacity-100
                         group-hover:opacity-100"
                aria-label={`Remove ${item}`}
                title={`Remove ${item}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Success Message for 3+ ingredients */}
      {ingredientArr.length >= 3 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-green-800 font-semibold">Perfect! 🎉</p>
              <p className="text-green-700">You have enough ingredients to generate a recipe!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ingredients;
