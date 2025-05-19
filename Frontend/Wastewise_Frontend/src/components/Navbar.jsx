import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Leaf, Recycle, MapPin, Info, User, LogOut, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const {
    user,
    setUser,
    navigate,
  } = useAppContext();

  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && open) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setOpen(false);
    setProfileOpen(false);
    navigate("/login");
  };

  // Shared style for nav links
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 transition-colors duration-300 px-3 py-2 rounded-lg ${
      isActive 
        ? "text-emerald-100 bg-emerald-700 font-medium" 
        : "text-emerald-100 hover:bg-emerald-700/50"
    }`;

  // Shared style for menu items
  const menuItemStyle =
    "flex items-center gap-2 w-full px-4 py-3 text-sm text-emerald-800 hover:bg-emerald-50 transition-colors duration-200";

  // Profile menu items
  const ProfileMenu = () => (
    <div className="profile-menu absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-1 border border-emerald-100 z-50">
      <div className="px-4 py-3 border-b border-emerald-100">
        <p className="text-sm font-medium text-emerald-800">{user?.name || "User"}</p>
        <p className="text-xs text-emerald-600">{user?.email || "user@example.com"}</p>
      </div>
      <ul className="flex flex-col py-1">
        {user?.role === "admin" && (
          <li>
            <NavLink
              to="/admin/dashboard"
              className={menuItemStyle}
              onClick={() => setProfileOpen(false)}
            >
              <User size={16} />
              Admin Dashboard
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/profile"
            className={menuItemStyle}
            onClick={() => setProfileOpen(false)}
          >
            <User size={16} />
            My Profile
          </NavLink>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className={menuItemStyle}
            aria-label="Logout"
          >
            <LogOut size={16} />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-full">
                <Recycle className="h-8 w-8 text-emerald-600" />
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">WasteWise</span>
            </NavLink>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkStyle}>
              <Leaf size={18} />
              <span>Home</span>
            </NavLink>

            <NavLink to="/collection-points" className={navLinkStyle}>
              <MapPin size={18} />
              <span>Collection Points</span>
            </NavLink>

            <NavLink to="/recycling-guide" className={navLinkStyle}>
              <Recycle size={18} />
              <span>Recycling Guide</span>
            </NavLink>

            <NavLink to="/about" className={navLinkStyle}>
              <Info size={18} />
              <span>About Us</span>
            </NavLink>
          </div>

          {/* Auth & Profile Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  aria-label="Toggle Profile Menu"
                  className="flex items-center gap-2 bg-emerald-700 text-white px-3 py-2 rounded-lg hover:bg-emerald-800 transition-colors duration-200"
                >
                  <User size={18} />
                  <span className="hidden sm:block">My Account</span>
                  <ChevronDown size={16} />
                </button>
                {profileOpen && <ProfileMenu />}
              </div>
            ) : (
              <NavLink
                to="/login"
                className="flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                onClick={() => setOpen(false)}
              >
                <User size={18} />
                <span>Login</span>
              </NavLink>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden bg-emerald-700 text-white p-2 rounded-lg hover:bg-emerald-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {open && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden bg-emerald-700 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setOpen(false)}
            >
              <Leaf size={18} />
              <span>Home</span>
            </NavLink>
            
            <NavLink
              to="/services"
              className={navLinkStyle}
              onClick={() => setOpen(false)}
            >
              <MapPin size={18} />
              <span>Services</span>
            </NavLink>
            
            <NavLink
              to="/recycling-guide"
              className={navLinkStyle}
              onClick={() => setOpen(false)}
            >
              <Recycle size={18} />
              <span>Recycling Guide</span>
            </NavLink>
            
            <NavLink
              to="/about"
              className={navLinkStyle}
              onClick={() => setOpen(false)}
            >
              <Info size={18} />
              <span>About Us</span>
            </NavLink>

            {!user && (
              <NavLink
                to="/login"
                className="flex items-center gap-2 bg-white text-emerald-600 px-3 py-2 rounded-lg text-sm font-medium w-full transition-all duration-300 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                onClick={() => setOpen(false)}
              >
                <User size={18} />
                <span>Login</span>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 