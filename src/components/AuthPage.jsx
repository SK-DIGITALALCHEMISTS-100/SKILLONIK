import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { 
  Sparkles, 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Building2, 
  ArrowLeft,
  KeyRound,
  RefreshCw
} from 'lucide-react';

const CAREER_TRACKS = [
  { id: 'mern', label: 'Full Stack MERN', icon: Layers },
  { id: 'ai-ml', label: 'AI & Machine Learning', icon: Sparkles },
  { id: 'devops', label: 'Cloud & DevOps', icon: Zap },
  { id: 'placement', label: 'TCS / Campus Placement', icon: Building2 },
];

const DEMO_USERS = [
  {
    role: 'Student Aspirant',
    name: 'Aarav Sharma',
    email: 'aarav.student@skillonik.dev',
    avatar: '👨‍🎓',
    track: 'TCS / Campus Placement',
    experience: 'Final Year Student'
  },
  {
    role: 'Full Stack Developer',
    name: 'Balaji S',
    email: 'balaji.dev@skillonik.dev',
    avatar: '💻',
    track: 'Full Stack MERN',
    experience: 'Fresher'
  },
  {
    role: 'AI / ML Engineer',
    name: 'Priya Patel',
    email: 'priya.ai@skillonik.dev',
    avatar: '🚀',
    track: 'AI & Machine Learning',
    experience: 'Working Professional'
  }
];

const TESTIMONIALS = [
  {
    quote: "SKILLONIK's AI Mentor solved my MERN architecture doubts in seconds. Cleared my TCS Digital technical round with ease!",
    author: "Balaji S",
    role: "Placed as Digital Engineer",
    company: "TCS",
    badge: "Verified Candidate"
  },
  {
    quote: "The curated roadmaps and instant code review feature gave me the exact confidence needed for top product companies.",
    author: "Sneha Reddy",
    role: "Full Stack SDE Intern",
    company: "Infosys",
    badge: "Verified Candidate"
  }
];

export default function AuthPage({ 
  initialMode = 'signin', 
  onLoginSuccess, 
  onNavigateHome
}) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sign In Form State
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Sign Up Form State
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('mern');
  const [experienceLevel, setExperienceLevel] = useState('Final Year Student');
  const [agreedTerms, setAgreedTerms] = useState(true);

  // UI & Feedback States
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [shake, setShake] = useState(false);

  // Forgot Password Modal State
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [forgotStep, setForgotStep] = useState(1); // 1: Email, 2: OTP, 3: New Password, 4: Done
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotOtp, setForgotOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [otpTimer, setOtpTimer] = useState(45);

  // Rotate testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Countdown timer for OTP
  useEffect(() => {
    let interval = null;
    if (isForgotOpen && forgotStep === 2 && otpTimer > 0) {
      interval = setInterval(() => setOtpTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isForgotOpen, forgotStep, otpTimer]);

  // Calculate dynamic password strength
  const getPasswordStrength = (pass) => {
    if (!pass) return { score: 0, label: 'None', color: 'bg-slate-200', textCol: 'text-slate-400' };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 1:
        return { score: 25, label: 'Weak', color: 'bg-rose-500', textCol: 'text-rose-600' };
      case 2:
        return { score: 50, label: 'Fair', color: 'bg-amber-500', textCol: 'text-amber-600' };
      case 3:
        return { score: 75, label: 'Good', color: 'bg-blue-500', textCol: 'text-blue-600' };
      case 4:
        return { score: 100, label: 'Strong', color: 'bg-emerald-500', textCol: 'text-emerald-600' };
      default:
        return { score: 15, label: 'Very Weak', color: 'bg-rose-400', textCol: 'text-rose-500' };
    }
  };

  const strength = getPasswordStrength(signUpPassword);

  const triggerError = (msg) => {
    setErrorMessage(msg);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  // Quick 1-Click Demo Login Handler
  const handleQuickDemoLogin = (demo) => {
    setIsLoading(true);
    setErrorMessage('');
    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: demo.name,
        email: demo.email,
        avatar: demo.avatar,
        track: demo.track,
        role: demo.role,
        experience: demo.experience,
        isLoggedIn: true,
        loginTime: new Date().toISOString()
      };
      if (onLoginSuccess) onLoginSuccess(user);
    }, 600);
  };

  // Sign In Submission
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!signInEmail || !signInPassword) {
      triggerError('Please enter both your email/username and password.');
      return;
    }

    if (signInPassword.length < 4) {
      triggerError('Password must be at least 4 characters long.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Construct user session
      const namePart = signInEmail.split('@')[0];
      const capitalizedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
      
      const user = {
        name: capitalizedName || 'Engineer',
        email: signInEmail,
        avatar: '👨‍💻',
        track: 'Full Stack MERN',
        role: 'Registered Member',
        experience: 'Final Year Student',
        isLoggedIn: true,
        loginTime: new Date().toISOString()
      };

      setSuccessMessage('Welcome back! Initializing your AI Mentor workspace...');
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess(user);
      }, 700);
    }, 800);
  };

  // Sign Up Submission
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!signUpName.trim()) {
      triggerError('Please enter your full name.');
      return;
    }

    if (!signUpEmail || !signUpEmail.includes('@')) {
      triggerError('Please enter a valid email address.');
      return;
    }

    if (signUpPassword.length < 6) {
      triggerError('Password must be at least 6 characters.');
      return;
    }

    if (signUpPassword !== signUpConfirmPassword) {
      triggerError('Passwords do not match.');
      return;
    }

    if (!agreedTerms) {
      triggerError('Please accept the Terms of Service to continue.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const selectedTrackObj = CAREER_TRACKS.find((t) => t.id === selectedTrack);
      
      const user = {
        name: signUpName.trim(),
        email: signUpEmail.trim(),
        avatar: '🚀',
        track: selectedTrackObj ? selectedTrackObj.label : 'Full Stack MERN',
        role: 'Verified Candidate',
        experience: experienceLevel,
        isLoggedIn: true,
        loginTime: new Date().toISOString()
      };

      setSuccessMessage('Account created successfully! Welcome to SKILLONIK.');
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess(user);
      }, 700);
    }, 900);
  };

  // Social Sign-In Simulation
  const handleSocialAuth = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: `${provider} Engineer`,
        email: `user@${provider.toLowerCase()}.com`,
        avatar: provider === 'Google' ? '🌐' : provider === 'GitHub' ? '🐙' : '💼',
        track: 'Full Stack MERN',
        role: `${provider} Connected User`,
        experience: 'Software Engineer',
        isLoggedIn: true,
        loginTime: new Date().toISOString()
      };
      if (onLoginSuccess) onLoginSuccess(user);
    }, 700);
  };

  // Forgot Password OTP handlers
  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...forgotOtp];
    newOtp[index] = value;
    setForgotOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between relative py-6 px-4 sm:px-6 lg:px-8">
      
      {/* Background Glow Blobs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

      {/* Top Header Navigation */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between pb-6">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 font-semibold text-xs border border-white/90 shadow-sm transition-all hover:translate-x-[-2px] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-blue-600" />
          <span>Back to Home</span>
        </button>

        {/* Brand */}
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 border border-white/60">
            <img src={logo} alt="SKILLONIK Logo" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <span className="font-display font-bold text-lg text-slate-900 leading-none">SKILLONIK</span>
            <span className="block text-[8px] font-mono font-bold text-blue-600 uppercase tracking-wider">AI Platform</span>
          </div>
        </div>

        {/* Switch mode shortcut */}
        <div className="text-xs font-semibold text-slate-600 hidden sm:block">
          {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => {
              setMode(mode === 'signin' ? 'signup' : 'signin');
              setErrorMessage('');
            }}
            className="text-blue-600 hover:text-blue-700 font-bold underline cursor-pointer ml-1"
          >
            {mode === 'signin' ? 'Create Account' : 'Sign In'}
          </button>
        </div>
      </div>

      {/* Main Content Split Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Side: Brand Story & Testimonials (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-blue-200/80 shadow-sm text-xs font-mono font-bold text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
            <span>Next-Gen Engineering & Placement Hub</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Unlock Real-Time <br />
            <span className="gradient-text">AI Mentorship &amp; Roadmaps</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Join thousands of engineering students and developers mastering full stack development, AI pipelines, and acing IT placement interviews.
          </p>

          {/* Feature Highlights Grid */}
          <div className="space-y-3 pt-1">
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Live AI Code Mentor</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Instant code architecture debugging, complexity analysis, and verified solutions.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">50+ Industry-Standard Roadmaps</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Curated curricula from MERN full-stack to PyTorch &amp; AWS microservices.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Tier-1 Placement Blueprint</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">DSA patterns, system design questions, and TCS Digital mock test suites.</p>
              </div>
            </div>
          </div>

          

        </div>

        {/* Right Side: Auth Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className={`auth-glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all ${shake ? 'animate-shake' : ''}`}>
            
            {/* Top Mode Selector Tabs */}
            <div className="flex p-1 bg-slate-100/90 rounded-2xl mb-6 relative">
              <button
                type="button"
                onClick={() => {
                  setMode('signin');
                  setErrorMessage('');
                }}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  mode === 'signin'
                    ? 'bg-white text-blue-600 shadow-md shadow-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode('signup');
                  setErrorMessage('');
                }}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-white text-blue-600 shadow-md shadow-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Create Account</span>
              
              </button>
            </div>

            

            {/* Feedback Messages */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-2 animate-fade-in-up">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* ===================== SIGN IN FORM ===================== */}
            {mode === 'signin' && (
              <form onSubmit={handleSignInSubmit} className="space-y-4">
                {/* Email / Username Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address or Username
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={signInEmail}
                      onChange={(e) => setSignInEmail(e.target.value)}
                      placeholder="e.g. balaji@skillonik.dev"
                      className="auth-input"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setForgotEmail(signInEmail);
                        setForgotStep(1);
                        setIsForgotOpen(true);
                      }}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type={showSignInPassword ? 'text' : 'password'}
                      value={signInPassword}
                      onChange={(e) => setSignInPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="auth-input pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignInPassword(!showSignInPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-0.5"
                    >
                      {showSignInPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-xs font-medium text-slate-600">Remember my session</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In to SKILLONIK</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* ===================== SIGN UP FORM ===================== */}
            {mode === 'signup' && (
              <form onSubmit={handleSignUpSubmit} className="space-y-4">
                {/* Full Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={signUpName}
                        onChange={(e) => setSignUpName(e.target.value)}
                        placeholder="Balaji S"
                        className="auth-input"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                        placeholder="balaji@example.com"
                        className="auth-input"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Password & Confirm Password Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type={showSignUpPassword ? 'text' : 'password'}
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                        placeholder="Min 6 characters"
                        className="auth-input pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        {showSignUpPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type={showSignUpPassword ? 'text' : 'password'}
                        value={signUpConfirmPassword}
                        onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                        placeholder="Re-enter password"
                        className="auth-input"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Password Strength Indicator */}
                {signUpPassword && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 animate-fade-in-up">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-slate-600">Password Strength:</span>
                      <span className={strength.textCol}>{strength.label}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${strength.color} transition-all duration-300`} 
                        style={{ width: `${strength.score}%` }} 
                      />
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono pt-0.5">
                      <span className={signUpPassword.length >= 8 ? 'text-emerald-600 font-bold' : ''}>✓ 8+ chars</span>
                      <span className={/[0-9]/.test(signUpPassword) ? 'text-emerald-600 font-bold' : ''}>✓ Numbers</span>
                      <span className={/[A-Z]/.test(signUpPassword) ? 'text-emerald-600 font-bold' : ''}>✓ Uppercase</span>
                    </div>
                  </div>
                )}

                

                
                {/* Terms and Privacy Agreement */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-[11px] text-slate-600 leading-snug">
                      I agree to SKILLONIK's <span className="text-blue-600 font-semibold underline">Terms of Service</span> &amp; <span className="text-blue-600 font-semibold underline">Privacy Policy</span>.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Create Account &amp; Get AI Mentorship</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            </div>
          </div>

      </div>

      {/* Footer Info */}
      <div className="max-w-6xl w-full mx-auto pt-6 text-center text-xs text-slate-400 font-mono">
        <span>&copy; {new Date().getFullYear()} SKILLONIK AI Hub. Encrypted with 256-bit Security.</span>
      </div>

      {/* ===================== FORGOT PASSWORD MODAL ===================== */}
      {isForgotOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-white/90 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsForgotOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
            >
              ✕
            </button>

            {/* Step 1: Request Reset Link / OTP */}
            {forgotStep === 1 && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                  <KeyRound className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl text-slate-900">Reset Your Password</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Enter the email linked to your SKILLONIK account to receive a 6-digit verification code.
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="auth-input-no-icon"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (forgotEmail.includes('@')) {
                      setForgotStep(2);
                      setOtpTimer(45);
                    }
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  Send 6-Digit OTP Code
                </button>
              </div>
            )}

            {/* Step 2: OTP Verification */}
            {forgotStep === 2 && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl text-slate-900">Enter Verification Code</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    We sent a 6-digit code to <strong className="text-slate-800">{forgotEmail || 'your email'}</strong>.
                  </p>
                </div>
                <div className="flex justify-center gap-2">
                  {forgotOtp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-input-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      className="w-10 h-12 text-center font-mono font-bold text-lg rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:outline-none bg-slate-50"
                    />
                  ))}
                </div>
                <div className="text-center text-xs text-slate-500">
                  {otpTimer > 0 ? (
                    <span>Resend code in <strong className="text-blue-600 font-mono">{otpTimer}s</strong></span>
                  ) : (
                    <button 
                      onClick={() => setOtpTimer(45)} 
                      className="text-blue-600 font-bold hover:underline cursor-pointer"
                    >
                      Resend OTP Code
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setForgotStep(3)}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  Verify Code
                </button>
              </div>
            )}

            {/* Step 3: Set New Password */}
            {forgotStep === 3 && (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl text-slate-900">Create New Password</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Choose a strong, secure password for your account.
                  </p>
                </div>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="auth-input-no-icon"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="auth-input-no-icon"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setForgotStep(4)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md cursor-pointer"
                >
                  Update Password &amp; Continue
                </button>
              </div>
            )}

            {/* Step 4: Success Completion */}
            {forgotStep === 4 && (
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">Password Reset Successful!</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Your password has been updated. You can now sign in with your new credentials.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsForgotOpen(false);
                    setMode('signin');
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md cursor-pointer"
                >
                  Return to Sign In
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
