# 🎬 MovieCart

MovieCart is a React-based web app that displays popular movies using a public API. Users can browse movies on the homepage and add their favorite movies to a dedicated favorites page. Favorite selections are stored using the browser's local storage to ensure persistence across sessions.


## 🚀 Features

- 🔍 **Search and browse popular movies**
- ❤️ **Add and view favorite movies**
- 💾 **Favorites saved using browser localStorage**
- ⚛️ **Built using React, React Router, and Hooks**
- 📱 **Responsive layout for all device sizes**


## 🛠️ Tech Stack

- **React** (with functional components and hooks)
- **React Router DOM**
- **JavaScript (ES6+)**
- **CSS3**

## 🧠 How It Works

- On load, the **Home Page** fetches popular movies using the `getPopularMovies()` API function.
- Users can **search movies** via an input bar.
- Each movie is displayed as a **card** with relevant information.
- Users can click a button to **add/remove** movies from favorites.
- The **Favorites Page** reads the stored data from `localStorage` and displays the list of favorite movies.

## 🧰 Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/moviecart.git
cd moviecart
npm install
npm run dev
