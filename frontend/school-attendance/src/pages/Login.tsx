import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../api';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const data = await apiFetch<{
        token: string;
        user: { id: string; name: string; email: string; role: 'admin' | 'teacher' };
      }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/dashboard');
    } catch {
      setError('Server error');
    } finally {
      setIsLoading(false);
    }
  }, [email, password, navigate]);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h1>AttendEase</h1>
              <p>Sign in to manage classroom attendance</p>
            </div>

            {error && (
                <div className="error-alert">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="admin@school.com" required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="password" required
                />
                <div className="password-help">
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="login-button" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>

              <div className="register-link">
                <button onClick={handleRegisterClick}>Don't have an account? Register</button>
              </div>
            </form>

            <div className="login-footer">
              <p>© 2023 AttendEase</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
