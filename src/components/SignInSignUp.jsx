import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SignInSignUp = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-4 animate-pop"
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 rounded-l-full font-semibold transition-all duration-300 ${isSignIn ? 'bg-primary text-white' : 'bg-gray-100 text-primary hover:bg-primary hover:text-white'}`}
              onClick={() => setIsSignIn(true)}
            >
              Sign In
            </button>
            <button
              className={`px-4 py-2 rounded-r-full font-semibold transition-all duration-300 ${!isSignIn ? 'bg-primary text-white' : 'bg-gray-100 text-primary hover:bg-primary hover:text-white'}`}
              onClick={() => setIsSignIn(false)}
            >
              Sign Up
            </button>
          </div>
          <motion.form
            key={isSignIn ? 'sign-in' : 'sign-up'}
            initial={{ opacity: 0, x: isSignIn ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isSignIn ? 40 : -40 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4"
            onSubmit={e => e.preventDefault()}
          >
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-primary text-white rounded-xl py-3 font-bold text-lg shadow-md hover:bg-brand-dark transition-all duration-300"
            >
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
            {isSignIn && (
              <div className="text-right text-sm mt-1">
                <a href="#" className="text-primary hover:underline">Forgot password?</a>
              </div>
            )}
          </motion.form>
          <div className="mt-6 text-center text-gray-500 text-sm">
            {isSignIn ? (
              <>
                Don&apos;t have an account?{' '}
                <button className="text-primary hover:underline font-semibold" onClick={() => setIsSignIn(false)}>
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button className="text-primary hover:underline font-semibold" onClick={() => setIsSignIn(true)}>
                  Sign In
                </button>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SignInSignUp; 