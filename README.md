# Dart From Zero to Hero 🎯

A modern, interactive, and comprehensive web-based workshop designed to guide beginners through the fundamentals of the Dart programming language. This project features a polished dark-themed UI, interactive lessons, code examples, and knowledge quizzes to ensure an engaging learning experience.

## ✨ Features

- **Interactive Learning Path**: Structured lessons covering core Dart concepts (Variables, Operators, Conditions, Loops, etc.).
- **Dynamic Content**: All site content is managed via a central data store (`js/siteData.js`), allowing for easy updates and zero-load-time rendering.
- **Modern UI/UX**:
  - **Dark Mode**: sleek dark background with vibrant accent colors.
  - **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices using Tailwind CSS.
  - **Glassmorphism**: Stylish headers and sidebars with backdrop blur effects.
- **Code Experience**:
  - **Syntax Highlighting**: Custom implementation to highlight keywords, strings, and comments.
  - **Copy to Clipboard**: One-click copy functionality with success toast notifications.
  - **Mac-style Window UI**: Code blocks presented in elegant "terminal" windows.
- **Interactive Quiz**:
  - **Instant Feedback**: Real-time visual validation (Green/Red) for answers.
  - **Score Tracking**: Summary panel showing final score upon submission.
  - **Answer Reveal**: Automatically highlights the correct answer if a wrong one is chosen.

## 🛠️ Technology Stack

- **HTML5**: Semantic and accessible structure.
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent styling.
- **Vanilla JavaScript (ES6+)**: Core logic for routing, data rendering, and DOM manipulation (no heavy frontend frameworks required).
- **Google Fonts**: Inter & Outfit for typography; Material Symbols for iconography.

## 📂 Project Structure

```
Test Web Project/
├── index.html          # Landing Page
├── lessons.html        # Interactive Lessons Page
├── examples.html       # Solved Code Examples
├── quiz.html           # Interactive Quiz
├── assets/
│   ├── css/
│   │   └── style.css   # Global styles & Variables
│   └── images/         # SVG icons and assets
└── js/
    ├── siteData.js     # Central content store (JSON-like structure)
    ├── app.js          # Shared utility functions (optional)
    ├── landing.js      # Logic for Landing Page rendering
    ├── lessons.js      # Logic for Lessons Page & Sidebar
    ├── examples.js     # Logic for Examples Grid
    └── quiz.js         # Logic for Quiz interaction and Scoring
```

## 🚀 Getting Started

No build process or installation is required! This is a static web site.

1.  **Clone or Download** the repository.
2.  **Open** the project folder.
3.  **Double-click** `index.html` to launch the website in your default browser.

That's it!

## 🎨 Design System

The project uses a defined color palette accessible via CSS variables:

- **Primary**: `#0ea5e9` (Sky Blue)
- **Background Dark**: `#060b0e` (Deep Blue/Black)
- **Background Light**: `#0f1b23` (Dark Slate)
- **Accent Orange**: `#f97316` (Dart Orange)
- **Fonts**: `Inter` (Body), `Outfit` (Headings)

## 👤 Author

**John Safwat**  
Community Lead & Flutter Developer  
_Passionate about helping everyone learn Dart from zero to hero._

---

_© 2024 Collaborative Dart Workshop_
