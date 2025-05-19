import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-3 border-b border-base-300 bg-base-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar with online indicator */}
          <div className="relative">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring-1 ring-base-300">
              </div>
            </div>
            {isOnline && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-base-100"></span>
            )}
          </div>

          {/* User info with truncation for long names */}
          <div className="min-w-0">
            <h3 className="font-medium truncate">{selectedUser.fullName}</h3>
            <p
              className={`text-sm ${
                isOnline ? "text-green-500" : "text-base-content/70"
              }`}
            >
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button with better accessibility */}
        <button
          onClick={() => setSelectedUser(null)}
          aria-label="Close chat"
          className="p-1 rounded-full hover:bg-base-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <X className="w-5 h-5 text-base-content/70" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;