
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-6 bg-gray-900/50 shadow-lg backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 12l4.159 1.591A2.25 2.25 0 019.75 15.186v5.714c0 .581.469 1.05 1.05 1.05h2.4c.581 0 1.05-.469 1.05-1.05v-5.714a2.25 2.25 0 01.659-1.591L19 12l-4.159-1.591A2.25 2.25 0 0114.25 8.818V3.104c0-.581-.469-1.05-1.05-1.05h-2.4c-.581 0-1.05.469-1.05 1.05z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.002 9.002 0 004.536-1.196M12 3a9.002 9.002 0 00-4.536 1.196" />
          </svg>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Gemini Image Generator
          </h1>
        </div>
        <span className="text-xs text-purple-400 font-mono hidden md:block">Powered by Imagen-3</span>
      </div>
    </header>
  );
};
