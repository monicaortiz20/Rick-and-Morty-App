🧪 Rick & Morty Multiverse Explorer
A modern and responsive web application built with Next.js 16, React 19, TypeScript and TailwindCSS, inspired by the Rick & Morty universe.
The app allows users to explore episodes, locations and characters from the series through an immersive sci-fi interface with a modern UX/UI approach.
The project was developed as a technical challenge using the official Rick & Morty API.

🛠️ Technologies Used

Core
Next.js 16.2.6 — React framework with App Router
React 19.2.4 — UI library
TypeScript — Static typing and safer development
TailwindCSS — Utility-first CSS framework
ESLint — Code linting and consistency

UI & UX
Swiper 12.1.4 — Character carousel
Heroicons React 2.2.0 — Modern SVG icons
Sonner 2.0.7 — Toast notifications and loaders
State Management
React Context API (useContext)
Global UI state management

UX Features
✅ Inline validation
✅ Error highlighting
✅ Success/error notifications using Sonner
✅ Loading states
✅ Modern glassmorphism UI

🎨 Design & UX/UI
The project uses a custom visual identity inspired by:
Sci-fi interfaces
Neon cyberpunk aesthetics
Rick & Morty portals and dimensions
UI Highlights

📂 Project Structure

src/
│
├── app/
│ ├── episode/[id]/
│ └── globals.css
│
├── components/
│ ├── Header/
│ ├── Tabs/
│ ├── Searchbar/
│ ├── EpisodeList/
│ ├── EpisodeDetail/
│ ├── CharacterCarousel/
│ ├── Pagination/
│ ├── Form/
│ └── LocationList/
│
├── context/
│ └── AppContext.tsx
│
├── services/
│ ├── episodes.ts
│ ├── characters.ts
│ ├── locations.ts
│ └── form.ts
│
├── types/
│
└── assets/

🌐 API Used
Official Rick & Morty API:
rickandmortyapi.com⁠�

⚡ Getting Started

1. Clone the repository
2. Navigate into the project
   cd rick-and-morty-app

📦 Install Dependencies
Install project dependencies
npm install

▶️ Run the Development Server
npm run dev

The app will be available at:
http://localhost:3000

🏗️ Build the Project
To generate the production build:
npm run build

🚀 Start Production Mode
npm run start

🧹 Run ESLint
npm run lint

📱 Responsive Design
The application has been fully optimized for:
✅ Mobile devices
✅ Tablets
✅ Desktop screens
