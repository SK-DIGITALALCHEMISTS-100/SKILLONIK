import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { 
  Sparkles, 
  Menu, 
  X, 
  Map, 
  LogIn, 
  UserPlus, 
  LogOut, 
  ChevronDown 
} from 'lucide-react';

const LINKS = [
  { id: "Home", label: "Home" }
];

export default function Navbar({ page, onNavigate, setPage, user, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const handleNav = onNavigate || setPage;

  const navigateTo = (target) => {
    if (handleNav) handleNav(target);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Brand */}
        <div className="brand" onClick={() => navigateTo("Home")}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 border border-white/40 overflow-hidden">
            <img src={logo} alt="SKILLONIK Logo" className="w-7 h-7 object-contain" />
          </div>
          <div>
            <span className="brand-name">SKILLONIK</span>
            <span className="hidden sm:block text-[9px] font-mono font-bold text-blue-600 uppercase tracking-wider">
              Skillonik AI Mentor
            </span>
          </div>
        </div>

        {/* Auth & Action Buttons (Home placed before Sign In) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          

         

          {user ? (
            /* Logged In User Pill Dropdown */
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 py-1.5 px-3 rounded-xl bg-white/90 hover:bg-white border border-blue-200/80 shadow-xs transition-all cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {user.avatar || user.name.charAt(0)}
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-xs font-bold text-slate-800 block leading-tight">{user.name}</span>
                  <span className="text-[9px] font-mono text-blue-600 block leading-none">{user.role || 'Member'}</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in-up">
                  <div className="p-2 border-b border-slate-100 mb-1">
                    <p className="text-xs font-bold text-slate-800">{user.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono truncate">{user.email}</p>
                    {user.track && (
                      <span className="mt-1 inline-block text-[9px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-mono font-semibold">
                        {user.track}
                      </span>
                    )}
                  </div>

                 

                  

                  

                  <div className="border-t border-slate-100 my-1"></div>

                  <button
                    onClick={() => {
                      if (onLogout) onLogout();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors text-left cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5 text-rose-500" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Unauthenticated Buttons: Sign In & Sign Up */
            <div className="flex items-center gap-2">
              

              <button
                onClick={() => navigateTo("Signup")}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white border border-blue-200 text-blue-700 font-bold text-xs shadow-xs transition-all cursor-pointer hover:border-blue-400"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Sign Up</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-white/80 px-6 py-4 shadow-xl animate-in fade-in slide-in-from-top-2">
          {/* Mobile User Status */}
          {user ? (
            <div className="mb-4 p-3 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  {user.avatar || user.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{user.name}</h4>
                  <p className="text-[10px] text-slate-500 font-mono">{user.email}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (onLogout) onLogout();
                  setMobileMenuOpen(false);
                }}
                className="p-1.5 text-rose-600 hover:bg-rose-100 rounded-lg text-xs font-bold"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                onClick={() => navigateTo("Login")}
                className="py-2 px-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-600" />
                <span>Sign In</span>
              </button>
              <button
                onClick={() => navigateTo("Signup")}
                className="py-2 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Create Account</span>
              </button>
            </div>
          )}

          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {LINKS.map((link) => {
              const isActive = page === link.id;
              return (
                <li key={link.id}>
                  <button
                    className={`w-full text-left nav-link justify-between ${isActive ? 'active' : ''}`}
                    onClick={() => navigateTo(link.id)}
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
