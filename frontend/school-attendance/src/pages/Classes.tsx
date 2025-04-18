import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/Classes.css';
import { apiFetch } from '../api';

// Interface for class data
interface ClassItem {
  id: string;
  name: string;
  grade: string;
  teacher: string;
  schedule: string;
  present: number;
  absent: number;
  total: number;
  attendanceRate: string;
  lastScan: string;
  status: 'online' | 'offline';
}

// Mock data for all classes
const mockClasses: ClassItem[] = [
  { id: '101', name: 'Room 101', grade: '9th', teacher: 'Ms. Johnson', present: 28, absent: 2, total: 30, attendanceRate: '93.3%', schedule: 'Monday, Wednesday 9:00 AM - 10:30 AM', lastScan: '10 mins ago', status: 'online' },
  { id: '102', name: 'Room 102', grade: '9th', teacher: 'Mr. Anderson', present: 25, absent: 5, total: 30, attendanceRate: '83.3%', schedule: 'Monday, Wednesday 11:00 AM - 12:30 PM', lastScan: '15 mins ago', status: 'online' },
  { id: '203', name: 'Room 203', grade: '10th', teacher: 'Mr. Wilson', present: 25, absent: 5, total: 30, attendanceRate: '83.3%', schedule: 'Tuesday, Thursday 10:30 AM - 12:00 PM', lastScan: '5 mins ago', status: 'online' },
  { id: '204', name: 'Room 204', grade: '10th', teacher: 'Ms. Parker', present: 27, absent: 3, total: 30, attendanceRate: '90.0%', schedule: 'Tuesday, Thursday 1:00 PM - 2:30 PM', lastScan: '20 mins ago', status: 'offline' },
  { id: '305', name: 'Room 305', grade: '8th', teacher: 'Mrs. Garcia', present: 30, absent: 0, total: 30, attendanceRate: '100.0%', schedule: 'Monday, Friday 11:45 AM - 1:15 PM', lastScan: '30 mins ago', status: 'online' },
  { id: '306', name: 'Room 306', grade: '8th', teacher: 'Mr. Lewis', present: 26, absent: 4, total: 30, attendanceRate: '86.7%', schedule: 'Monday, Friday 2:00 PM - 3:30 PM', lastScan: '45 mins ago', status: 'offline' },
  { id: '118', name: 'Room 118', grade: '11th', teacher: 'Dr. Martinez', present: 22, absent: 3, total: 25, attendanceRate: '88.0%', schedule: 'Wednesday, Friday 1:15 PM - 2:45 PM', lastScan: '1 hour ago', status: 'offline' },
  { id: '119', name: 'Room 119', grade: '11th', teacher: 'Ms. Thompson', present: 23, absent: 2, total: 25, attendanceRate: '92.0%', schedule: 'Wednesday, Friday 9:00 AM - 10:30 AM', lastScan: '2 hours ago', status: 'online' },
  { id: '224', name: 'Room 224', grade: '7th', teacher: 'Ms. Thomas', present: 27, absent: 1, total: 28, attendanceRate: '96.4%', schedule: 'Monday, Thursday 2:00 PM - 3:30 PM', lastScan: '25 mins ago', status: 'online' },
  { id: '225', name: 'Room 225', grade: '7th', teacher: 'Mr. Rodriguez', present: 24, absent: 4, total: 28, attendanceRate: '85.7%', schedule: 'Monday, Thursday 9:30 AM - 11:00 AM', lastScan: '35 mins ago', status: 'online' },
  { id: '402', name: 'Room 402', grade: '12th', teacher: 'Mr. Edwards', present: 18, absent: 4, total: 22, attendanceRate: '81.8%', schedule: 'Tuesday, Friday 3:30 PM - 5:00 PM', lastScan: '40 mins ago', status: 'offline' },
  { id: '403', name: 'Room 403', grade: '12th', teacher: 'Dr. Patel', present: 20, absent: 2, total: 22, attendanceRate: '90.9%', schedule: 'Tuesday, Friday 1:00 PM - 2:30 PM', lastScan: '50 mins ago', status: 'online' },
];

const Classes = () => {
  const [classes, setClasses] = useState<ClassItem[]>(mockClasses);
  const [filteredClasses, setFilteredClasses] = useState<ClassItem[]>(mockClasses);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    grade: '',
    status: ''
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch<ClassItem[]>('/classes');
        setClasses(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter classes based on search and filters
  useEffect(() => {
    let result = [...classes];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(c => 
        c.name.toLowerCase().includes(term) || 
        c.teacher.toLowerCase().includes(term) || 
        c.id.toLowerCase().includes(term)
      );
    }
    
    // Apply grade filter
    if (filters.grade) {
      result = result.filter(c => c.grade === filters.grade);
    }
    
    // Apply status filter
    if (filters.status) {
      result = result.filter(c => c.status === filters.status);
    }
    
    setFilteredClasses(result);
  }, [searchTerm, filters, classes]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      grade: '',
      status: ''
    });
  };
  
  // Get unique grade values for the filter dropdown
  const grades = Array.from(new Set(classes.map(c => c.grade)));
  
  if (loading) {
    return (
      <Layout>
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading classes...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="classes-content">
        <section className="welcome-section">
          <h2>All Classes</h2>
          <p>View and manage all classes in your school</p>
        </section>
        
        <section className="classes-controls">
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
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
          
          <div className="filter-section">
            <div className="filter-group">
              <select 
                name="grade" 
                value={filters.grade}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">All Grades</option>
                {grades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <select 
                name="status" 
                value={filters.status}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">All Statuses</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
            
            {(filters.grade || filters.status) && (
              <button className="reset-filters-btn" onClick={resetFilters}>
                Reset Filters
              </button>
            )}
          </div>
        </section>
        
        <section className="classes-grid">
          {filteredClasses.length === 0 ? (
            <div className="no-classes">
              <p>No classes found matching your search criteria.</p>
              <button className="reset-filters-btn" onClick={resetFilters}>Reset Filters</button>
            </div>
          ) : (
            filteredClasses.map(classItem => (
              <div key={classItem.id} className="class-card">
                <div className="class-card-header">
                  <h3>{classItem.name}</h3>
                  <span className={`status-indicator ${classItem.status}`}>
                    {classItem.status}
                  </span>
                </div>
                
                <div className="class-card-body">
                  <div className="class-info">
                    <div className="info-row">
                      <span className="info-label">Teacher:</span>
                      <span className="info-value">{classItem.teacher}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Grade:</span>
                      <span className="info-value">{classItem.grade}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Schedule:</span>
                      <span className="info-value">{classItem.schedule}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Last Scan:</span>
                      <span className="info-value">{classItem.lastScan}</span>
                    </div>
                  </div>
                  
                  <div className="attendance-summary">
                    <div className="attendance-stat">
                      <span className="stat-label">Present</span>
                      <span className="stat-value present">{classItem.present}</span>
                    </div>
                    <div className="attendance-stat">
                      <span className="stat-label">Absent</span>
                      <span className="stat-value absent">{classItem.absent}</span>
                    </div>
                    <div className="attendance-stat">
                      <span className="stat-label">Rate</span>
                      <span className="stat-value">{classItem.attendanceRate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="class-card-footer">
                  <Link to={`/class/${classItem.id}`} className="view-class-btn">
                    View Attendance
                  </Link>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Classes; 