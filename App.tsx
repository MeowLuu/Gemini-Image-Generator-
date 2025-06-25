
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PromptForm, PromptFormSubmitData } from './components/PromptForm';
import { ImageCard } from './components/ImageCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { generateImageFromPrompt } from './services/geminiService';

const App: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImages = useCallback(async ({ prompt, numImages }: PromptFormSubmitData) => {
    if (!prompt.trim()) {
      setError("Prompt cannot be empty.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setImages([]);

    try {
      const generatedImages = await generateImageFromPrompt(prompt, numImages);
      setImages(generatedImages);
    } catch (err: any) {
      console.error("Error generating images:", err);
      setError(err.message || "Failed to generate images. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <PromptForm onSubmit={handleGenerateImages} isLoading={isLoading} />

        {isLoading && (
          <div className="mt-12 text-center">
            <LoadingSpinner />
            <p className="mt-4 text-lg text-purple-300">Generating your masterpiece...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 p-4 bg-red-700/50 border border-red-500 text-red-200 rounded-lg w-full max-w-2xl text-center">
            <h3 className="font-semibold text-lg mb-2">An Error Occurred</h3>
            <p>{error}</p>
          </div>
        )}

        {!isLoading && !error && images.length === 0 && (
          <div className="mt-12 text-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xl">Enter a prompt above to generate images.</p>
            <p className="text-sm">Let your imagination run wild!</p>
          </div>
        )}

        {images.length > 0 && (
          <div className="mt-12 w-full">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Generated Images</h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${images.length > 2 ? 'lg:grid-cols-2 xl:grid-cols-2' : 'lg:grid-cols-1'} gap-6 max-w-5xl mx-auto`}>
              {images.map((imageSrc, index) => (
                <ImageCard key={index} src={imageSrc} alt={`Generated Image ${index + 1}`} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
