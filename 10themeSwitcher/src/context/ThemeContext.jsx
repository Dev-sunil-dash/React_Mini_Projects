// import { createContext, useContext } from 'react'

// export const ThemeContext = createContext({
//     themeMode: 'light',
//     darkTheme: () => { },
//     lightTheme: () => { }
// })

// export const ThemeProvider = ThemeContext.Provider;



// function useTheme() {
//     return useContext(ThemeContext)
// }

// export default useTheme;

import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component for the theme
export const ThemeProvider = ({ children }) => {
    // State to hold the current theme
    const [theme, setTheme] = useState('light');

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);
