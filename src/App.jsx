import { useState, useRef } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Main from "./components/Main";
import Generate from "./components/Generate";
import ApiResponse from "./components/ApiResponse";
import { getRecipe } from "./api";

function App() {
  const [ingredientArr, setIngredientArr] = useState([]);
  const [textresponse, setTextResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const responseRef = useRef(null);

  const handleOnClick = async () => {
    setLoading(true);
    try {
      const recipe = await getRecipe(ingredientArr);
      setTextResponse(recipe);
      setTimeout(() => {
        if (responseRef.current) {
          responseRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteIngredient = (index) => {
    setIngredientArr((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Modern Card Container */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
            <Header />
            
            <div className="p-8 lg:p-12">
              {/* Main Input Section */}
              <Main
                ingredientArr={ingredientArr}
                setIngredientArr={setIngredientArr}
              />

              {/* Ingredients List */}
              {ingredientArr.length !== 0 && (
                <div className="mt-8">
                  <Ingredients
                    ingredientArr={ingredientArr}
                    onDelete={handleDeleteIngredient}
                  />
                </div>
              )}

              {/* Generate Button */}
              {ingredientArr.length >= 3 && (
                <div className="mt-8 flex justify-center">
                  <Generate handleonclick={handleOnClick} loading={loading} />
                </div>
              )}
            </div>
          </div>

          {/* Response Section - Separate Card */}
          {textresponse && (
            <div ref={responseRef} className="mt-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
                <ApiResponse textresponse={textresponse} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
