import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ClassView.css';

// Mock data - replace with actual API calls
const mockClassData = {
  id: 1,
  name: 'Class 9A',
  date: '2023-06-15',
  teacher: 'Mr. Johnson',
  totalStudents: 30,
  present: 28,
  absent: 2,
  students: [
    { id: 1, name: 'Alice Smith', status: 'present', time: '8:45 AM' },
    { id: 2, name: 'Bob Johnson', status: 'present', time: '8:50 AM' },
    { id: 3, name: 'Charlie Brown', status: 'present', time: '8:52 AM' },
    { id: 4, name: 'Diana Prince', status: 'absent', time: '-' },
    { id: 5, name: 'Edward Jones', status: 'present', time: '8:48 AM' },
    { id: 6, name: 'Frank Miller', status: 'present', time: '8:55 AM' },
    { id: 7, name: 'Grace Lee', status: 'present', time: '8:40 AM' },
    { id: 8, name: 'Henry Wilson', status: 'absent', time: '-' },
    { id: 9, name: 'Ivy Robinson', status: 'present', time: '8:42 AM' },
    { id: 10, name: 'Jack Thompson', status: 'present', time: '8:47 AM' },
  ],
};

const ClassView = () => {
  const { classId } = useParams<{ classId: string }>();
  const [classData, setClassData] = useState(mockClassData);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // You would fetch actual data here based on classId
    // Example:
    // const fetchData = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch(`/api/class/${classId}`);
    //     const data = await response.json();
    //     setClassData(data);
    //   } catch (error) {
    //     console.error('Error fetching class data:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // fetchData();
  }, [classId]);

  const handleStatusChange = (studentId: number, newStatus: string) => {
    // Update local state
    setClassData(prevData => ({
      ...prevData,
      students: prevData.students.map(student => 
        student.id === studentId 
          ? { ...student, status: newStatus, time: newStatus === 'present' ? new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '-' } 
          : student
      )
    }));

    // In a real app, you would also update the server
    // Example:
    // fetch(`/api/attendance/update`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     classId,
    //     studentId,
    //     status: newStatus,
    //   }),
    // });
  };

  const filteredStudents = classData.students
    .filter(student => {
      if (filter === 'all') return true;
      return student.status === filter;
    })
    .filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="class-view-container">
      <header className="class-view-header">
        <h1>{classData.name} Attendance</h1>
        <div className="header-actions">
          <button onClick={() => window.location.href = '/dashboard'}>Back to Dashboard</button>
        </div>
      </header>

      <main className="class-view-content">
        <section className="class-info">
          <div className="info-card">
            <div className="info-row">
              <span>Date:</span>
              <span>{classData.date}</span>
            </div>
            <div className="info-row">
              <span>Teacher:</span>
              <span>{classData.teacher}</span>
            </div>
            <div className="info-row">
              <span>Total Students:</span>
              <span>{classData.totalStudents}</span>
            </div>
            <div className="info-row">
              <span>Present:</span>
              <span className="present-count">{classData.present}</span>
            </div>
            <div className="info-row">
              <span>Absent:</span>
              <span className="absent-count">{classData.absent}</span>
            </div>
          </div>
        </section>

        <section className="student-list">
          <div className="controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-options">
              <button 
                className={filter === 'all' ? 'active' : ''} 
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={filter === 'present' ? 'active' : ''} 
                onClick={() => setFilter('present')}
              >
                Present
              </button>
              <button 
                className={filter === 'absent' ? 'active' : ''} 
                onClick={() => setFilter('absent')}
              >
                Absent
              </button>
            </div>
          </div>

          <div className="students-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id} className={student.status}>
                    <td>{student.name}</td>
                    <td>
                      <span className={`status-badge ${student.status}`}>
                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                      </span>
                    </td>
                    <td>{student.time}</td>
                    <td>
                      <div className="action-buttons">
                        <button 
                          className={`status-button present ${student.status === 'present' ? 'active' : ''}`}
                          onClick={() => handleStatusChange(student.id, 'present')}
                        >
                          Present
                        </button>
                        <button 
                          className={`status-button absent ${student.status === 'absent' ? 'active' : ''}`}
                          onClick={() => handleStatusChange(student.id, 'absent')}
                        >
                          Absent
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClassView; 