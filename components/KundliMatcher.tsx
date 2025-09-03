import React, { useState } from 'react';
import { generateKundliMatch } from '../services/geminiService';
import { KundliDetails } from '../types';
import ReactMarkdown from 'react-markdown';


const initialDetails: KundliDetails = { name: '', dob: '', tob: '', pob: '' };

const KundliMatcher: React.FC = () => {
  const [details1, setDetails1] = useState<KundliDetails>({ ...initialDetails, name: 'Lalnunpuii' });
  const [details2, setDetails2] = useState<KundliDetails>({ ...initialDetails, name: 'Rohlupuia' });
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    // Basic validation
    if (!details1.name || !details1.dob || !details1.tob || !details1.pob || !details2.name || !details2.dob || !details2.tob || !details2.pob) {
      alert('Khawngaihin mi pahnihte chanchin kimchangin dah lut ve ve rawh.');
      return;
    }
    setIsLoading(true);
    setReport('');
    try {
      const result = await generateKundliMatch(details1, details2);
      setReport(result);
    } catch (error) {
      console.error(error);
      setReport('Report siam laiin harsatna a awm. Khawngaihin a hnuah i rawn bei leh dawn nia.');
    } finally {
      setIsLoading(false);
    }
  };

  const DetailInputForm: React.FC<{ details: KundliDetails; setDetails: React.Dispatch<React.SetStateAction<KundliDetails>>; title: string }> = ({ details, setDetails, title }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDetails({ ...details, [e.target.name]: e.target.value });
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-rose-800">{title}</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Hming</label>
          <input type="text" name="name" value={details.name} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pianni</label>
          <input type="date" name="dob" value={details.dob} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pian hun</label>
          <input type="time" name="tob" value={details.tob} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pianna Hmun</label>
          <input type="text" name="pob" placeholder="e.g., Aizawl, Mizoram" value={details.pob} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500" />
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-rose-800">AI Matchmaker</h2>
        <p className="text-gray-500 mt-2">Pian hun atanga in inmil dan enfiah rawh.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DetailInputForm details={details1} setDetails={setDetails1} title="Mipa Chanchin" />
        <DetailInputForm details={details2} setDetails={setDetails2} title="Hmeichhe Chanchin" />
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-rose-500 text-white py-3 px-8 rounded-lg hover:bg-rose-600 transition-colors text-lg font-semibold disabled:bg-rose-300"
        >
          {isLoading ? 'Report Siam Mek...' : 'Inremna En Rawh'}
        </button>
      </div>

      {isLoading && (
         <div className="mt-8 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
            <p className="text-gray-600 mt-4">Kan AI-in in pianhun atanga in inmilna a zirchiang mek... rei lo te a awh ang.</p>
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

export default KundliMatcher;