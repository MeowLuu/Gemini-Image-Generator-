
import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-purple-500/30 hover:border-purple-600 transform hover:scale-105">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover aspect-square"
        loading="lazy"
      />
      <div className="p-3 bg-gray-800/80">
         <a 
            href={src} 
            download={alt.replace(/\s+/g, '_').toLowerCase() + ".jpeg"}
            className="block w-full text-center text-sm text-purple-300 hover:text-purple-100 font-medium py-2 px-3 rounded-md bg-purple-600/30 hover:bg-purple-600/50 transition-colors duration-200"
        >
            Download
        </a>
      </div>
    </div>
  );
};
