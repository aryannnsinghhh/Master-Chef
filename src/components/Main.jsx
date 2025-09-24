import React, { useRef } from "react";

function Main({ ingredientArr, setIngredientArr }) {
  const ingredientVal = useRef("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const inputValue = ingredientVal.current.value.trim();
    if (inputValue === "") {
      alert("Please enter a valid ingredient.");
      return;
    }
    const newIngredientArr = [...ingredientArr, inputValue];
    setIngredientArr(newIngredientArr);
    ingredientVal.current.value = "";
  };

  return (
    <div className="space-y-8">
      {/* Welcome Message */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          What's in your kitchen?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Tell me what ingredients you have, and I'll create a delicious recipe just for you!
        </p>
      </div>

      {/* Input Form */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <div className="relative group">
            {/* Input Field */}
            <div className="relative">
              <input
                type="text"
                ref={ingredientVal}
                className="w-full h-16 px-6 text-lg bg-white border-2 border-gray-200 rounded-2xl 
                         focus:border-orange-400 focus:ring-4 focus:ring-orange-100 
                         transition-all duration-300 outline-none
                         placeholder-gray-400 shadow-sm
                         group-hover:border-gray-300"
                placeholder="e.g. tomatoes, basil, mozzarella..."
              />
              
              {/* Input Icon */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            
            {/* Add Button */}
            <button 
              type="submit"
              className="w-full mt-4 h-14 bg-gradient-to-r from-orange-500 to-red-500 
                       text-white font-semibold text-lg rounded-2xl
                       hover:from-orange-600 hover:to-red-600 
                       active:scale-[0.98] transform transition-all duration-200
                       shadow-lg hover:shadow-xl
                       flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Ingredient
            </button>
          </div>
        </form>

        {/* Progress Indicator */}
        {ingredientArr.length < 3 && (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-amber-800 font-medium">
                  Almost there! Add {3 - ingredientArr.length} more ingredient{3 - ingredientArr.length !== 1 ? 's' : ''} to get started
                </p>
                <div className="mt-2 bg-amber-200 rounded-full h-2">
                  <div 
                    className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(ingredientArr.length / 3) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
