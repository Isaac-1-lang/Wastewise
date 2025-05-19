import React from 'react';
import { useChatStore } from '../store/useChatStore';
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const Homepage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Main content area */}
      <main className="flex-1 pt-16 md:pt-20 px-4 pb-4">
        <div className="max-w-6xl mx-auto h-full">
          <div className="bg-base-100 rounded-lg shadow-lg w-full h-full overflow-hidden flex flex-col md:flex-row">
            {/* Sidebar - always visible but may change width on mobile */}
            <div className="md:w-72 border-r border-base-300 flex-shrink-0 h-full">
              <Sidebar />
            </div>
            
            {/* Chat area */}
            <div className="flex-1 flex flex-col min-h-0">
              {!selectedUser ? (
                <NoChatSelected className="flex-1" />
              ) : (
                <ChatContainer className="flex-1" />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;