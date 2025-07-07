'use client';

import { useState } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  success: boolean;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://beamyiradat.adauntukkamu.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: LoginResponse = await response.json();
      
      if (response.ok) {
        setMessage('Login successful!');
      } else {
        setMessage(data?.message || 'Login failed. Please try again.');
      }
    } catch {
      setMessage('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-brand-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-brand-600 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors duration-200 placeholder-brand-400"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-brand-700 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-brand-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors duration-200 placeholder-brand-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>

            {message && (
              <div className={`text-center text-sm p-3 rounded-lg ${
                message.includes('successful') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message}
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
                          <p className="text-sm text-brand-600">
                Don&apos;t have an account?{' '}
                <a href="/register" className="font-medium text-brand-500 hover:text-brand-600 transition-colors duration-200">
                  Sign up here
                </a>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
