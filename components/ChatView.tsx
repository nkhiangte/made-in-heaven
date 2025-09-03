import React, { useState } from 'react';
import { MOCK_PROFILES } from '../constants';

const ChatView: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(MOCK_PROFILES[1]);

  const messages = [
    { sender: 'other', text: 'Chibai Lalnunpui! I profile ka hmu a, ka lawm hle mai. Rohlupuia ka nia.', time: '10:30 AM' },
    { sender: 'me', text: 'Chibai Rohlupuia, ka lawm e! I thu hriat chu a lawmawm hle mai.', time: '10:31 AM' },
    { sender: 'other', text: 'I profile-ah zin nuam i tih thu a inziak a. Hmun nuam i tih bik a awm em?', time: '10:32 AM' },
    { sender: 'me', text: 'Aw, awm tehreng e! Nikuma Italy-a ka zin kha nuam ka ti lutuk. An hnam nun leh chaw te kha a tui khawp mai. Nang ve?', time: '10:33 AM' },
    { sender: 'other', text: 'A va ngaihnawm ve! Kei chu tlang lam mi ka ni zawk. Tlem lai khan Himalayas-ah ka lawn a.', time: '10:34 AM' },
  ];

  return (
    <div className="flex h-[calc(100vh-150px)] bg-white rounded-lg shadow-xl overflow-hidden">
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
        <div className="p-4 border-b flex items-center bg-gray-50">
          <img src={selectedChat.photoUrl} alt={selectedChat.name} className="h-12 w-12 rounded-full object-cover" />
          <div className="ml-4">
            <p className="font-bold text-lg">{selectedChat.name}</p>
            <p className="text-sm text-green-500">A awm mek</p>
          </div>
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