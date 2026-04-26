import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Lock, Eye, EyeOff, Sparkles, UtensilsCrossed, User, Mail, ArrowLeft, X, ArrowRight } from 'lucide-react';
import signInImage from "../assets/images/GOJ_3289.jpg"
import signUpImage from "../assets/images/GOJ_7329.jpg"
export type AuthViewState = 'signup' | 'signin' | 'forgot-password' | 'otp' | 'reset-password';
const OTP_LENGTH = 5;
const createEmptyOtp = () => Array.from({ length: OTP_LENGTH }, () => '');
const createEmptySignInForm = () => ({
  username: '',
  password: '',
});
const createEmptySignUpForm = () => ({
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  password: '',
  confirmPassword: '',
});
const createEmptyResetPasswordForm = () => ({
  password: '',
  confirmPassword: '',
});

export default function AuthPage({
  onBack,
  initialView = 'signin',
}: {
  onBack: () => void;
  initialView?: AuthViewState;
}) {
  const [viewState, setViewState] = useState<AuthViewState>(initialView);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(createEmptyOtp);
  const [signInForm, setSignInForm] = useState(createEmptySignInForm);
  const [signUpForm, setSignUpForm] = useState(createEmptySignUpForm);
  const [resetPasswordForm, setResetPasswordForm] = useState(createEmptyResetPasswordForm);
  const [showPassword, setShowPassword] = useState({
    signIn: false,
    signUp: false,
    signUpConfirm: false,
    reset: false,
    resetConfirm: false,
  });
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    setViewState(initialView);
    setShowSuccessModal(false);
    setOtpDigits(createEmptyOtp());
    setResetPasswordForm(createEmptyResetPasswordForm());
  }, [initialView]);

  useEffect(() => {
    if (viewState === 'otp') {
      setOtpDigits(createEmptyOtp());
    }
  }, [viewState]);

  // Helper to determine what is showing to manage transitions
  const isSignIn = viewState === 'signin';
  const isSignUp = viewState === 'signup';
  const isForgotPassword = viewState === 'forgot-password';
  const isOtp = viewState === 'otp';
  const isResetPassword = viewState === 'reset-password';

  const handleOtpChange = (index: number, value: string) => {
    const nextDigit = value.replace(/\D/g, '').slice(-1);

    setOtpDigits((current) => {
      const next = [...current];
      next[index] = nextDigit;
      return next;
    });

    if (nextDigit && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }

    if (event.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pastedDigits = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, OTP_LENGTH)
      .split('');

    if (pastedDigits.length === 0) {
      return;
    }

    setOtpDigits(createEmptyOtp().map((_, index) => pastedDigits[index] ?? ''));
    otpRefs.current[Math.min(pastedDigits.length, OTP_LENGTH) - 1]?.focus();
  };

  const updateSignInField = (field: keyof typeof signInForm, value: string) => {
    setSignInForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateSignUpField = (field: keyof typeof signUpForm, value: string) => {
    setSignUpForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateResetPasswordField = (field: keyof typeof resetPasswordForm, value: string) => {
    setResetPasswordForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const togglePasswordVisibility = (field: keyof typeof showPassword) => {
    setShowPassword((current) => ({
      ...current,
      [field]: !current[field],
    }));
  };

  return (
    <div className="flex-1 bg-[#F4F4F5] p-4 md:p-6 lg:p-8 flex items-center justify-center font-sans relative w-full min-h-[calc(100vh-100px)]">
      
      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={() => setShowSuccessModal(false)}></div>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-md relative z-10 shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-[0.5rem] p-1.5 transition-colors"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className="text-center mt-4">
              {/* Check Icon Setup */}
              <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible absolute inset-0">
                   <circle cx="50" cy="50" r="42" stroke="#F4CA9E" strokeWidth="6" fill="none" />
                   <path d="M 30,52 L 46,68 L 86,22" fill="none" stroke="#E86F24" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="text-2xl font-serif font-medium text-[#E86F24] mb-3">Password Changed</h3>
              <p className="text-[12px] text-gray-400 max-w-[200px] mx-auto leading-relaxed mb-8">
                Your password has been changed successfully!
              </p>

              <button 
                onClick={() => {
                  setShowSuccessModal(false);
                  setViewState('signin');
                }}
                className="bg-[#E86F24] hover:bg-[#d4621c] text-white px-8 py-3 rounded-xl font-medium transition-colors text-[13px] flex items-center justify-center mx-auto gap-2 w-[80%]"
              >
                Return to Login <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back button to return to Landing Page */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 md:top-10 md:left-10 z-50 bg-white p-3 rounded-full shadow-md text-gray-600 hover:text-[#E86F24] transition-colors"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-4 md:gap-6 items-stretch justify-center h-full min-h-[90vh]">
        
        {/* Left Panel - Form */}
        <div className="w-full md:w-1/2 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center relative isolation-auto overflow-hidden bg-gradient-to-b from-[#FFF5F0] to-white p-8 lg:p-12">
          <div className="w-full max-w-[400px] flex flex-col items-center mx-auto transition-all duration-300">
            {/* Logo */}
            <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center mb-6 text-[#E86F24] border border-orange-50">
              <UtensilsCrossed size={28} strokeWidth={1.5} />
              <span className="text-[8px] font-bold tracking-[0.2em] mt-1 text-gray-800 uppercase">Varivo</span>
            </div>

            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-serif text-gray-900 tracking-tight font-medium transition-all">
                {isSignIn && "Sign In to your account"}
                {isSignUp && "Create your account"}
                {isForgotPassword && "Forgot Password?"}
                {isOtp && "Please Check Your Email"}
                {isResetPassword && "Enter New password"}
              </h1>
              
              {/* Subheading only for forgot password */}
              {isForgotPassword && (
                <p className="text-[12px] text-gray-400 mt-3 font-medium animate-in fade-in slide-in-from-top-2">
                  Just enter your email to receive password reset instructions
                </p>
              )}
              {isResetPassword && (
                <p className="text-[12.5px] text-gray-400 mt-2 font-medium animate-in fade-in slide-in-from-top-2">
                  Your OTP has been verified, please enter new password.
                </p>
              )}
            </div>

            {/* Form */}
            <form className="w-full space-y-4" onSubmit={e => {
              e.preventDefault();
              if (isForgotPassword) setViewState('otp');
              if (isOtp) setViewState('reset-password');
              if (isResetPassword) setShowSuccessModal(true);
            }}>
              
              {/* Sign Up Specific Fields */}
              {isSignUp && (
                <>
                  <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-top-2">
                    <div className="flex-1 space-y-1.5">
                      <label className="text-[13px] font-medium text-gray-700">First Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your first name"
                        value={signUpForm.firstName}
                        onChange={(event) => updateSignUpField('firstName', event.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-400" 
                      />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <label className="text-[13px] font-medium text-gray-700">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your last name"
                        value={signUpForm.lastName}
                        onChange={(event) => updateSignUpField('lastName', event.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-400" 
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                    <label className="text-[13px] font-medium text-gray-700">Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E86F24]">
                        <MapPin size={18} strokeWidth={2} />
                      </div>
                      <input 
                        type="text"
                        placeholder="Enter your address"
                        value={signUpForm.address}
                        onChange={(event) => updateSignUpField('address', event.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-400" 
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                    <label className="text-[13px] font-medium text-gray-700">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E86F24]">
                        <Phone size={18} strokeWidth={2} />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Enter your phone number"
                        value={signUpForm.phone}
                        onChange={(event) => updateSignUpField('phone', event.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-400" 
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Sign In Specific Field */}
              {isSignIn && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                  <label className="text-[13px] font-medium text-gray-700">User Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E86F24]">
                      <User size={18} strokeWidth={2} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter your username"
                      value={signInForm.username}
                      onChange={(event) => updateSignInField('username', event.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-400" 
                    />
                  </div>
                </div>
              )}

              {/* Forgot Password Specific Field */}
              {isForgotPassword && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                  <label className="text-[13px] font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E86F24]">
                      <Mail size={18} strokeWidth={2} />
                    </div>
                    <input 
                      type="email" 
                      placeholder="abw@gmail.com" 
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E86F24] ring-1 ring-[#E86F24] outline-none transition-all text-sm placeholder:text-gray-400" 
                    />
                  </div>
                </div>
              )}

              {/* OTP Validation Fields */}
              {isOtp && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-2 w-full pt-2">
                  <div className="bg-[#FFF2E8] border-none rounded-xl p-4 flex gap-3 items-center justify-center text-left sm:justify-start">
                    <div className="w-4 h-4 rounded-full bg-[#E86F24] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">!</div>
                    <p className="text-[12px] text-[#E86F24] font-medium leading-relaxed">
                      We have sent you an OTP on your email address, please enter it here to reset the password.
                    </p>
                  </div>
                  
                  <div className="flex justify-between md:justify-center gap-3 md:gap-5 max-w-[340px] mx-auto pb-2">
                    {otpDigits.map((digit, i) => (
                      <input
                        key={i}
                        type="text"
                        inputMode="numeric"
                        autoComplete={i === 0 ? 'one-time-code' : 'off'}
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onChange={(event) => handleOtpChange(i, event.target.value)}
                        onKeyDown={(event) => handleOtpKeyDown(i, event)}
                        onPaste={handleOtpPaste}
                        ref={(node) => {
                          otpRefs.current[i] = node;
                        }}
                        className={`w-[52px] h-[52px] md:w-14 md:h-14 text-center text-lg font-semibold rounded-xl border outline-none transition-all ${
                          digit ? 'border-[#E86F24] text-[#E86F24]' : 'border-gray-200 text-gray-900 focus:border-[#E86F24]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Reset Password Fields */}
              {isResetPassword && (
                <div className="space-y-5 animate-in fade-in slide-in-from-top-2 w-full pt-1.5 pb-2">
                  <div className="space-y-1.5 relative z-10 transition-all">
                    <label className="text-[13px] font-bold text-gray-800 tracking-wide">New Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword.reset ? 'text' : 'password'}
                        placeholder="Enter new password" 
                        value={resetPasswordForm.password}
                        onChange={(event) => updateResetPasswordField('password', event.target.value)}
                        className="w-full px-4 pr-10 py-[14px] rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-[13px] placeholder:text-gray-400" 
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('reset')}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword.reset ? (
                          <Eye size={18} strokeWidth={1.5} />
                        ) : (
                          <EyeOff size={18} strokeWidth={1.5} />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 relative z-10 transition-all">
                    <label className="text-[13px] font-bold text-gray-800 tracking-wide">Confirm Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword.resetConfirm ? 'text' : 'password'}
                        placeholder="Confirm new password" 
                        value={resetPasswordForm.confirmPassword}
                        onChange={(event) => updateResetPasswordField('confirmPassword', event.target.value)}
                        className="w-full px-4 pr-10 py-[14px] rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-[13px] placeholder:text-gray-400" 
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility('resetConfirm')}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        {showPassword.resetConfirm ? (
                          <Eye size={18} strokeWidth={1.5} />
                        ) : (
                          <EyeOff size={18} strokeWidth={1.5} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Password Field (Sign In & Sign Up) */}
              {(isSignIn || isSignUp) && (
                <div className="space-y-1.5 relative z-10 transition-all">
                  <div className="flex justify-between items-center">
                    <label className="text-[13px] font-medium text-gray-700">Password</label>
                    {isSignIn && (
                      <button 
                        type="button" 
                        onClick={() => setViewState('forgot-password')}
                        className="text-[11px] text-gray-400 hover:text-[#E86F24] transition-colors"
                      >
                        Forgot Password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E86F24]">
                      <Lock size={18} strokeWidth={2} />
                    </div>
                    <input 
                      type={isSignIn ? (showPassword.signIn ? 'text' : 'password') : (showPassword.signUp ? 'text' : 'password')}
                      placeholder="••••••••••••" 
                      value={isSignIn ? signInForm.password : signUpForm.password}
                      onChange={(event) => {
                        if (isSignIn) {
                          updateSignInField('password', event.target.value);
                          return;
                        }
                        updateSignUpField('password', event.target.value);
                      }}
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" 
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility(isSignIn ? 'signIn' : 'signUp')}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {((isSignIn && showPassword.signIn) || (isSignUp && showPassword.signUp)) ? (
                        <Eye size={18} strokeWidth={1.5} />
                      ) : (
                        <EyeOff size={18} strokeWidth={1.5} />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Confirm Password (Only for Sign Up) */}
              {isSignUp && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                  <label className="text-[13px] font-medium text-gray-700">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E86F24]">
                      <Lock size={18} strokeWidth={2} />
                    </div>
                    <input 
                      type={showPassword.signUpConfirm ? 'text' : 'password'}
                      placeholder="••••••••••••" 
                      value={signUpForm.confirmPassword}
                      onChange={(event) => updateSignUpField('confirmPassword', event.target.value)}
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200/80 outline-none focus:border-[#E86F24] focus:ring-1 focus:ring-[#E86F24] transition-all text-sm placeholder:text-gray-300" 
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility('signUpConfirm')}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showPassword.signUpConfirm ? (
                        <Eye size={18} strokeWidth={1.5} />
                      ) : (
                        <EyeOff size={18} strokeWidth={1.5} />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Submit */}
              <div className="pt-4 transition-all">
                <button type="submit" className="w-full bg-[#E86F24] hover:bg-[#d4621c] text-white py-3.5 rounded-xl font-medium transition-colors text-[13px] shadow-sm">
                  {isSignIn && "Sign In"}
                  {isSignUp && "Sign up"}
                  {isForgotPassword && "Send Email"}
                  {isOtp && "Verify"}
                  {isResetPassword && "Change Password"}
                </button>
              </div>
            </form>

            {/* Bottom Links */}
            <p className="mt-8 text-[13px] text-gray-400 transition-all text-center pb-2">
              {isSignIn && (
                <>Don't have an account? <button type="button" onClick={() => setViewState('signup')} className="text-[#E86F24] font-semibold hover:underline ml-1">Sign Up</button></>
              )}
              {isSignUp && (
                <>Already have an account? <button type="button" onClick={() => setViewState('signin')} className="text-[#E86F24] font-semibold hover:underline ml-1">Sign In</button></>
              )}
              {isForgotPassword && (
                <>Don't have an account? <button type="button" onClick={() => setViewState('signup')} className="text-[#E86F24] font-semibold hover:underline ml-1">Create Account</button></>
              )}
              {isOtp && (
                <>Don't have an account? <button type="button" onClick={() => setViewState('signup')} className="text-[#E86F24] font-semibold hover:underline ml-1">Create Account</button></>
              )}
              {isResetPassword && (
                <>Don't have an account? <button type="button" onClick={() => setViewState('signup')} className="text-[#E86F24] font-semibold hover:underline ml-1">Create Account</button></>
              )}
            </p>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="hidden md:block w-full md:w-1/2 relative rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] min-h-[600px] bg-stone-900 group">
          {/* Subtle scale effect when switching images to make transition better */}
          
          <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: isSignIn ? 1 : 0 }}>
            {/* Sign In Image */}
            <img
              src={signInImage}
              alt="Artisan Bread"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          
          <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: isSignUp ? 1 : 0 }}>
            {/* Sign Up Image */}
            <img
              src={signUpImage}
              alt="Traditional Food"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: isForgotPassword ? 1 : 0 }}>
            {/* Forgot Password Image */}
            <img
              src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80"
              alt="Traditional Meat Stew"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: isOtp ? 1 : 0 }}>
            {/* OTP Image */}
            <img
              src="https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=1200&q=80"
              alt="Spaghetti Bolognese"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: isResetPassword ? 1 : 0 }}>
            {/* Reset Password Image */}
            <img
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80"
              alt="Traditional Pasta Dish"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          {/* Content overlay */}
          <div className="absolute bottom-12 left-10 right-10 pr-8 z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.2] relative">
              <Sparkles className="absolute -top-8 right-16 text-yellow-100 opacity-80" size={20} fill="currentColor" />
              Fresh, traditional dishes <br/>
              <span className="text-[#E86F24]">prepared</span> daily
              <Sparkles className="absolute bottom-1 -right-8 text-white opacity-90" size={24} fill="currentColor" />
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}
