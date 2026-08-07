import React from 'react';
import logo from "../assets/logo.png";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Brand & Mission */}
        <div className="footer-brand flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md border border-white/40">
            <img src={logo} alt="SKILLONIK Logo" className="w-7 h-7 object-contain" />
          </div>
          <div>
            <div className="font-display font-bold text-base text-slate-900">SKILLONIK AI</div>
            <p className="text-xs text-slate-500">
              Next-Gen Engineering Mentor, Curated Roadmaps &amp; Placement Preparation.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <ul className="footer-links flex flex-wrap justify-center gap-6">
          <li>
            <button onClick={() => onNavigate?.("Home")} className="footer-link cursor-pointer">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate?.("AI Mentor")} className="footer-link cursor-pointer text-blue-600 font-semibold">
              AI Mentor
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate?.("Roadmaps")} className="footer-link cursor-pointer">
              Roadmaps
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate?.("Projects")} className="footer-link cursor-pointer">
              Project Blueprints
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate?.("Knowledge Base")} className="footer-link cursor-pointer">
              Knowledge Base
            </button>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-xs text-slate-400 font-mono text-center sm:text-right">
          <span>&copy; {new Date().getFullYear()} SKILLONIK. Built for Engineers &amp; Students.</span>
        </div>

      </div>
    </footer>
  );
}
