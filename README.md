## 🧪 Rick & Morty Multiverse Explorer
A modern and responsive web application built with Next.js 16, React 19, TypeScript and TailwindCSS, inspired by the Rick & Morty universe.
The app allows users to explore episodes, locations and characters from the series through an immersive sci-fi interface with a modern UX/UI approach.
The project was developed as a technical challenge using the official Rick & Morty API.

## 🌍 To navigate directly to the deployed project:

<a href="https://rick-and-morty-app-r6gu.vercel.app/" target="_blank">Rick & Morty App</a>



## 🛠️ Tech Stack

### Core

- **Next.js 16.2.6** — React framework with App Router
- **React 19.2.4** — UI library
- **TypeScript** — Static typing and safer development
- **TailwindCSS** — Utility-first CSS framework
- **ESLint** — Code linting and consistency

### UI & UX

- **Swiper 12.1.4** — Character carousel
- **Heroicons React 2.2.0** — Modern SVG icons
- **Sonner 2.0.7** — Toast notifications and loaders

### State Management

- **React Context API (`useContext`)**
- Global UI state management

### UX Features

- Inline validation
- Error highlighting
- Success/error notifications using Sonner
- Loading states
- Modern glassmorphism UI
  
### 🎨 Design & UX/UI
The project uses a custom visual identity inspired by:
Sci-fi interfaces
Neon cyberpunk aesthetics
Rick & Morty portals and dimensions
UI Highlights

### 📂 Project Structure
```text
src/
│
├── app/
│   ├── episode/[id]/
│   └── globals.css
│
├── components/
│   ├── Header/
│   ├── Tabs/
│   ├── Searchbar/
│   ├── EpisodeList/
│   ├── EpisodeDetail/
│   ├── CharacterCarousel/
│   ├── Pagination/
│   ├── Form/
│   └── LocationList/
│
├── context/
│   └── AppContext.tsx
│
├── services/
│   ├── episodes.ts
│   ├── characters.ts
│   ├── locations.ts
│   └── form.ts
│
├── types/
│
└── assets/
```

## 🌐 API Used
Official Rick & Morty API:
rickandmortyapi.com⁠�

### ⚡ Getting Started
1. Clone the repository
2. Navigate into the project
   
```bash
cd rick-and-morty-app
```

## Install Dependencies

Install project dependencies:

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:3000
```

## Build the Project

To generate the production build:

```bash
npm run build
```

## Start Production Mode

```bash
npm run start
```

## Run ESLint

```bash
npm run lint
```

## 📱 Responsive Design

The application has been fully optimized for:

✅ Mobile devices

✅ Tablets

✅ Desktop screens

### 📌 Conclusion

This project was developed as a modern and scalable application focused on delivering an intuitive user experience while consuming data from the Rick and Morty API. Throughout the development process, the main objectives were successfully achieved: implementing a clean architecture, creating reusable components, managing global state efficiently, and building a responsive and visually appealing interface using modern technologies such as Next.js, React, TypeScript, and TailwindCSS.

The application not only provides dynamic episode, character, and location exploration, but also demonstrates best practices in frontend development, including modular structure, form validation, loading states, error handling, and maintainable code organization. Additionally, the project served as valuable hands-on experience for improving performance optimization, UI/UX design, and scalable React application development.
