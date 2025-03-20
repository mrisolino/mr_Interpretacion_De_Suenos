import React, { useState } from 'react';
import { Moon, Sun, Send, Loader2 } from 'lucide-react';

const API_KEY =  import.meta.env.VITE_APP_OPENROUTER_API_KEY;


function App() {
  const [dream, setDream] = useState('');
  const [interpretation, setInterpretation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dream.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const prompt = `Dime con mucha creatividad y sintetizado, que significado podría tener el sueño que te dare a continuación.\n Si el texto luego de la palabra "Sueño:" no corresponde a una descripción entendible y  referente a un sueño, no conteste nada mas que "Solo puedo interpretar Sueños". No respondas ninguna otra cosa.\n\n\nSueño:\n\n${dream}.`;

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      setInterpretation(data.choices[0].message.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al procesar la solicitud');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover blur-[8px] scale-110"
        style={{ zIndex: -1 }}
      >
        <source src="https://martinrisolino.com.ar/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better readability */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/70' : 'bg-gray-50/70'}`} style={{ zIndex: -1 }}></div>

      {/* Content */}
      <div className={`relative min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Intérpretedor de Sueños 💤</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800/80 text-yellow-400' : 'bg-white/80 text-gray-600'}`}
            >
              {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </div>

          <div className={`p-6 rounded-lg shadow-lg mb-8 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={dream}
                  onChange={(e) => setDream(e.target.value)}
                  placeholder="Describe tu sueño aquí..."
                  className={`w-full p-4 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700/90 border-gray-600 text-white' 
                      : 'bg-white/90 border-gray-300 text-gray-900'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm`}
                  rows={4}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !dream.trim()}
                  className={`absolute bottom-4 right-4 p-2 rounded-full ${
                    isLoading || !dream.trim()
                      ? 'bg-gray-400/80 cursor-not-allowed'
                      : 'bg-blue-500/80 hover:bg-blue-600/80'
                  } text-white backdrop-blur-sm`}
                >
                  {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </div>
            </form>
          </div>

          {isLoading ? (
            <div className={`p-6 rounded-lg shadow-lg mb-8 ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
              <div className="flex items-center justify-center space-x-3">
                <Loader2 size={24} className="animate-spin text-blue-500" />
                <p className="text-lg text-center">Interpretando tu sueño...</p>
              </div>
            </div>
          ) : (
            <>
              {error && (
                <div className="p-4 mb-8 rounded-lg bg-red-100/90 border border-red-400 text-red-700 backdrop-blur-sm">
                  {error}
                </div>
              )}
              
              {interpretation && (
                <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
                  <h2 className="text-xl font-semibold mb-4">Interpretación:</h2>
                  <p className="text-lg leading-relaxed whitespace-pre-wrap">{interpretation}</p>
                </div>
              )}
            </>
          )}
        </div>
        <div className="flex items-center justify-center space-x-3"><p>Martin Risolino - 2025</p></div>
      </div>
    </div>
  );
}

export default App;
