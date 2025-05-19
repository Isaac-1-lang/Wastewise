import { useEffect, useState, useMemo, useCallback } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Mail, Users, Search, Bell, Filter, UserPlus } from "lucide-react";

// Dummy user data
const dummyUsers = [
  {
    _id: "user1",
    fullName: "Isaac Precieux(Admin)",
    profilePic: "https://i.pravatar.cc/150?img=70",
    lastSeen: new Date(),
    email: "isaprecieux112@gmail.com"
  },
  {
    _id: "user2",
    fullName: "Darius(Admin)",
    profilePic: "https://i.pravatar.cc/150?img=3",
    lastSeen: new Date(Date.now() - 15 * 60000), // 15 minutes ago
    email: "dariwise950@gmail.com"
  },
  {
    _id: "user3",
    fullName: "Uwase sandra",
    profilePic: "https://i.pravatar.cc/150?img=5",
    lastSeen: new Date(),
    email: "olivia.martinez@example.com"
  },
  {
    _id: "user4",
    fullName: "Frank Duff(Admin)",
    profilePic: "https://i.pravatar.cc/150?img=7",
    lastSeen: new Date(Date.now() - 2 * 3600000), // 2 hours ago
    email: "noah.smith@example.com"
  },
  {
    _id: "user5",
    fullName: "Sophia Brown",
    profilePic: "https://i.pravatar.cc/150?img=9",
    lastSeen: new Date(),
    email: "sophia.brown@example.com"
  },
  {
    _id: "user6",
    fullName: "Lilian Bryan",
    profilePic: "https://i.pravatar.cc/150?img=11",
    lastSeen: new Date(Date.now() - 1 * 86400000), // 1 day ago
    email: "william.davis@example.com"
  },
  {
    _id: "user7",
    fullName: "Isabella Nkunda",
    profilePic: "https://i.pravatar.cc/150?img=25",
    lastSeen: new Date(),
    email: "isabella.miller@example.com"
  },
  {
    _id: "user8",
    fullName: "Heloise Rugie",
    profilePic: "https://i.pravatar.cc/150?img=15",
    lastSeen: new Date(Date.now() - 30 * 60000), // 30 minutes ago
    email: "james.wilson@example.com"
  },
  {
    _id: "user9",
    fullName: "Joshua mann",
    profilePic: "https://i.pravatar.cc/150?img=17",
    lastSeen: new Date(),
    email: "ava.moore@example.com"
  },
  {
    _id: "user10",
    fullName: "Benjamin Taylor",
    profilePic: "https://i.pravatar.cc/150?img=19",
    lastSeen: new Date(Date.now() - 5 * 60000), // 5 minutes ago
    email: "benjamin.taylor@example.com"
  }
];

// Dummy online users (IDs of users who are online)
const dummyOnlineUsers = ["user1", "user3", "user5", "user7", "user9", "user10"];

const Sidebar = () => {
  // State to track if we're using real or dummy data
  const [useDummyData, setUseDummyData] = useState(true);
  
  const {
    getUsers,
    users: apiUsers,
    selectedUser,
    setSelectedUser,
    isUsersLoading,
    getmessagesindicator,
    indicator,
    resetindicator
  } = useChatStore();
  
  const { onlineUsers: apiOnlineUsers = [] } = useAuthStore();
  
  // Use either dummy data or API data based on the toggle
  const users = useDummyData ? dummyUsers : apiUsers;
  const onlineUsers = useDummyData ? dummyOnlineUsers : apiOnlineUsers;
  
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dummyIndicator, setDummyIndicator] = useState(3); // Dummy notification count

  // Memoized filtered users
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesOnlineFilter = showOnlineOnly ? onlineUsers.includes(user._id) : true;
      const matchesSearch = user.fullName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesOnlineFilter && matchesSearch;
    });
  }, [users, onlineUsers, showOnlineOnly, searchQuery]);

  // Memoized online count (excluding current user)
  const onlineCount = useMemo(() => {
    return Array.isArray(onlineUsers) ? Math.max(0, onlineUsers.length - 1) : 0;
  }, [onlineUsers]);

  useEffect(() => {
    if (!useDummyData) {
      getUsers();
      getmessagesindicator();
    }
  }, [getUsers, getmessagesindicator, useDummyData]);

  const handleUserClick = useCallback((user) => {
    setSelectedUser(user);
    if (useDummyData) {
      setDummyIndicator(0);
    } else if (indicator > 0) {
      resetindicator();
    }
  }, [setSelectedUser, indicator, resetindicator, useDummyData]);

  const clearFilters = useCallback(() => {
    setShowOnlineOnly(false);
    setSearchQuery("");
  }, []);

  const toggleDataSource = useCallback(() => {
    setUseDummyData(prev => !prev);
  }, []);

  if (!useDummyData && isUsersLoading) return <SidebarSkeleton />;

  // Use either the real indicator or our dummy one
  const notificationCount = useDummyData ? dummyIndicator : indicator;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col bg-base-100 transition-all duration-200 shadow-sm">
      {/* Header Section */}
      <div className="border-b border-base-300 w-full p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="size-6 text-primary" />
            <span className="font-semibold text-lg hidden lg:block">Contacts</span>
          </div>
          <div className="hidden lg:flex gap-2">
            <button 
              className="btn btn-circle btn-sm btn-ghost"
              aria-label="Add contact"
            >
              <UserPlus className="size-4" />
            </button>
            <button 
              className="btn btn-circle btn-sm btn-ghost relative"
              aria-label="Notifications"
            >
              <Bell className="size-4" />
              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 size-2 bg-primary rounded-full"></span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-sm input-bordered w-full pl-9 rounded-lg focus:ring-2 focus:ring-primary/50"
              aria-label="Search contacts"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
          </div>
        </div>

        {/* Filters */}
        <div className="hidden lg:flex items-center justify-between">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-primary"
              aria-label="Show online only"
            />
            <span className="text-sm">Online only</span>
          </label>
          <div className="flex items-center gap-2">
            <span className="badge badge-primary badge-sm">
              {onlineCount} online
            </span>
            <button 
              onClick={toggleDataSource}
              className="btn btn-xs btn-ghost"
              title={useDummyData ? "Switch to API data" : "Switch to dummy data"}
            >
              {useDummyData ? "Demo" : "API"}
            </button>
          </div>
        </div>
      </div>

      {/* Contacts List */}
      <div className="overflow-y-auto w-full py-2 flex-1">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            const isOnline = onlineUsers.includes(user._id);
            const isSelected = selectedUser?._id === user._id;
            const hasUnread = notificationCount > 0 && !isSelected;

            return (
              <button
                key={user._id}
                onClick={() => handleUserClick(user)}
                className={`w-full p-3 flex items-center gap-3 hover:bg-base-200 transition-colors rounded-lg mx-1 my-1 group ${
                  isSelected ? "bg-base-200 shadow-sm" : ""
                }`}
                aria-label={`Chat with ${user.fullName}`}
              >
                <div className="relative mx-auto lg:mx-0">
                  <img
                    src={user.profilePic || "/avatar.png"}
                    alt={user.fullName}
                    className="size-12 object-cover rounded-full border-2 border-base-200 group-hover:border-primary transition-colors"
                  />
                  {isOnline && (
                    <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-base-100" />
                  )}
                </div>

                <div className="hidden lg:block text-left flex-1 min-w-0">
                  <div className="font-medium truncate">{user.fullName}</div>
                  <div className="text-sm flex items-center gap-1">
                    <span className={isOnline ? "text-green-500" : "text-gray-400"}>
                      {isOnline ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>

                {hasUnread && (
                  <div className="hidden lg:flex ml-auto">
                    <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notificationCount}
                    </span>
                  </div>
                )}
              </button>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-32 text-gray-500 py-4">
            <Filter className="size-8 mb-2" />
            <p>No contacts found</p>
            <button 
              onClick={clearFilters}
              className="text-primary text-sm mt-1 hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="p-3 border-t border-base-300 hidden lg:block">
        <div className="text-xs text-gray-500 text-center">
          <p>Chat App v1.0 {useDummyData ? "(Demo Mode)" : ""}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;