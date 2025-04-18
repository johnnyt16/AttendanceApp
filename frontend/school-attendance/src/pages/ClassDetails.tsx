import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/ClassDetails.css';

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

const ClassDetails = () => {
  const { classId } = useParams<{ classId: string }>();
  const [classData, setClassData] = useState<ClassData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [historyView, setHistoryView] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const availableDates = Array.from({ length: 5 }, (_, i) =>
      new Date(Date.now() - i * 86400000).toISOString().split('T')[0]
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(
            `${import.meta.env.VITE_API_URL}/classes/${classId}/attendance?date=${selectedDate}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: ClassData = await res.json();
        setClassData(json);
      } catch (err) {
        console.error('Failed to load class:', classId, err);
        setError('Failed to load class data. Please try again.');
        setClassData(null);
      } finally {
        setLoading(false);
      }
    };

    if (classId) fetchData();
  }, [classId, selectedDate]);

  const handleStatusChange = (studentId: number, newStatus: Student['status']) => {
    if (!classData) return;

    const updatedStudents = classData.students.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          status: newStatus,
          time: ['present', 'late'].includes(newStatus)
              ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : '-',
          photoVerified: ['present', 'late'].includes(newStatus) ? student.photoVerified : false
        };
      }
      return student;
    });

    setClassData({
      ...classData,
      students: updatedStudents,
      present: updatedStudents.filter(s => s.status === 'present').length,
      absent: updatedStudents.filter(s => s.status === 'absent').length,
      late: updatedStudents.filter(s => s.status === 'late').length,
      excused: updatedStudents.filter(s => s.status === 'excused').length
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

    const updatedStudents = classData.students.map(student =>
        student.id === editingStudent.id ? { ...student, notes: editNotes } : student
    );

    setClassData({ ...classData, students: updatedStudents });
    closeEditModal();
  };

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

  if (error) {
    return (
        <Layout>
          <div className="error-message">
            <h2>Class Not Found</h2>
            <p>{error}</p>
          </div>
        </Layout>
    );
  }

  if (!classData) {
    return (
        <Layout>
          <div className="error-message">
            <h2>No Class Data</h2>
            <p>Try refreshing the page or checking your class ID.</p>
          </div>
        </Layout>
    );
  }

  const filteredStudents = classData.students
      .filter((student): student is Student => student !== null)
      .filter(student => {
        const matchesFilter = filter === 'all' || student.status === filter;
        const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
      });

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
              <div className="summary-card"><h3>Total</h3><p>{classData.totalStudents}</p></div>
              <div className="summary-card present"><h3>Present</h3><p>{classData.present}</p></div>
              <div className="summary-card absent"><h3>Absent</h3><p>{classData.absent}</p></div>
              <div className="summary-card late"><h3>Late</h3><p>{classData.late}</p></div>
              <div className="summary-card excused"><h3>Excused</h3><p>{classData.excused}</p></div>
            </div>
          </header>

          <section className="attendance-controls">
            <div className="filters">
              {['all', 'present', 'absent', 'late', 'excused'].map(status => (
                  <button
                      key={status}
                      className={`filter-button ${filter === status ? 'active' : ''}`}
                      onClick={() => setFilter(status)}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
              ))}
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
            {filteredStudents.length === 0 ? (
                <p className="no-students">No students match the current filter or search.</p>
            ) : (
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
                              <span className="verified">✔ Verified</span>
                          ) : (
                              <span className="unverified">Manual</span>
                          )}
                        </td>
                        <td>
                          <div className="notes-cell">
                            {student.notes || '-'}
                            <button className="edit-notes" onClick={() => openEditModal(student)}>✎</button>
                          </div>
                        </td>
                        <td>
                          <div className="status-actions">
                            {['present', 'late', 'absent', 'excused'].map(status => (
                                <button
                                    key={status}
                                    className={`status-button ${status} ${student.status === status ? 'active' : ''}`}
                                    onClick={() => handleStatusChange(student.id, status as Student['status'])}
                                >
                                  {status.charAt(0).toUpperCase() + status.slice(1)}
                                </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
            )}
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
                    <button className="close-modal" onClick={closeEditModal}>×</button>
                  </div>
                  <div className="modal-body">
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        id="notes"
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        placeholder="Add notes..."
                        rows={4}
                    />
                  </div>
                  <div className="modal-footer">
                    <button className="modal-button" onClick={closeEditModal}>Cancel</button>
                    <button className="modal-button primary" onClick={saveNotes}>Save</button>
                  </div>
                </div>
              </div>
          )}
        </div>
      </Layout>
  );
};

export default ClassDetails;
