import React, { useState } from 'react';
import { generateCompatibilityReport } from '../services/geminiService';
import { MOCK_PROFILES } from '../constants';
import ReactMarkdown from 'react-markdown';

const CompatibilityChecker: React.FC = () => {
  const [desc1, setDesc1] = useState(MOCK_PROFILES[0].bio);
  const [desc2, setDesc2] = useState(MOCK_PROFILES[1].bio);
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!desc1.trim() || !desc2.trim()) {
      alert('Khawngaihin mi pahnihte chanchin dah lut ve ve rawh.');
      return;
    }
    setIsLoading(true);
    setReport('');
    try {
      const result = await generateCompatibilityReport(desc1, desc2);
      setReport(result);
    } catch (error) {
      console.error(error);
      setReport('Report siam laiin harsatna a awm. Khawngaihin a hnuah i rawn bei leh dawn nia.');
    } finally {
      setIsLoading(false);
    }
  };

  const ProfileInput: React.FC<{
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    profile: typeof MOCK_PROFILES[0];
  }> = ({ title, value, onChange, profile }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <img src={profile.photoUrl} alt={profile.name} className="h-12 w-12 rounded-full mr-4"/>
        <h3 className="text-xl font-semibold text-rose-800">{title}</h3>
      </div>
      <textarea
        rows={8}
        value={value}
        onChange={onChange}
        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500 text-base p-4"
        placeholder={`Bio emaw ${profile.name} chanchin emaw chhu lut rawh...`}
      />
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-rose-800">AI Inremna Enna</h2>
        <p className="text-gray-500 mt-2">In nungchang leh thil pawimawh inngaihah in inmil dan hre rawh.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileInput title={`Mi 1 (${MOCK_PROFILES[0].name})`} value={desc1} onChange={(e) => setDesc1(e.target.value)} profile={MOCK_PROFILES[0]} />
        <ProfileInput title={`Mi 2 (${MOCK_PROFILES[1].name})`} value={desc2} onChange={(e) => setDesc2(e.target.value)} profile={MOCK_PROFILES[1]} />
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-rose-500 text-white py-3 px-8 rounded-lg hover:bg-rose-600 transition-colors text-lg font-semibold disabled:bg-rose-300"
        >
          {isLoading ? 'Zirchiang mek...' : 'Inremna Zirchiang Rawh'}
        </button>
      </div>

       {isLoading && (
         <div className="mt-8 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
            <p className="text-gray-600 mt-4">Kan AI-in in inmil dan a zirchiang mek... rei lo te a awh ang.</p>
        </div>
      )}

      {report && (
        <div className="mt-10 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-center text-rose-800 mb-6">Inremna Report</h3>
          <div className="prose prose-rose max-w-none">
             <ReactMarkdown>{report}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompatibilityChecker;