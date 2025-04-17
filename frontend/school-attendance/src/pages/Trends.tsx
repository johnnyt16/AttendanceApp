import Layout from '../components/Layout';
import '../styles/Trends.css';

const Trends = () => {
  return (
    <Layout>
      <div className="trends-content">
        <section className="welcome-section">
          <h2>Attendance Trends &amp; Data Analysis</h2>
          <p>Analyze attendance patterns and identify trends across classes, students, and time periods.</p>
        </section>

        <div className="trends-grid">
          <section className="chart-section">
            <div className="section-header">
              <h2>Monthly Attendance Rate</h2>
            </div>
            <div className="chart-placeholder">
              <div className="placeholder-content">
                <p>Chart will go here</p>
              </div>
            </div>
          </section>

          <section className="chart-section">
            <div className="section-header">
              <h2>Present vs. Absent Comparison</h2>
            </div>
            <div className="chart-placeholder">
              <div className="placeholder-content">
                <p>Chart will go here</p>
              </div>
            </div>
          </section>

          <section className="chart-section">
            <div className="section-header">
              <h2>Attendance by Class</h2>
            </div>
            <div className="chart-placeholder">
              <div className="placeholder-content">
                <p>Chart will go here</p>
              </div>
            </div>
          </section>

          <section className="chart-section">
            <div className="section-header">
              <h2>Attendance by Day of Week</h2>
            </div>
            <div className="chart-placeholder">
              <div className="placeholder-content">
                <p>Chart will go here</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Trends; 