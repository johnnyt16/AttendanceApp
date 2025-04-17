import { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import ClassDetails from './pages/ClassDetails'
import Trends from './pages/Trends'
import Classes from './pages/Classes'
import Students from './pages/Students'
import Layout from './components/Layout'

// Extract LoginForm to separate component to prevent losing focus
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simple demo login - in a real app this would be an API call
    setTimeout(() => {
      if (email === 'admin@school.com' && password === 'password') {
        window.location.href = '/dashboard';
      } else {
        setError('Invalid email or password. Try admin@school.com / password');
      }
      setIsLoading(false);
    }, 800);
  }, [email, password]);

  const handleRegisterClick = () => {
    alert('TODO: switch to register form or page');
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
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="admin@school.com"
                  required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="password"
                  required
              />
              <div className="password-help">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <button
                type="submit"
                className="login-button"
                disabled={isLoading}
            >
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

// Create a placeholder component for routes not yet implemented
const PlaceholderPage = () => (
    <Layout>
      <div style={{padding: "2rem", textAlign: "center"}}>
        <h2>Coming Soon</h2>
        <p>This feature is under development and will be available soon.</p>
      </div>
    </Layout>
);

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/class/:classId" element={<ClassDetails />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/students" element={<Students />} />
        <Route path="/reports" element={<PlaceholderPage />} />
        <Route path="/settings" element={<PlaceholderPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App
