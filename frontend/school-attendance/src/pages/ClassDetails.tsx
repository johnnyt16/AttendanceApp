import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/ClassDetails.css';

// Types for our data
interface Student {
  id: number;
  name: string;
  status: 'present' | 'absent' | 'excused' | 'late';
  time: string;
  photoVerified: boolean;
  notes: string;
}

interface ClassData {
  id: string;
  name: string;
  date: string;
  teacher: string;
  totalStudents: number;
  present: number;
  absent: number;
  late: number;
  excused: number;
  students: Student[];
}

// Mock data - in a real app, you would fetch this from an API
const getMockClassData = (classId: string): ClassData => {
  return {
    id: classId,
    name: `Class ${classId}`,
    date: new Date().toISOString().split('T')[0],
    teacher: 'Mr. Johnson',
    totalStudents: 30,
    present: 25,
    absent: 2,
    late: 2,
    excused: 1,
    students: [
      { id: 1, name: 'Alice Smith', status: 'present', time: '9:05 AM', photoVerified: true, notes: '' },
      { id: 2, name: 'Bob Johnson', status: 'present', time: '9:02 AM', photoVerified: true, notes: '' },
      { id: 3, name: 'Charlie Brown', status: 'present', time: '9:00 AM', photoVerified: true, notes: '' },
      { id: 4, name: 'Diana Prince', status: 'absent', time: '-', photoVerified: false, notes: 'Called in sick' },
      { id: 5, name: 'Edward Jones', status: 'present', time: '9:07 AM', photoVerified: true, notes: '' },
      { id: 6, name: 'Frank Miller', status: 'late', time: '9:20 AM', photoVerified: true, notes: 'Bus was late' },
      { id: 7, name: 'Grace Lee', status: 'present', time: '9:03 AM', photoVerified: true, notes: '' },
      { id: 8, name: 'Henry Wilson', status: 'absent', time: '-', photoVerified: false, notes: '' },
      { id: 9, name: 'Ivy Robinson', status: 'present', time: '8:55 AM', photoVerified: true, notes: '' },
      { id: 10, name: 'Jack Thompson', status: 'excused', time: '-', photoVerified: false, notes: 'Doctor appointment' },
      { id: 11, name: 'Kevin Garcia', status: 'present', time: '9:01 AM', photoVerified: true, notes: '' },
      { id: 12, name: 'Laura Martinez', status: 'present', time: '9:04 AM', photoVerified: true, notes: '' },
      { id: 13, name: 'Michael Davis', status: 'present', time: '8:58 AM', photoVerified: true, notes: '' },
      { id: 14, name: 'Nancy Rodriguez', status: 'late', time: '9:15 AM', photoVerified: true, notes: '' },
      { id: 15, name: 'Oliver Wright', status: 'present', time: '9:02 AM', photoVerified: true, notes: '' },
    ]
  };
};

const ClassDetails = () => {
  const { classId } = useParams<{ classId: string }>();
  const [classData, setClassData] = useState<ClassData | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [historyView, setHistoryView] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Dates for the date picker - mock data
  const availableDates = [
    new Date().toISOString().split('T')[0],
    new Date(Date.now() - 86400000).toISOString().split('T')[0], // yesterday
    new Date(Date.now() - 172800000).toISOString().split('T')[0], // 2 days ago
    new Date(Date.now() - 259200000).toISOString().split('T')[0], // 3 days ago
    new Date(Date.now() - 345600000).toISOString().split('T')[0], // 4 days ago
  ];

  useEffect(() => {
    // Simulate API call to fetch class data
    setLoading(true);
    setTimeout(() => {
      if (classId) {
        const data = getMockClassData(classId);
        setClassData(data);
      }
      setLoading(false);
    }, 800);
  }, [classId, selectedDate]);

  if (loading) {
    return (
      <Layout>
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading class data...</p>
        </div>
      </Layout>
    );
  }

  if (!classData) {
    return (
      <Layout>
        <div className="error-message">
          <h2>Class not found</h2>
          <p>The class you're looking for does not exist or you don't have permission to view it.</p>
        </div>
      </Layout>
    );
  }

  const filteredStudents = classData.students.filter(student => {
    const matchesFilter = filter === 'all' || student.status === filter;
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStatusChange = (studentId: number, newStatus: 'present' | 'absent' | 'excused' | 'late') => {
    if (!classData) return;

    // Update the student's status
    const updatedStudents = classData.students.map(student => {
      if (student.id === studentId) {
        const newTime = newStatus === 'present' || newStatus === 'late' 
          ? new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
          : '-';
        
        return {
          ...student,
          status: newStatus,
          time: newTime,
          // If changing from verified to absent/excused, set photoVerified to false
          photoVerified: newStatus === 'present' || newStatus === 'late' 
            ? student.photoVerified 
            : false
        };
      }
      return student;
    });

    // Recalculate attendance counts
    const present = updatedStudents.filter(s => s.status === 'present').length;
    const absent = updatedStudents.filter(s => s.status === 'absent').length;
    const late = updatedStudents.filter(s => s.status === 'late').length;
    const excused = updatedStudents.filter(s => s.status === 'excused').length;

    setClassData({
      ...classData,
      students: updatedStudents,
      present,
      absent,
      late,
      excused
    });
  };

  const openEditModal = (student: Student) => {
    setEditingStudent(student);
    setEditNotes(student.notes);
  };

  const closeEditModal = () => {
    setEditingStudent(null);
    setEditNotes('');
  };

  const saveNotes = () => {
    if (!editingStudent || !classData) return;

    const updatedStudents = classData.students.map(student => {
      if (student.id === editingStudent.id) {
        return {
          ...student,
          notes: editNotes
        };
      }
      return student;
    });

    setClassData({
      ...classData,
      students: updatedStudents
    });

    closeEditModal();
  };

  return (
    <Layout>
      <div className="class-details">
        <header className="class-header">
          <div className="class-title">
            <h1>{classData.name} Attendance</h1>
            <div className="date-selector">
              <button 
                className={`date-toggle ${!historyView ? 'active' : ''}`}
                onClick={() => setHistoryView(false)}
              >
                Today
              </button>
              <button 
                className={`date-toggle ${historyView ? 'active' : ''}`}
                onClick={() => setHistoryView(true)}
              >
                History
              </button>
              {historyView && (
                <select 
                  value={selectedDate} 
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="date-picker"
                >
                  {availableDates.map(date => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Total</h3>
              <p>{classData.totalStudents}</p>
            </div>
            <div className="summary-card present">
              <h3>Present</h3>
              <p>{classData.present}</p>
            </div>
            <div className="summary-card absent">
              <h3>Absent</h3>
              <p>{classData.absent}</p>
            </div>
            <div className="summary-card late">
              <h3>Late</h3>
              <p>{classData.late}</p>
            </div>
            <div className="summary-card excused">
              <h3>Excused</h3>
              <p>{classData.excused}</p>
            </div>
          </div>
        </header>

        <section className="attendance-controls">
          <div className="filters">
            <button 
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-button ${filter === 'present' ? 'active' : ''}`}
              onClick={() => setFilter('present')}
            >
              Present
            </button>
            <button 
              className={`filter-button ${filter === 'absent' ? 'active' : ''}`}
              onClick={() => setFilter('absent')}
            >
              Absent
            </button>
            <button 
              className={`filter-button ${filter === 'late' ? 'active' : ''}`}
              onClick={() => setFilter('late')}
            >
              Late
            </button>
            <button 
              className={`filter-button ${filter === 'excused' ? 'active' : ''}`}
              onClick={() => setFilter('excused')}
            >
              Excused
            </button>
          </div>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        <section className="attendance-table">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Status</th>
                <th>Time</th>
                <th>Verified</th>
                <th>Notes</th>
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
                    {student.photoVerified ? (
                      <span className="verified">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        Verified
                      </span>
                    ) : (
                      <span className="unverified">Manual</span>
                    )}
                  </td>
                  <td>
                    <div className="notes-cell">
                      {student.notes ? student.notes : '-'}
                      <button className="edit-notes" onClick={() => openEditModal(student)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="status-actions">
                      <button 
                        className={`status-button present ${student.status === 'present' ? 'active' : ''}`}
                        onClick={() => handleStatusChange(student.id, 'present')}
                      >
                        Present
                      </button>
                      <button 
                        className={`status-button late ${student.status === 'late' ? 'active' : ''}`}
                        onClick={() => handleStatusChange(student.id, 'late')}
                      >
                        Late
                      </button>
                      <button 
                        className={`status-button absent ${student.status === 'absent' ? 'active' : ''}`}
                        onClick={() => handleStatusChange(student.id, 'absent')}
                      >
                        Absent
                      </button>
                      <button 
                        className={`status-button excused ${student.status === 'excused' ? 'active' : ''}`}
                        onClick={() => handleStatusChange(student.id, 'excused')}
                      >
                        Excused
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="actions-footer">
          <button className="action-button">Export Attendance</button>
          <button className="action-button primary">Save Changes</button>
        </section>

        {editingStudent && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Edit Notes for {editingStudent.name}</h3>
                <button className="close-modal" onClick={closeEditModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="notes">Notes</label>
                  <textarea 
                    id="notes" 
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Add notes about this student's attendance..."
                    rows={4}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal-button" onClick={closeEditModal}>Cancel</button>
                <button className="modal-button primary" onClick={saveNotes}>Save Notes</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ClassDetails; 