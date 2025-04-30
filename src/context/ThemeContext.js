import React, { createContext, useState, useEffect, useContext } from 'react';

// Create theme context
export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Initialize with null to prevent flash of wrong theme
  const [darkMode, setDarkMode] = useState(null);

  // Check localStorage first, then system preference on initial load
  useEffect(() => {
    // First check if there's a saved preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme !== null) {
      // Use the saved preference
      setDarkMode(savedTheme === 'dark');
    } else {
      // Fall back to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      // Store the initial system preference
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }

    // Listen for changes in system preference, but only apply if no manual choice exists
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (localStorage.getItem('theme') === null) {
        setDarkMode(e.matches);
        localStorage.setItem('theme', e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Set the correct theme on the html element to prevent flash
  useEffect(() => {
    if (darkMode !== null) {
      if (darkMode) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    // Save the user's preference in localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Return null while theme is still being determined to prevent flash
  if (darkMode === null) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);