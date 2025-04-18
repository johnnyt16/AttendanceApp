import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/Dashboard.css';

interface ClassInfo {
  id: string;
  name: string;
  teacher: string;
  present: number;
  absent: number;
  lastScan: string;
  status: 'online' | 'offline';
}

interface CameraInfo {
  id: string;
  location: string;
  status: 'online' | 'offline';
  lastScan: string;
  studentsScanned: number;
}

interface DashboardData {
  totalStudents: number;
  presentToday: number;
  absentToday: number;
  attendanceRate: string;
  recentClasses: ClassInfo[];
  cameras: CameraInfo[];
}

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [filteredClasses, setFilteredClasses] = useState<ClassInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json: DashboardData = await res.json();
      setData(json);
      setFilteredClasses(json.recentClasses);
    } catch (err) {
      console.error('Failed to load dashboard data', err);
      setError('Failed to load dashboard data. Please try again.');
      setData(null);
      setFilteredClasses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;
    const term = searchTerm.toLowerCase().trim();

    if (!term) {
      setFilteredClasses(data.recentClasses);
      return;
    }

    const filtered = data.recentClasses.filter((c) =>
        c.name.toLowerCase().includes(term) ||
        c.teacher.toLowerCase().includes(term) ||
        c.id.toLowerCase().includes(term)
    );
    setFilteredClasses(filtered);
  }, [searchTerm, data]);

  if (loading) {
    return (
        <Layout>
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading dashboard...</p>
          </div>
        </Layout>
    );
  }

  if (error) {
    return (
        <Layout>
          <div className="error-message">
            <h2>Dashboard Error</h2>
            <p>{error}</p>
            <button onClick={fetchData} className="retry-button">
              Try Again
            </button>
          </div>
        </Layout>
    );
  }

  if (!data) {
    return (
        <Layout>
          <div className="error-message">
            <h2>No data available</h2>
            <p>Unable to fetch dashboard data.</p>
          </div>
        </Layout>
    );
  }

  return (
      <Layout>
        <div className="dashboard-content">
          <section className="welcome-section">
            <h2>Welcome to Your Dashboard</h2>
            <p>Here’s today’s attendance summary:</p>
          </section>

          <div className="dashboard-grid">
            <section className="stats-overview">
              <div className="stat-card">
                <h3>Total Students</h3>
                <p className="stat-value">{data.totalStudents}</p>
              </div>
              <div className="stat-card">
                <h3>Present Today</h3>
                <p className="stat-value present">{data.presentToday}</p>
              </div>
              <div className="stat-card">
                <h3>Absent Today</h3>
                <p className="stat-value absent">{data.absentToday}</p>
              </div>
              <div className="stat-card">
                <h3>Attendance Rate</h3>
                <p className="stat-value">{data.attendanceRate}</p>
              </div>
            </section>

            <section className="recent-classes">
              <div className="section-header">
                <h2>Recent Class Attendance</h2>
                <Link to="/classes" className="view-all">View All Classes</Link>
              </div>

              <div className="search-container">
                <div className="search-bar">
                  <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search by class name, teacher, or ID..."
                      className="search-input"
                  />
                  {searchTerm && (
                      <button className="clear-search" onClick={() => setSearchTerm('')}>
                        ×
                      </button>
                  )}
                </div>
              </div>

              <div className="class-table">
                <table>
                  <thead>
                  <tr>
                    <th>Classroom</th>
                    <th>Present</th>
                    <th>Absent</th>
                    <th>Status</th>
                    <th>Last Scan</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {filteredClasses.map((classItem) => (
                      <tr key={classItem.id}>
                        <td>{classItem.name}</td>
                        <td>{classItem.present}</td>
                        <td>{classItem.absent}</td>
                        <td>
                        <span className={`status-indicator ${classItem.status}`}>
                          {classItem.status}
                        </span>
                        </td>
                        <td>{classItem.lastScan}</td>
                        <td className="table-actions">
                          <button
                              className="info-btn"
                              onClick={() => {
                                setSelectedClass(classItem);
                                setShowInfoModal(true);
                              }}
                          >
                            ℹ️
                          </button>
                          <Link to={`/class/${classItem.id}`} className="view-btn">
                            View
                          </Link>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </section>

            {showInfoModal && selectedClass && (
                <div className="modal-overlay" onClick={() => setShowInfoModal(false)}>
                  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                      <h3>{selectedClass.name} Details</h3>
                      <button className="close-modal" onClick={() => setShowInfoModal(false)}>×</button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Teacher:</strong> {selectedClass.teacher}</p>
                      <p><strong>Present:</strong> {selectedClass.present}</p>
                      <p><strong>Absent:</strong> {selectedClass.absent}</p>
                      <p><strong>Status:</strong> {selectedClass.status}</p>
                      <p><strong>Last Scan:</strong> {selectedClass.lastScan}</p>
                    </div>
                    <div className="modal-footer">
                      <Link to={`/class/${selectedClass.id}`} className="btn-primary">
                        View Full Details
                      </Link>
                    </div>
                  </div>
                </div>
            )}
          </div>

          <section className="camera-status">
            <div className="section-header">
              <h2>Cameras</h2>
            </div>
            <div className="camera-grid">
              {data.cameras.map((camera) => (
                  <div key={camera.id} className={`camera-card ${camera.status}`}>
                    <div className="camera-header">
                      <h3>{camera.location}</h3>
                      <span className={`status-indicator ${camera.status}`}>
                    {camera.status}
                  </span>
                    </div>
                    <div className="camera-details">
                      <div className="detail-row">
                        <span>Last Scan:</span>
                        <span>{camera.lastScan}</span>
                      </div>
                      <div className="detail-row">
                        <span>Students Scanned:</span>
                        <span>{camera.studentsScanned}</span>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
  );
};

export default Dashboard;
