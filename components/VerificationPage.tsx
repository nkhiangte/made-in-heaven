import React, { useState, useRef, useEffect } from 'react';
import { submitForRealVerification } from '../services/verificationService';

interface VerificationPageProps {
  onVerificationSuccess: () => void;
}

const loadingMessages = [
  "Document upload him mek...",
  "Verification thawhpui biak mek...",
  "Document zirchian mek...",
  "Finfiahna tihfel mek...",
];

const VerificationPage: React.FC<VerificationPageProps> = ({ onVerificationSuccess }) => {
  const [idType, setIdType] = useState('Aadhaar');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
        setStatusMessage('File a lian lutuk. 4MB aia te upload rawh.');
        setIsSuccess(false);
        return;
      }
      setSelectedFile(file);
      setStatusMessage('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setStatusMessage('Khawngaihin ID thlalak upload rawh.');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setLoadingMessageIndex(0);
    setStatusMessage('');

    try {
      // This now simulates a call to your backend, which then calls a real verification service.
      const result = await submitForRealVerification(idType, selectedFile);
      
      setStatusMessage(result.reason);
      setIsSuccess(result.verified);

      if (result.verified) {
        setTimeout(() => {
          onVerificationSuccess();
        }, 2000); // Wait 2 seconds before navigating
      }
    } catch (error) {
      setStatusMessage('Finfiahnaah harsatna a awm. Khawngaihin a hnuah i rawn bei leh dawn nia.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-rose-800">I Profile Tichiang Rawh</h2>
        <p className="text-gray-500 mt-2">Mi rin tlak i nih zia lantir la, i inmilpui tur hmuh dan tha zawk nei ang che.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="idType" className="block text-lg font-medium text-gray-700">ID Chi Thlang Rawh</label>
          <select
            id="idType"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            className="mt-2 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm rounded-md"
            disabled={isLoading}
          >
            <option>Aadhaar Card</option>
            <option>Driving License</option>
            <option>Voter ID</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">I ID Thlalak Upload Rawh</label>
          <div 
            onClick={() => !isLoading && fileInputRef.current?.click()}
            className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ${!isLoading ? 'cursor-pointer hover:border-rose-400' : 'cursor-not-allowed bg-gray-50'}`}
          >
            <div className="space-y-1 text-center">
              {preview ? (
                <img src={preview} alt="ID preview" className="mx-auto h-40 object-contain rounded-md" />
              ) : (
                <>
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm text-gray-600">Thlalak thlang rawh</p>
                  <p className="text-xs text-gray-500">PNG, JPG, JPEG 4MB aia te</p>
                </>
              )}
            </div>
          </div>
          <input
            id="file-upload"
            ref={fileInputRef}
            name="file-upload"
            type="file"
            className="sr-only"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleFileChange}
            disabled={isLoading}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading || isSuccess}
          className="w-full flex justify-center items-center bg-rose-500 text-white py-3 px-4 rounded-lg hover:bg-rose-600 transition-colors text-lg font-semibold disabled:bg-rose-300 disabled:cursor-not-allowed"
        >
          {isLoading ? (
             <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{loadingMessages[loadingMessageIndex]}</span>
            </>
          ) : isSuccess ? (
            'Fiah Fel A Ni!'
          ) : (
            'Finfiahna Theh Lut Rawh'
          )}
        </button>

        {statusMessage && (
          <div className={`text-center p-3 rounded-md ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationPage;
