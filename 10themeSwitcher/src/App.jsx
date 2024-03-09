
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex flex-wrap min-h-screen items-center ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <h1 className="text-red-600 text-3xl font-bold underline text-center w-full">
        Theme Switcher
      </h1>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto flex justify-center mb-4'>
          <button
            className={`px-4 py-2 ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-black'} rounded`}
            onClick={toggleTheme}
          >
            {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
          </button>
        </div>
        <div className='w-full max-w-sm mx-auto'>
          <div className={`shadow-md ${theme === 'light' ? 'text-gray-800 bg-white' : 'text-white bg-gray-800'} rounded-lg p-6`}>
            <h2 className="text-lg font-bold mb-2">Themed Card</h2>
            <p>This card has different styles based on the theme.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
