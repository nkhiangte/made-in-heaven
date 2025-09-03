import React, { useState } from 'react';
import { generateBio } from '../services/geminiService';

const BioGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [generatedBio, setGeneratedBio] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!keywords.trim()) {
      alert('Khawngaihin i chanchin tlem azawng chhu lut rawh.');
      return;
    }
    setIsLoading(true);
    setGeneratedBio('');
    try {
      const bio = await generateBio(keywords);
      setGeneratedBio(bio);
    } catch (error) {
      console.error(error);
      setGeneratedBio('A pawi hle mai. Khawngaihin a hnuah i rawn bei leh dawn nia.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedBio);
    alert('Bio copy fel a ni!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-rose-800">AI Bio Puitu</h2>
        <p className="text-gray-500 mt-2">I profile-a bio mawi leh mi hip thei tak siam turin kan AI-in tanpui ang che.</p>
      </div>

      <div className="space-y-4">
        <label htmlFor="keywords" className="block text-lg font-medium text-gray-700">
          Tawngkam tlemtein i chanchin sawi rawh
        </label>
        <textarea
          id="keywords"
          rows={4}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500 text-base p-4"
          placeholder="e.g., Software engineer, tlang lawn nuam ti, lehkhabu chhiar, chhungkaw ngaina, kawppui rinawm zawng..."
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full flex justify-center bg-rose-500 text-white py-3 px-4 rounded-lg hover:bg-rose-600 transition-colors text-lg font-semibold disabled:bg-rose-300"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Siam mek...
            </>
          ) : 'Bio Siam Rawh'}
        </button>
      </div>

      {generatedBio && (
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Bio Siam Chhuah:</h3>
          <div className="bg-rose-50 p-6 rounded-lg whitespace-pre-wrap text-gray-800">
            {generatedBio}
          </div>
          <button
            onClick={handleCopy}
            className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            Bio Copy Rawh
          </button>
        </div>
      )}
    </div>
  );
};

export default BioGenerator;