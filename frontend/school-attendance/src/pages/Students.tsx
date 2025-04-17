import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/Students.css';

// Interface for student data
interface Student {
  id: number;
  name: string;
  grade: string;
  className: string;
  teacher: string;
  attendanceRate: string;
  presentDays: number;
  absentDays: number;
  totalDays: number;
  lastPresent: string;
  status: 'present' | 'absent' | 'late' | 'excused';
}

// Mock data for students
const mockStudents: Student[] = [
  { id: 101, name: 'Alice Smith', grade: '9th', className: 'Room 101', teacher: 'Ms. Johnson', attendanceRate: '95.2%', presentDays: 40, absentDays: 2, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 102, name: 'Bob Johnson', grade: '9th', className: 'Room 101', teacher: 'Ms. Johnson', attendanceRate: '92.8%', presentDays: 39, absentDays: 3, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 103, name: 'Charlie Brown', grade: '9th', className: 'Room 101', teacher: 'Ms. Johnson', attendanceRate: '100%', presentDays: 42, absentDays: 0, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 104, name: 'Diana Prince', grade: '9th', className: 'Room 101', teacher: 'Ms. Johnson', attendanceRate: '90.5%', presentDays: 38, absentDays: 4, totalDays: 42, lastPresent: 'Yesterday', status: 'absent' },
  { id: 105, name: 'Edward Jones', grade: '10th', className: 'Room 203', teacher: 'Mr. Wilson', attendanceRate: '97.6%', presentDays: 41, absentDays: 1, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 106, name: 'Frank Miller', grade: '10th', className: 'Room 203', teacher: 'Mr. Wilson', attendanceRate: '88.1%', presentDays: 37, absentDays: 5, totalDays: 42, lastPresent: 'Today', status: 'late' },
  { id: 107, name: 'Grace Lee', grade: '10th', className: 'Room 203', teacher: 'Mr. Wilson', attendanceRate: '95.2%', presentDays: 40, absentDays: 2, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 108, name: 'Henry Wilson', grade: '8th', className: 'Room 305', teacher: 'Mrs. Garcia', attendanceRate: '83.3%', presentDays: 35, absentDays: 7, totalDays: 42, lastPresent: '3 days ago', status: 'absent' },
  { id: 109, name: 'Ivy Robinson', grade: '8th', className: 'Room 305', teacher: 'Mrs. Garcia', attendanceRate: '92.8%', presentDays: 39, absentDays: 3, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 110, name: 'Jack Thompson', grade: '8th', className: 'Room 305', teacher: 'Mrs. Garcia', attendanceRate: '90.5%', presentDays: 38, absentDays: 4, totalDays: 42, lastPresent: 'Today', status: 'excused' },
  { id: 111, name: 'Kevin Garcia', grade: '11th', className: 'Room 118', teacher: 'Dr. Martinez', attendanceRate: '97.6%', presentDays: 41, absentDays: 1, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 112, name: 'Laura Martinez', grade: '11th', className: 'Room 118', teacher: 'Dr. Martinez', attendanceRate: '95.2%', presentDays: 40, absentDays: 2, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 113, name: 'Michael Davis', grade: '7th', className: 'Room 224', teacher: 'Ms. Thomas', attendanceRate: '100%', presentDays: 42, absentDays: 0, totalDays: 42, lastPresent: 'Today', status: 'present' },
  { id: 114, name: 'Nancy Rodriguez', grade: '7th', className: 'Room 224', teacher: 'Ms. Thomas', attendanceRate: '92.8%', presentDays: 39, absentDays: 3, totalDays: 42, lastPresent: 'Today', status: 'late' },
  { id: 115, name: 'Oliver Wright', grade: '12th', className: 'Room 402', teacher: 'Mr. Edwards', attendanceRate: '85.7%', presentDays: 36, absentDays: 6, totalDays: 42, lastPresent: 'Yesterday', status: 'absent' },
  { id: 116, name: 'Patricia Taylor', grade: '12th', className: 'Room 402', teacher: 'Mr. Edwards', attendanceRate: '92.8%', presentDays: 39, absentDays: 3, totalDays: 42, lastPresent: 'Today', status: 'present' },
];

const Students = () => {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(mockStudents);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    grade: '',
    status: '',
    attendanceRate: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{key: keyof Student, direction: 'ascending' | 'descending'}>({
    key: 'name',
    direction: 'ascending'
  });
  
  const studentsPerPage = 10;
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Apply filters and search
  useEffect(() => {
    let result = [...students];
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(student => 
        student.name.toLowerCase().includes(term) || 
        student.className.toLowerCase().includes(term) ||
        student.teacher.toLowerCase().includes(term)
      );
    }
    
    // Apply grade filter
    if (filters.grade) {
      result = result.filter(student => student.grade === filters.grade);
    }
    
    // Apply status filter
    if (filters.status) {
      result = result.filter(student => student.status === filters.status);
    }
    
    // Apply attendance rate filter
    if (filters.attendanceRate) {
      const rate = parseInt(filters.attendanceRate);
      result = result.filter(student => {
        const studentRate = parseFloat(student.attendanceRate.replace('%', ''));
        return studentRate >= rate;
      });
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    
    setFilteredStudents(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, filters, students, sortConfig]);
  
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
      status: '',
      attendanceRate: ''
    });
  };
  
  const requestSort = (key: keyof Student) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Get unique grades for the filter dropdown
  const grades = Array.from(new Set(students.map(s => s.grade)));
  
  // Calculate pagination
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  if (loading) {
    return (
      <Layout>
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading students...</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="students-content">
        <section className="welcome-section">
          <h2>All Students</h2>
          <p>View and manage all students in your school</p>
        </section>
        
        <section className="students-controls">
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by student name, class, or teacher..."
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
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="late">Late</option>
                <option value="excused">Excused</option>
              </select>
            </div>
            
            <div className="filter-group">
              <select 
                name="attendanceRate" 
                value={filters.attendanceRate}
                onChange={handleFilterChange}
                className="filter-select"
              >
                <option value="">All Attendance Rates</option>
                <option value="95">95% and above</option>
                <option value="90">90% and above</option>
                <option value="85">85% and above</option>
                <option value="80">80% and above</option>
              </select>
            </div>
            
            {(filters.grade || filters.status || filters.attendanceRate) && (
              <button className="reset-filters-btn" onClick={resetFilters}>
                Reset Filters
              </button>
            )}
          </div>
        </section>
        
        <section className="students-table-container">
          {filteredStudents.length === 0 ? (
            <div className="no-students">
              <p>No students found matching your search criteria.</p>
              <button className="reset-filters-btn" onClick={resetFilters}>Reset Filters</button>
            </div>
          ) : (
            <>
              <div className="table-responsive">
                <table className="students-table">
                  <thead>
                    <tr>
                      <th onClick={() => requestSort('id')}>
                        ID
                        {sortConfig.key === 'id' && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
                          </span>
                        )}
                      </th>
                      <th onClick={() => requestSort('name')}>
                        Name
                        {sortConfig.key === 'name' && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
                          </span>
                        )}
                      </th>
                      <th onClick={() => requestSort('grade')}>
                        Grade
                        {sortConfig.key === 'grade' && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
                          </span>
                        )}
                      </th>
                      <th onClick={() => requestSort('className')}>
                        Class
                        {sortConfig.key === 'className' && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
                          </span>
                        )}
                      </th>
                      <th onClick={() => requestSort('teacher')}>
                        Teacher
                        {sortConfig.key === 'teacher' && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
                          </span>
                        )}
                      </th>
                      <th onClick={() => requestSort('attendanceRate')}>
                        Attendance Rate
                        {sortConfig.key === 'attendanceRate' && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
                          </span>
                        )}
                      </th>
                      <th onClick={() => requestSort('lastPresent')}>
                        Last Present
                        {sortConfig.key === 'lastPresent' && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
                          </span>
                        )}
                      </th>
                      <th onClick={() => requestSort('status')}>
                        Status
                        {sortConfig.key === 'status' && (
                          <span className="sort-indicator">
                            {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
                          </span>
                        )}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentStudents.map(student => (
                      <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>
                          <div className="student-name">{student.name}</div>
                        </td>
                        <td>{student.grade}</td>
                        <td>{student.className}</td>
                        <td>{student.teacher}</td>
                        <td>
                          <div className="attendance-rate">
                            <div className="rate-bar">
                              <div 
                                className="rate-fill" 
                                style={{ width: parseFloat(student.attendanceRate) + '%' }}
                              ></div>
                            </div>
                            <span>{student.attendanceRate}</span>
                          </div>
                        </td>
                        <td>{student.lastPresent}</td>
                        <td>
                          <span className={`status-badge ${student.status}`}>
                            {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button 
                    className="pagination-btn" 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  
                  <div className="page-numbers">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`page-number ${currentPage === number ? 'active' : ''}`}
                      >
                        {number}
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    className="pagination-btn" 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
              
              <div className="table-info">
                Showing {indexOfFirstStudent + 1}-{Math.min(indexOfLastStudent, filteredStudents.length)} of {filteredStudents.length} students
              </div>
            </>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Students; 