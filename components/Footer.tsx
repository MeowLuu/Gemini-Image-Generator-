
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-900/30 text-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AI Image Creations. All rights reserved.
      </p>
      <p className="text-xs text-gray-500 mt-1">
        Generated images are for demonstration purposes.
      </p>
    </footer>
  );
};
