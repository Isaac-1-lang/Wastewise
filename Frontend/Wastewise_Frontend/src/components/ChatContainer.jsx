import { useEffect, useRef, useCallback } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Memoized scroll to bottom function
  const scrollToBottom = useCallback(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Handle messages subscription and fetching
  useEffect(() => {
    const fetchAndSubscribe = async () => {
      await getMessages(selectedUser._id);
      subscribeToMessages();
    };

    fetchAndSubscribe();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  if (isMessagesLoading) {
    return (
      <div className="flex flex-col h-full">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto">
          <MessageSkeleton />
        </div>
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-center text-gray-500">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message._id}
              className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 h-10 rounded-full border border-base-300">
                </div>
              </div>
              
              <div className="chat-header flex items-center gap-1 mb-1">
                <time className="text-xs opacity-50">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>
              
              <div className={`chat-bubble ${message.image ? "p-2" : ""}`}>
                {message.image && (
                  <img
                    src={message.image}
                    alt="Attachment"
                    className="max-w-[200px] sm:max-w-[280px] rounded-md mb-2"
                  />
                )}
                {message.text && (
                  <p className="whitespace-pre-wrap break-words">{message.text}</p>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messageEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;