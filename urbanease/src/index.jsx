import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import { LocationProvider } from "./contexts/LocationContext";

// Initialize theme from localStorage before app renders
const savedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark');
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <LocationProvider>
    <App />
  </LocationProvider>
);
