
# 🎯 Item Showcase Application

A modern, responsive web application for managing and showcasing items with a beautiful user interface. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI** - Beautiful interface built with shadcn/ui components
- **📸 Image Management** - Support for multiple images per item with carousel view
- **💾 Local Storage** - Data persistence using browser localStorage
- **🔍 Item Search & Filter** - Easy browsing and filtering of items
- **📝 Add New Items** - Simple form to add new items to your collection
- **🎯 Item Details** - Detailed view with image carousel and item information
- **⚡ Fast Performance** - Built with Vite for optimal development and production builds

## 🚀 Live Demo

**GitHub Repository:** [Item Showcase App](https://github.com/ht986648/Item-showing-app.git)

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icons

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
item-showcase-app-amrr/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── ItemCard.tsx    # Item display card
│   │   ├── ItemDetailModal.tsx # Item detail popup
│   │   └── Navigation.tsx  # Navigation bar
│   ├── context/            # React Context for state management
│   │   └── ItemContext.tsx # Global item state management
│   ├── pages/              # Route components
│   │   ├── Index.tsx       # Landing page
│   │   ├── ViewItems.tsx   # Items listing page
│   │   ├── AddItem.tsx     # Add new item form
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main app component with routing
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ht986648/Item-showing-app.git
   cd item-showcase-app-amrr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Build for development
npm run build:dev
```

## 📱 Application Features

### 🏠 Home Page
- Welcome screen with application overview
- Quick navigation to view items or add new items
- Modern gradient background design

### 📋 View Items
- Grid layout displaying all items
- Responsive design (1-4 columns based on screen size)
- Click on any item to view detailed information
- Item count display

### ➕ Add New Item
- Form with validation for adding new items
- Support for multiple image URLs
- Item type selection dropdown
- Real-time form validation
- Success notifications

### 🔍 Item Details Modal
- Image carousel with navigation
- Detailed item information
- Enquiry functionality
- Responsive design

## 🎨 UI Components

The application uses a comprehensive set of shadcn/ui components:

- **Cards** - For item display
- **Buttons** - Various button styles and sizes
- **Forms** - Input fields, textareas, selects
- **Modals** - For detailed item views
- **Navigation** - Consistent navigation bar
- **Badges** - For item type labels
- **Toast** - Success and error notifications

## 💾 Data Management

- **Local Storage** - Items are persisted in browser localStorage
- **React Context** - Global state management for items
- **CRUD Operations** - Create, Read operations implemented
- **Data Validation** - Form validation and error handling

## 🔧 Configuration

### Vite Configuration
- Development server on port 8080
- Path aliases for clean imports (`@/` points to `src/`)
- React SWC for fast compilation
- Development-only component tagging

### Tailwind Configuration
- Custom color scheme
- Responsive breakpoints
- Animation utilities
- Typography plugin

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel** - Zero-config deployment
- **Netlify** - Drag and drop deployment
- **GitHub Pages** - Static site hosting
- **Any static hosting service**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Himanshu Tiwari**
- GitHub: [@ht986648](https://github.com/ht986648)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for fast build tooling
- [React](https://reactjs.org/) for the amazing framework

---

⭐ **Star this repository if you found it helpful!**
