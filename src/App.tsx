import './App.css'

function App() {
  return (
    <div className="app-container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5'
      }}>
        <h1 style={{ color: '#3498db' }}>School Attendance System</h1>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '2rem', 
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '400px',
          maxWidth: '90%'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Login</h2>
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
              <input 
                type="email" 
                style={{ 
                  width: '100%', 
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }} 
                required 
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
              <input 
                type="password" 
                style={{ 
                  width: '100%', 
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }} 
                required 
              />
            </div>
            <button 
              type="submit" 
              style={{ 
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App 