import React, { useState, useRef, useEffect } from 'react';
import { MOCK_PROFILES } from '../constants';

const ChatView: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(MOCK_PROFILES[1]);
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (localStream && localVideoRef.current) {
      localVideoRef.current.srcObject = localStream;
    }

    return () => {
      // Cleanup stream when component unmounts or call ends
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [localStream]);

  const startVideoCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setLocalStream(stream);
      setIsVideoCallActive(true);
    } catch (err) {
      console.error("Error accessing media devices.", err);
      alert("Camera leh microphone hman phalna i pe lo. Khawngaihin i browser setting-ah en la, phalna pe ang che.");
    }
  };

  const endVideoCall = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }
    setLocalStream(null);
    setIsVideoCallActive(false);
    setIsMuted(false);
    setIsCameraOff(false);
  };
  
  const toggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleCamera = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsCameraOff(!isCameraOff);
    }
  };

  const messages = [
    { sender: 'other', text: 'Chibai Lalnunpui! I profile ka hmu a, ka lawm hle mai. Rohlupuia ka nia.', time: '10:30 AM' },
    { sender: 'me', text: 'Chibai Rohlupuia, ka lawm e! I thu hriat chu a lawmawm hle mai.', time: '10:31 AM' },
    { sender: 'other', text: 'I profile-ah zin nuam i tih thu a inziak a. Hmun nuam i tih bik a awm em?', time: '10:32 AM' },
    { sender: 'me', text: 'Aw, awm tehreng e! Nikuma Italy-a ka zin kha nuam ka ti lutuk. An hnam nun leh chaw te kha a tui khawp mai. Nang ve?', time: '10:33 AM' },
    { sender: 'other', text: 'A va ngaihnawm ve! Kei chu tlang lam mi ka ni zawk. Tlem lai khan Himalayas-ah ka lawn a.', time: '10:34 AM' },
  ];

  const VideoCallUI = () => (
    <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col z-50">
      {/* Remote video (placeholder) */}
      <div className="flex-1 bg-gray-900 flex items-center justify-center relative">
         <div className="text-center text-white">
            <img src={selectedChat.photoUrl} alt={selectedChat.name} className="h-32 w-32 rounded-full object-cover mx-auto border-4 border-gray-600"/>
            <p className="mt-4 text-2xl font-semibold">{selectedChat.name} biak mek...</p>
            <p className="text-gray-400">He feature hi entirna a ni.</p>
         </div>
         {/* Local video */}
         <video ref={localVideoRef} autoPlay playsInline muted className={`absolute top-4 right-4 w-48 h-36 bg-black rounded-lg shadow-lg object-cover transition-opacity duration-300 ${isCameraOff ? 'opacity-0' : 'opacity-100'}`}></video>
         {isCameraOff && (
            <div className="absolute top-4 right-4 w-48 h-36 bg-black rounded-lg shadow-lg flex items-center justify-center text-white">
                Camera a Off
            </div>
         )}
      </div>
      
      {/* Controls */}
      <div className="bg-gray-800 bg-opacity-50 py-4 flex justify-center items-center space-x-6">
        <button onClick={toggleMute} className={`p-4 rounded-full ${isMuted ? 'bg-rose-500' : 'bg-gray-600'} text-white hover:opacity-80 transition-all`} title={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5l14 14" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
          )}
        </button>
        <button onClick={toggleCamera} className={`p-4 rounded-full ${isCameraOff ? 'bg-rose-500' : 'bg-gray-600'} text-white hover:opacity-80 transition-all`} title={isCameraOff ? 'Turn Camera On' : 'Turn Camera Off'}>
           {isCameraOff ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a1 1 0 011.45.89V16a1 1 0 01-1.45.89L15 14M11.999 4.001a2 2 0 012 2v2m-2-4a2 2 0 00-2 2v2m-4 6H5a2 2 0 01-2-2V8a2 2 0 012-2h2m10 10V16a2 2 0 00-2-2h-2m-4 4v4m0 0H8m4 0h4m0-4v-2m-4-4h.01" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" /></svg>
           ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a1 1 0 011.45.89V16a1 1 0 01-1.45.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
           )}
        </button>
        <button onClick={endVideoCall} className="p-4 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors" title="End Call">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative flex h-[calc(100vh-150px)] bg-white rounded-lg shadow-xl overflow-hidden">
       {isVideoCallActive && <VideoCallUI />}
      {/* Sidebar with contacts */}
      <div className="w-1/3 border-r border-gray-200">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Thuchah</h2>
        </div>
        <div className="overflow-y-auto">
          {MOCK_PROFILES.slice(1, 4).map(profile => (
            <div
              key={profile.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-rose-50 ${selectedChat.id === profile.id ? 'bg-rose-100' : ''}`}
              onClick={() => setSelectedChat(profile)}
            >
              <img src={profile.photoUrl} alt={profile.name} className="h-12 w-12 rounded-full object-cover" />
              <div className="ml-4">
                <p className="font-semibold">{profile.name}</p>
                <p className="text-sm text-gray-500 truncate">Kei chu tlang lam mi ka ni zawk...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main chat window */}
      <div className="w-2/3 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
           <div className="flex items-center">
             <img src={selectedChat.photoUrl} alt={selectedChat.name} className="h-12 w-12 rounded-full object-cover" />
             <div className="ml-4">
               <p className="font-bold text-lg">{selectedChat.name}</p>
               <p className="text-sm text-green-500">A awm mek</p>
             </div>
           </div>
           <button onClick={startVideoCall} className="p-2 rounded-full text-gray-600 hover:bg-gray-200 hover:text-rose-500 transition-colors" title="Video Call">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a1 1 0 011.45.89V16a1 1 0 01-1.45.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
           </button>
        </div>
        <div className="flex-1 p-6 overflow-y-auto bg-rose-50/30">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${msg.sender === 'me' ? 'bg-rose-500 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none shadow-sm'}`}>
                  <p>{msg.text}</p>
                   <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-rose-200' : 'text-gray-400'} text-right`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-white border-t">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="I thuchah chhu rawh..."
              className="flex-1 border-gray-300 rounded-full py-3 px-5 focus:ring-rose-500 focus:border-rose-500"
              defaultValue="Hei hi UI entirna a ni. Inbiakna a hman theih loh."
              disabled
            />
            <button className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
