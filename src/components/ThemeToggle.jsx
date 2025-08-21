'use client'
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  // Load theme from localStorage or system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    }
  }, []);

  // Apply theme class to <html>
  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  if (!theme) return null; // prevent hydration mismatch error

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 
                 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {theme === 'dark' ? (
        // Sun icon (Light mode button)
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 3v1.5m0 15V21m8.485-8.485h-1.5m-15 
                   0H3m15.364-6.364l-1.06 1.06m-12.728 
                   0l-1.06-1.06m12.728 12.728l-1.06-1.06m-12.728 
                   0l-1.06 1.06M12 7.5A4.5 4.5 0 1 1 7.5 
                   12 4.5 4.5 0 0 1 12 7.5z" />
        </svg>
      ) : (
        // Moon icon (Dark mode button)
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0 1 
                   12 21.75c-5.385 0-9.75-4.365-9.75-9.75 
                   0-4.136 2.664-7.64 6.438-9.093a.75.75 
                   0 0 1 .908.37.75.75 0 0 1-.082.789A7.501 
                   7.501 0 0 0 12 19.5a7.48 7.48 0 0 0 
                   6.184-3.393.75.75 0 0 1 .788-.282.75.75 
                   0 0 1 .38.907z" />
        </svg>
      )}
    </button>
  );
}
