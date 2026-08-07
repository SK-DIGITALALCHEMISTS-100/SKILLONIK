import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Sparkles, Menu, X, Map, Lightbulb, BookOpen } from 'lucide-react';

const LINKS = [
  { id: "Home", label: "Home" },
  { id: "AI Mentor", label: "AI Mentor", icon: Sparkles, badge: "Live" },
  { id: "Roadmaps", label: "Roadmaps", icon: Map },
  { id: "Projects", label: "Project Blueprints", icon: Lightbulb },
  { id: "Knowledge Base", label: "Knowledge Base", icon: BookOpen }
];

export default function Navbar({ page, onNavigate, setPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleNav = onNavigate || setPage;

  const navigateTo = (target) => {
    if (handleNav) handleNav(target);
    setMobileMenuOpen(false);
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
              Engineering AI Mentor
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex">
          <ul className="nav-links">
            {LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = page === link.id;
              return (
                <li key={link.id}>
                  <button
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => navigateTo(link.id)}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" />}
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500 text-white font-bold animate-pulse">
                        {link.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button 
            className="btn-primary" 
            onClick={() => navigateTo("AI Mentor")}
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch AI Mentor</span>
          </button>

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
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = page === link.id;
              return (
                <li key={link.id}>
                  <button
                    className={`w-full text-left nav-link justify-between ${isActive ? 'active' : ''}`}
                    onClick={() => navigateTo(link.id)}
                  >
                    <span className="flex items-center gap-2">
                      {Icon && <Icon className="w-4 h-4 text-blue-500" />}
                      {link.label}
                    </span>
                    {link.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        {link.badge}
                      </span>
                    )}
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
