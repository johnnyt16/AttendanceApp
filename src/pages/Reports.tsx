import { useState } from 'react';
import '../styles/Reports.css';

// Mock data - replace with actual API calls
const mockReportData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  attendanceData: [
    {
      class: 'Class 9A',
      rates: [95, 92, 88, 94, 91, 93],
      color: '#3498db',
    },
    {
      class: 'Class 10B',
      rates: [90, 88, 85, 87, 89, 92],
      color: '#2ecc71',
    },
    {
      class: 'Class 8C',
      rates: [97, 95, 94, 91, 93, 96],
      color: '#e74c3c',
    },
  ],
  recentRecords: [
    { id: 1, class: 'Class 9A', date: '2023-06-15', present: 28, absent: 2, rate: '93.3%' },
    { id: 2, class: 'Class 10B', date: '2023-06-15', present: 25, absent: 5, rate: '83.3%' },
    { id: 3, class: 'Class 8C', date: '2023-06-15', present: 30, absent: 0, rate: '100%' },
    { id: 4, class: 'Class 11D', date: '2023-06-15', present: 22, absent: 3, rate: '88%' },
    { id: 5, class: 'Class 9A', date: '2023-06-14', present: 27, absent: 3, rate: '90%' },
    { id: 6, class: 'Class 10B', date: '2023-06-14', present: 26, absent: 4, rate: '86.7%' },
    { id: 7, class: 'Class 8C', date: '2023-06-14', present: 29, absent: 1, rate: '96.7%' },
    { id: 8, class: 'Class 11D', date: '2023-06-14', present: 20, absent: 5, rate: '80%' },
  ],
};

const Reports = () => {
  const [reportType, setReportType] = useState('attendance-rate');
  const [dateRange, setDateRange] = useState('monthly');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecords = mockReportData.recentRecords.filter(record =>
    record.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.date.includes(searchTerm)
  );

  // This would be implemented with a real chart library like Chart.js in a production app
  const renderChart = () => {
    return (
      <div className="chart-container">
        <div className="chart-header">
          <h3>Attendance Rate Over Time</h3>
          <div className="chart-legend">
            {mockReportData.attendanceData.map(item => (
              <div key={item.class} className="legend-item">
                <span className="color-box" style={{ backgroundColor: item.color }}></span>
                <span>{item.class}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="chart-visual">
          <div className="chart-y-axis">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>
          <div className="chart-content">
            {/* Simplified chart visualization - would use a proper library in production */}
            <div className="chart-bars">
              {mockReportData.months.map((month, monthIndex) => (
                <div key={month} className="month-column">
                  {mockReportData.attendanceData.map(classData => (
                    <div 
                      key={`${month}-${classData.class}`}
                      className="bar" 
                      style={{ 
                        height: `${classData.rates[monthIndex]}%`, 
                        backgroundColor: classData.color
                      }}
                      title={`${classData.class} - ${month}: ${classData.rates[monthIndex]}%`}
                    ></div>
                  ))}
                  <div className="month-label">{month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="reports-container">
      <header className="reports-header">
        <h1>Attendance Reports</h1>
        <div className="header-actions">
          <button onClick={() => window.location.href = '/dashboard'}>Back to Dashboard</button>
        </div>
      </header>

      <main className="reports-content">
        <section className="report-controls">
          <div className="control-group">
            <label>Report Type</label>
            <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
              <option value="attendance-rate">Attendance Rate</option>
              <option value="absence-patterns">Absence Patterns</option>
              <option value="late-arrivals">Late Arrivals</option>
            </select>
          </div>
          <div className="control-group">
            <label>Date Range</label>
            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="control-group">
            <label>Export</label>
            <div className="export-buttons">
              <button className="export-button">PDF</button>
              <button className="export-button">Excel</button>
              <button className="export-button">Print</button>
            </div>
          </div>
        </section>

        <section className="report-visualization">
          {renderChart()}
        </section>

        <section className="report-records">
          <div className="section-header">
            <h2>Recent Attendance Records</h2>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by class or date..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="records-table">
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Date</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Attendance Rate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map(record => (
                  <tr key={record.id}>
                    <td>{record.class}</td>
                    <td>{record.date}</td>
                    <td>{record.present}</td>
                    <td>{record.absent}</td>
                    <td className="rate-cell">{record.rate}</td>
                    <td>
                      <button 
                        className="view-button"
                        onClick={() => window.location.href = `/attendance-record/${record.id}`}
                      >
                        Details
                      </button>
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

export default Reports; 