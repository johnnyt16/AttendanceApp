import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ClassDetails from './pages/ClassDetails';
import Trends from './pages/Trends';
import Classes from './pages/Classes';
import Students from './pages/Students';
import Layout from './components/Layout';

const PlaceholderPage = () => (
    <Layout>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Coming Soon</h2>
        <p>This feature is under development and will be available soon.</p>
      </div>
    </Layout>
);

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
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

export default App;
