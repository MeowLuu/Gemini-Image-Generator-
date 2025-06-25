
import React, { useState } from 'react';

export interface PromptFormSubmitData {
  prompt: string;
  numImages: number;
}

interface PromptFormProps {
  onSubmit: (data: PromptFormSubmitData) => void;
  isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState<string>('');
  const [numImages, setNumImages] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSubmit({ prompt, numImages });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl p-6 md:p-8 bg-gray-800/70 shadow-2xl rounded-xl backdrop-blur-sm border border-gray-700">
      <div className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-purple-300 mb-1">
            Enter your creative prompt
          </label>
          <textarea
            id="prompt"
            name="prompt"
            rows={4}
            className="block w-full bg-gray-700/50 border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-100 placeholder-gray-400 p-3 transition-colors duration-200"
            placeholder="e.g., A futuristic cityscape at sunset with flying cars, photorealistic"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="numImages" className="block text-sm font-medium text-purple-300 mb-1">
            Number of images
          </label>
          <select
            id="numImages"
            name="numImages"
            className="block w-full bg-gray-700/50 border-gray-600 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-gray-100 p-3 transition-colors duration-200"
            value={numImages}
            onChange={(e) => setNumImages(parseInt(e.target.value, 10))}
            disabled={isLoading}
          >
            <option value={1}>1 Image</option>
            <option value={2}>2 Images</option>
            <option value={3}>3 Images</option>
            <option value={4}>4 Images</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            '✨ Generate Images ✨'
          )}
        </button>
      </div>
    </form>
  );
};
