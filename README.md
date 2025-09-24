# Chef App AI

Transform your leftover ingredients into amazing recipes with the power of AI! Simply tell the app what you have in your kitchen, and watch as it creates personalized, delicious recipes just for you.

## What Makes This Special?

Ever stared at your fridge wondering "What can I cook with these random ingredients?" This app solves that problem! It's like having a professional chef in your pocket who never runs out of creative ideas.

### Key Features

- **AI-Powered Recipes**: Uses advanced Hugging Face models to generate creative, practical recipes
- **Smart Ingredient Management**: Easy-to-use interface for adding and managing your available ingredients
- **Beautiful Design**: Modern glass-morphism UI that's both stunning and user-friendly
- **Save & Share**: Export your favorite recipes and share them with friends
- **Real-time Magic**: Watch recipes generate in real-time with smooth loading animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices

## Built With

- **React 18** - Latest React with modern hooks and best practices
- **Vite** - Lightning-fast development and build tool
- **Tailwind CSS** - Utility-first CSS for rapid, responsive design
- **Hugging Face AI** - Cutting-edge AI models for recipe generation
- **React Markdown** - Beautiful recipe formatting and display

## Quick Start Guide

### Prerequisites
Make sure you have these installed on your computer:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

### Step 1: Get the Code
```bash
# Clone this repository to your computer
git clone https://github.com/YOUR_USERNAME/Chef-App-AI.git

# Navigate into the project folder
cd Chef-App-AI
```

### Step 2: Install Dependencies
```bash
# Install all the required packages
npm install
```

### Step 3: Set Up Your AI Key
1. Go to [Hugging Face](https://huggingface.co/) and create a free account
2. Get your API token from your [settings page](https://huggingface.co/settings/tokens)
3. Create a `.env` file in the project root directory
4. Add your API key to the file:
```env
VITE_HF_ACCESS_TOKEN=your_hugging_face_token_here
```

### Step 4: Start Cooking!
```bash
# Start the development server
npm run dev
```

Open your browser and go to `http://localhost:5173` - Your AI chef is ready to serve!

## How to Use

1. **Add Ingredients**: Start typing ingredients you have available (like "tomatoes", "cheese", "pasta")
2. **Get Minimum 3**: Add at least 3 ingredients for the best recipe suggestions
3. **Generate Magic**: Click the "Generate Recipe" button and watch the AI work
4. **Save & Enjoy**: Love what you see? Save or share your new recipe!

## Project Structure
```
Chef-App-AI/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx      # App header with branding
│   │   ├── Main.jsx        # Ingredient input form
│   │   ├── Ingredients.jsx # Ingredient management
│   │   ├── Generate.jsx    # Recipe generation button
│   │   └── ApiResponse.jsx # Recipe display
│   ├── App.jsx             # Main app component
│   └── main.jsx           # App entry point
├── public/                 # Static assets
└── .env                   # Your API keys (don't share this!)
```

## 🔧 Available Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check code for potential issues |

## Contributing

Found a bug or have a cool idea? Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Common Issues

**"Module not found" errors:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**API not working:**
- Check your `.env` file exists and has the correct token
- Verify your Hugging Face token is valid
- Make sure the `.env` file is in the root directory (not in src/)

**Build fails:**
```bash
# Clear Vite cache
npm run build -- --force
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

## Questions?

Feel free to open an issue if you have any questions or run into problems. Happy cooking!

---

**Made with ❤️**