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

interface DashboardData {
  totalStudents: number;
  presentToday: number;
  absentToday: number;
  attendanceRate: string;
  recentClasses: ClassInfo[];
  // cameras: optional for now
}

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [filteredClasses, setFilteredClasses] = useState<ClassInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${import.meta.env.VITE_API_URL}/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await res.json();
        setData(json);
        setFilteredClasses(json.recentClasses);
      } catch (err) {
        console.error('Failed to load dashboard data', err);
      }
    };

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

  if (!data) {
    return (
        <Layout>
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading dashboard...</p>
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
        </div>
      </Layout>
  );
};

export default Dashboard;
