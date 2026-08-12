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
  Layers, 
  ArrowLeft,
  KeyRound,
  RefreshCw
} from 'lucide-react';
import {
  loginUser,
  signupSendOtp,
  signupVerifyOtp,
  forgotSendOtp,
  forgotVerifyOtp,
  resetPassword
} from '../api/authApi';

const CAREER_TRACKS = [
  { id: 'mern', label: 'Full Stack MERN', icon: Layers },
  { id: 'ai-ml', label: 'AI & Machine Learning', icon: Sparkles },
  { id: 'devops', label: 'Cloud & DevOps', icon: Layers },
  { id: 'placement', label: 'TCS / Campus Placement', icon: ShieldCheck },
];

export default function AuthPage({ 
  initialMode = 'signin', 
  onLoginSuccess, 
  onNavigateHome
}) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'

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

  // Signup Email OTP State
  const [showSignupOtp, setShowSignupOtp] = useState(false);
  const [signupOtp, setSignupOtp] = useState(['', '', '', '', '', '']);
  const [signupOtpTimer, setSignupOtpTimer] = useState(300);

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
  const [forgotLoading, setForgotLoading] = useState(false);

  // Countdown timer for Forgot Password OTP
  useEffect(() => {
    let interval = null;
    if (isForgotOpen && forgotStep === 2 && otpTimer > 0) {
      interval = setInterval(() => setOtpTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isForgotOpen, forgotStep, otpTimer]);

  // Signup OTP countdown
  useEffect(() => {
    if (!showSignupOtp || signupOtpTimer <= 0) return;

    const interval = setInterval(() => {
      setSignupOtpTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [showSignupOtp, signupOtpTimer]);

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

  // Sign In Submission
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!signInEmail.trim() || !signInPassword) {
      triggerError('Please enter your email and password.');
      return;
    }

    try {
      setIsLoading(true);

      const result = await loginUser({
        email: signInEmail.trim(),
        password: signInPassword
      });

      // Save JWT
      if (result.token) {
        if (rememberMe) {
          localStorage.setItem('skillonik_token', result.token);
        } else {
          sessionStorage.setItem('skillonik_token', result.token);
        }
      }

      // Save user
      if (result.user) {
        if (rememberMe) {
          localStorage.setItem('skillonik_user', JSON.stringify(result.user));
        } else {
          sessionStorage.setItem('skillonik_user', JSON.stringify(result.user));
        }
      }

      setSuccessMessage('Welcome back! Initializing your AI Mentor workspace...');

      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess(result.user);
        }
      }, 500);

    } catch (err) {
      triggerError(err.message || 'Login failed.');
    } finally {
      setIsLoading(false);
    }
  };

  // Sign Up Submission - sends OTP through backend
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!signUpName.trim()) {
      triggerError('Please enter your full name.');
      return;
    }

    if (!signUpEmail.trim() || !signUpEmail.includes('@')) {
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

    try {
      setIsLoading(true);

      const selectedTrackObj = CAREER_TRACKS.find((t) => t.id === selectedTrack);

      await signupSendOtp({
        name: signUpName.trim(),
        email: signUpEmail.trim(),
        password: signUpPassword,
        track: selectedTrackObj ? selectedTrackObj.label : 'Full Stack MERN',
        experience: experienceLevel
      });

      setSignupOtp(['', '', '', '', '', '']);
      setSignupOtpTimer(300);
      setShowSignupOtp(true);
    } catch (err) {
      triggerError(err.message || 'Unable to send signup OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  // Signup OTP input
  const handleSignupOtpChange = (index, value) => {
    const cleanValue = value.replace(/\D/g, '').slice(-1);
    const updated = [...signupOtp];
    updated[index] = cleanValue;
    setSignupOtp(updated);

    if (cleanValue && index < 5) {
      document.getElementById(`signup-otp-${index + 1}`)?.focus();
    }

    if (!cleanValue && index > 0) {
      document.getElementById(`signup-otp-${index - 1}`)?.focus();
    }
  };

  // Verify signup OTP and create account
  const handleSignupOtpVerify = async () => {
    const otp = signupOtp.join('');

    if (otp.length !== 6) {
      triggerError('Please enter the complete 6-digit OTP.');
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage('');

      const result = await signupVerifyOtp({
        name: signUpName.trim(),
        email: signUpEmail.trim(),
        password: signUpPassword,
        otp,
        track: CAREER_TRACKS.find((t) => t.id === selectedTrack)?.label || 'Full Stack MERN',
        experience: experienceLevel
      });

      if (result.token) {
        localStorage.setItem('skillonik_token', result.token);
      }

      localStorage.setItem('skillonik_user', JSON.stringify(result.user));

      setShowSignupOtp(false);
      setSuccessMessage('Account created successfully! Welcome to SKILLONIK.');

      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess(result.user);
      }, 500);
    } catch (err) {
      triggerError(err.message || 'Invalid or expired OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  // Forgot Password OTP handlers
  const handleOtpChange = (index, value) => {
    const cleanValue = value.replace(/\D/g, '').slice(-1);
    const newOtp = [...forgotOtp];
    newOtp[index] = cleanValue;
    setForgotOtp(newOtp);

    if (cleanValue && index < 5) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    } else if (!cleanValue && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  const handleForgotSendOtp = async () => {
    if (!forgotEmail.trim() || !forgotEmail.includes('@')) {
      triggerError('Please enter a valid email address.');
      return;
    }

    try {
      setForgotLoading(true);
      setErrorMessage('');

      await forgotSendOtp(forgotEmail.trim());

      setForgotOtp(['', '', '', '', '', '']);
      setForgotStep(2);
      setOtpTimer(45);
    } catch (err) {
      triggerError(err.message || 'Unable to send OTP.');
    } finally {
      setForgotLoading(false);
    }
  };

  const handleForgotVerifyOtp = async () => {
    const otp = forgotOtp.join('');

    if (otp.length !== 6) {
      triggerError('Please enter the complete 6-digit OTP.');
      return;
    }

    try {
      setForgotLoading(true);
      setErrorMessage('');

      await forgotVerifyOtp({
        email: forgotEmail.trim(),
        otp
      });

      setForgotStep(3);
    } catch (err) {
      triggerError(err.message || 'Invalid or expired OTP.');
    } finally {
      setForgotLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword.length < 6) {
      triggerError('Password must be at least 6 characters.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      triggerError('Passwords do not match.');
      return;
    }

    const otp = forgotOtp.join('');

    try {
      setForgotLoading(true);
      setErrorMessage('');

      await resetPassword({
        email: forgotEmail.trim(),
        otp,
        new_password: newPassword
      });

      setForgotStep(4);
    } catch (err) {
      triggerError(err.message || 'Unable to reset password.');
    } finally {
      setForgotLoading(false);
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
        
        {/* Left Side: Brand Story (5 cols) */}
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

            {/* ===================== SIGN UP / SIGNUP OTP ===================== */}
            {mode === 'signup' && (
              showSignupOtp ? (
                <div className="space-y-5">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 mt-3">
                      Verify Your Email
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      We sent a 6-digit OTP to
                    </p>

                    <p className="text-sm font-bold text-blue-600">
                      {signUpEmail}
                    </p>
                  </div>

                  <div className="flex justify-center gap-2">
                    {signupOtp.map((digit, index) => (
                      <input
                        key={index}
                        id={`signup-otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleSignupOtpChange(index, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !signupOtp[index] && index > 0) {
                            document.getElementById(`signup-otp-${index - 1}`)?.focus();
                          }
                        }}
                        className="w-10 h-12 text-center font-mono font-bold text-lg rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none bg-slate-50"
                      />
                    ))}
                  </div>

                  <div className="text-center text-xs text-slate-500">
                    {signupOtpTimer > 0 ? (
                      <span>
                        OTP expires in <strong className="text-blue-600 font-mono">{signupOtpTimer}s</strong>
                      </span>
                    ) : (
                      <span className="text-rose-600 font-semibold">
                        OTP expired. Please go back and request a new OTP.
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleSignupOtpVerify}
                    disabled={isLoading || signupOtp.join('').length !== 6 || signupOtpTimer <= 0}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Verifying OTP...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Verify Email &amp; Create Account</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowSignupOtp(false);
                      setSignupOtp(['', '', '', '', '', '']);
                      setErrorMessage('');
                    }}
                    className="w-full text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
                  >
                    ← Back to signup
                  </button>

                </div>
              ) : (
                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                  {/* Full Name & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
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
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
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
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Password</label>
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
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Confirm Password</label>
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

                  {/* Career Track & Experience Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Focus Track</label>
                      <select
                        value={selectedTrack}
                        onChange={(e) => setSelectedTrack(e.target.value)}
                        className="auth-input-no-icon"
                      >
                        {CAREER_TRACKS.map((t) => (
                          <option key={t.id} value={t.id}>{t.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Experience Level</label>
                      <select
                        value={experienceLevel}
                        onChange={(e) => setExperienceLevel(e.target.value)}
                        className="auth-input-no-icon"
                      >
                        <option value="1st / 2nd Year Student">1st / 2nd Year Student</option>
                        <option value="3rd Year Student">3rd Year Student</option>
                        <option value="Final Year Student">Final Year Student</option>
                        <option value="Fresher Graduate">Fresher Graduate</option>
                        <option value="Working Professional">Working Professional</option>
                      </select>
                    </div>
                  </div>

                  {/* Password Strength */}
                  {signUpPassword && (
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-slate-600">Password Strength:</span>
                        <span className={strength.textCol}>{strength.label}</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full ${strength.color} transition-all duration-300`} style={{ width: `${strength.score}%` }} />
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono pt-0.5">
                        <span className={signUpPassword.length >= 8 ? 'text-emerald-600 font-bold' : ''}>✓ 8+ chars</span>
                        <span className={/[0-9]/.test(signUpPassword) ? 'text-emerald-600 font-bold' : ''}>✓ Numbers</span>
                        <span className={/[A-Z]/.test(signUpPassword) ? 'text-emerald-600 font-bold' : ''}>✓ Uppercase</span>
                      </div>
                    </div>
                  )}

                  {/* Terms */}
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

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending OTP...</span>
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
              )
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
              onClick={() => {
                setIsForgotOpen(false);
                setForgotStep(1);
                setForgotOtp(['', '', '', '', '', '']);
                setNewPassword('');
                setConfirmNewPassword('');
                setErrorMessage('');
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Error Message */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                <span>{errorMessage}</span>
              </div>
            )}

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
                  onClick={handleForgotSendOtp}
                  disabled={forgotLoading}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {forgotLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending OTP...</span>
                    </>
                  ) : (
                    <span>Send 6-Digit OTP Code</span>
                  )}
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
                      inputMode="numeric"
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
                      type="button"
                      onClick={handleForgotSendOtp} 
                      className="text-blue-600 font-bold hover:underline cursor-pointer"
                    >
                      Resend OTP Code
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleForgotVerifyOtp}
                  disabled={forgotLoading || forgotOtp.join('').length !== 6}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {forgotLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying Code...</span>
                    </>
                  ) : (
                    <span>Verify Code</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setForgotStep(1);
                    setErrorMessage('');
                  }}
                  className="w-full text-xs text-slate-500 hover:text-slate-700 text-center cursor-pointer"
                >
                  ← Change email address
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
                    Choose a strong, secure password for your account (min 6 characters).
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
                      required
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
                      required
                    />
                  </div>
                </div>
                <button
                  type="button"
                  disabled={forgotLoading}
                  onClick={handleResetPassword}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {forgotLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Updating Password...</span>
                    </>
                  ) : (
                    <span>Update Password &amp; Continue</span>
                  )}
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
                    setForgotStep(1);
                    setForgotOtp(['', '', '', '', '', '']);
                    setNewPassword('');
                    setConfirmNewPassword('');
                    setErrorMessage('');
                    setSuccessMessage('Password reset successfully! Please sign in with your new password.');
                    setMode('signin');
                  }}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md cursor-pointer"
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
