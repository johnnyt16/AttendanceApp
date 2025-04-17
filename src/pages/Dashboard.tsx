import { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

// Mock data - replace with actual API calls
const mockStats = {
  totalStudents: 325,
  presentToday: 298,
  absentToday: 27,
  attendanceRate: '91.7%',
  recentClasses: [
    { id: 1, name: 'Class 9A', present: 28, absent: 2, time: '9:00 AM' },
    { id: 2, name: 'Class 10B', present: 25, absent: 5, time: '10:30 AM' },
    { id: 3, name: 'Class 8C', present: 30, absent: 0, time: '11:45 AM' },
    { id: 4, name: 'Class 11D', present: 22, absent: 3, time: '1:15 PM' },
  ],
};

const Dashboard = () => {
  const [stats, setStats] = useState(mockStats);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // You would fetch actual data here
    // Example:
    // const fetchData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch('/api/dashboard-stats');
    //     const data = await response.json();
    //     setStats(data);
    //   } catch (error) {
    //     console.error('Error fetching dashboard data:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>School Attendance Dashboard</h1>
        <div className="user-controls">
          <span>Welcome, Admin</span>
          <button onClick={() => window.location.href = '/login'}>Logout</button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="attendance-overview">
          <h2>Today's Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Students</h3>
              <p>{stats.totalStudents}</p>
            </div>
            <div className="stat-card">
              <h3>Present Today</h3>
              <p>{stats.presentToday}</p>
            </div>
            <div className="stat-card">
              <h3>Absent Today</h3>
              <p>{stats.absentToday}</p>
            </div>
            <div className="stat-card">
              <h3>Attendance Rate</h3>
              <p>{stats.attendanceRate}</p>
            </div>
          </div>
        </section>

        <section className="recent-classes">
          <div className="section-header">
            <h2>Recent Class Attendance</h2>
            <button onClick={() => window.location.href = '/classes'}>View All Classes</button>
          </div>
          
          <div className="classes-table">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentClasses.map((classItem) => (
                  <tr key={classItem.id}>
                    <td>{classItem.name}</td>
                    <td>{classItem.present}</td>
                    <td>{classItem.absent}</td>
                    <td>{classItem.time}</td>
                    <td>
                      <button 
                        className="view-button"
                        onClick={() => window.location.href = `/class/${classItem.id}`}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button onClick={() => window.location.href = '/attendance/new'}>Take Attendance</button>
            <button onClick={() => window.location.href = '/reports'}>Generate Reports</button>
            <button onClick={() => window.location.href = '/students'}>Manage Students</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard; 