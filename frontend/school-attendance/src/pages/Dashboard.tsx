import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/Dashboard.css';

// Mock data for the dashboard
const mockData = {
  totalStudents: 325,
  presentToday: 298,
  absentToday: 27,
  attendanceRate: '91.7%',
  recentClasses: [
    { id: '101', name: 'Room 101', grade: '9th', teacher: 'Ms. Johnson', present: 28, absent: 2, time: '9:00 AM', lastScan: '10 mins ago', schedule: 'Monday, Wednesday 9:00 AM - 10:30 AM', status: 'online' },
    { id: '203', name: 'Room 203', grade: '10th', teacher: 'Mr. Wilson', present: 25, absent: 5, time: '10:30 AM', lastScan: '15 mins ago', schedule: 'Tuesday, Thursday 10:30 AM - 12:00 PM', status: 'online' },
    { id: '305', name: 'Room 305', grade: '8th', teacher: 'Mrs. Garcia', present: 30, absent: 0, time: '11:45 AM', lastScan: '5 mins ago', schedule: 'Monday, Friday 11:45 AM - 1:15 PM', status: 'online' },
    { id: '118', name: 'Room 118', grade: '11th', teacher: 'Dr. Martinez', present: 22, absent: 3, time: '1:15 PM', lastScan: '30 mins ago', schedule: 'Wednesday, Friday 1:15 PM - 2:45 PM', status: 'offline' },
    { id: '224', name: 'Room 224', grade: '7th', teacher: 'Ms. Thomas', present: 27, absent: 1, time: '2:00 PM', lastScan: '25 mins ago', schedule: 'Monday, Thursday 2:00 PM - 3:30 PM', status: 'online' },
    { id: '402', name: 'Room 402', grade: '12th', teacher: 'Mr. Edwards', present: 18, absent: 4, time: '3:30 PM', lastScan: '40 mins ago', schedule: 'Tuesday, Friday 3:30 PM - 5:00 PM', status: 'offline' },
  ],
  cameras: [
    { id: 1, location: 'Main Entrance Hall', status: 'online', lastScan: '2 mins ago', studentsScanned: 42 },
    { id: 2, location: 'North Wing Hallway', status: 'online', lastScan: '5 mins ago', studentsScanned: 78 },
    { id: 3, location: 'Classroom 101', status: 'online', lastScan: '8 mins ago', studentsScanned: 30 },
    { id: 4, location: 'East Entrance', status: 'offline', lastScan: '1 hour ago', studentsScanned: 103 },
    { id: 5, location: 'Classroom 203', status: 'online', lastScan: '10 mins ago', studentsScanned: 28 },
    { id: 6, location: 'Classroom 305', status: 'online', lastScan: '3 mins ago', studentsScanned: 31 }
  ]
};

const Dashboard = () => {
  const [data, setData] = useState(mockData);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClasses, setFilteredClasses] = useState(mockData.recentClasses);
  
  // Apply search filter
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredClasses(mockData.recentClasses);
      return;
    }
    
    const term = searchTerm.toLowerCase().trim();
    const result = mockData.recentClasses.filter(c => 
      c.name.toLowerCase().includes(term) || 
      c.teacher.toLowerCase().includes(term) || 
      c.grade.toLowerCase().includes(term) ||
      c.id.toLowerCase().includes(term)
    );
    
    setFilteredClasses(result);
  }, [searchTerm]);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const resetSearch = () => {
    setSearchTerm('');
  };
  
  const openInfoModal = (classItem) => {
    setSelectedClass(classItem);
    setShowInfoModal(true);
  };
  
  return (
    <Layout>
      <div className="dashboard-content">
        <section className="welcome-section">
          <h2>Welcome to Westfield Academy Dashboard</h2>
          <p>Here's today's attendance summary:</p>
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
                  onChange={handleSearchChange}
                  placeholder="Search by classroom, teacher, grade, or ID..."
                  className="search-input"
                />
                {searchTerm && (
                  <button className="clear-search" onClick={resetSearch}>
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
                          onClick={() => openInfoModal(classItem)}
                          title="View class information"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
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
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>{selectedClass.name} Details</h3>
                  <button className="close-modal" onClick={() => setShowInfoModal(false)}>×</button>
                </div>
                <div className="modal-body">
                  <div className="class-details">
                    <div className="detail-row">
                      <span className="detail-label">Teacher:</span>
                      <span className="detail-value">{selectedClass.teacher}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Grade:</span>
                      <span className="detail-value">{selectedClass.grade}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Schedule:</span>
                      <span className="detail-value">{selectedClass.schedule}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Present:</span>
                      <span className="detail-value">{selectedClass.present}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Absent:</span>
                      <span className="detail-value">{selectedClass.absent}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Status:</span>
                      <span className={`detail-value ${selectedClass.status}`}>{selectedClass.status}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Last Scan:</span>
                      <span className="detail-value">{selectedClass.lastScan}</span>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Link to={`/class/${selectedClass.id}`} className="btn-primary">
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          )}

          <section className="camera-status">
            <div className="section-header">
              <h2>Camera Status</h2>
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
      </div>
    </Layout>
  );
};

export default Dashboard; 