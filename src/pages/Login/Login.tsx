import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../store/slices/authSlice';
import type { RootState } from '../../store/store';

import logo from '../../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('aarav.sharma@example.com');
  const [password, setPassword] = useState('test1234');

  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state: any) => state.auth);
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    dispatch(login({ email, password }));
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      style={{ backgroundColor: 'var(--bg-primary)' }}
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div
        className={`max-w-md w-full p-6 sm:p-8 rounded-xl overflow-hidden transition-all duration-300 ${currentTheme === 'dark'
          ? 'shadow-[0_0_20px_4px_rgba(30,58,138,0.2)]'
          : currentTheme === 'color'
            ? 'shadow-[0_0_20px_4px_rgba(120,53,15,0.2)]'
            : 'shadow-[0_0_20px_4px_rgba(0,0,0,0.1)]'
          }`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="h-12 sm:h-14" />
          </div>

          <h2
            className={`text-xl sm:text-2xl font-bold text-center ${currentTheme === 'color' ? 'text-amber-800' : ''
              }`}
            style={{ color: 'var(--text-primary)' }}
          >
            Login to your account
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm mb-1 font-medium ${currentTheme === 'color' ? 'text-amber-700' : ''
                  }`}
                style={{ color: 'var(--text-primary)' }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition ${currentTheme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500'
                  : currentTheme === 'color'
                    ? 'bg-amber-50 border-amber-200 text-amber-900 focus:ring-amber-500'
                    : 'bg-white border-gray-300 text-gray-900 focus:ring-gray-500'
                  }`}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm mb-1 font-medium ${currentTheme === 'color' ? 'text-amber-700' : ''
                  }`}
                style={{ color: 'var(--text-primary)' }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition ${currentTheme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500'
                  : currentTheme === 'color'
                    ? 'bg-amber-50 border-amber-200 text-amber-900 focus:ring-amber-500'
                    : 'bg-white border-gray-300 text-gray-900 focus:ring-gray-500'
                  }`}
              />
            </div>
          </div>

          {error && (
            <div
              className={`text-sm text-red-600 bg-red-100 p-2 rounded ${currentTheme === 'dark' && 'bg-red-800 text-white'
                }`}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className={`cursor-pointer w-full py-2 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base transition-all ${currentTheme === 'dark'
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : currentTheme === 'color'
                ? 'bg-amber-500 hover:bg-amber-600 text-amber-50'
                : 'bg-gray-700 hover:bg-gray-800 text-white'
              }`}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
