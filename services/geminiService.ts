
import { GoogleGenAI } from "@google/genai";

// Ensure API_KEY is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
  // This error will be caught by the App component and displayed to the user.
  // In a real production app, you might have more sophisticated handling or logging.
  throw new Error("API_KEY environment variable is not set. Please configure it to use the Gemini API.");
}

const ai = new GoogleGenAI({ apiKey });

export const generateImageFromPrompt = async (prompt: string, numberOfImages: number): Promise<string[]> => {
  try {
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: prompt,
      config: { 
        numberOfImages: numberOfImages, 
        outputMimeType: 'image/jpeg' // Or 'image/png'
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error("No images were generated. The API might have returned an empty response.");
    }
    
    return response.generatedImages.map(generatedImage => {
      const base64ImageBytes: string = generatedImage.image.imageBytes;
      // It's good practice to ensure imageBytes is a string, although the type suggests it should be.
      if (typeof base64ImageBytes !== 'string') {
        console.error('Received non-string imageBytes:', base64ImageBytes);
        throw new Error('Invalid image data received from API.');
      }
      return `data:image/jpeg;base64,${base64ImageBytes}`;
    });

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    // Try to provide a more specific error message if available
    if (error.message) {
      // Check for common API key related issues (though the initial check should catch undefined key)
      if (error.message.toLowerCase().includes('api key not valid')) {
        throw new Error('The provided API Key is not valid. Please check your .env configuration.');
      }
      if (error.message.toLowerCase().includes('quota')) {
        throw new Error('API quota exceeded. Please check your Google AI Studio dashboard.');
      }
      throw new Error(`Failed to generate images: ${error.message}`);
    }
    throw new Error('An unknown error occurred while generating images.');
  }
};
