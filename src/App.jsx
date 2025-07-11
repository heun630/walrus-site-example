import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [deployTime, setDeployTime] = useState('')
  const [commitHash, setCommitHash] = useState('')

  useEffect(() => {
    setDeployTime(new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    }))
    
    // Try to get site info from window location
    const hostname = window.location.hostname
    if (hostname.includes('.wal.app')) {
      setCommitHash(hostname.split('.')[0].substring(0, 7))
    } else {
      // Fallback to GitHub API
      fetch('https://api.github.com/repos/heun630/walrus-site-example/commits/main')
        .then(res => res.json())
        .then(data => setCommitHash(data.sha?.substring(0, 7) || 'unknown'))
        .catch(() => setCommitHash('unknown'))
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="walrus-logo">
          🦭
        </div>
        <h1>Walrus Site Example</h1>
        <p className="subtitle">Automatic Deployment & Update Demo</p>
        
        <div className="deployment-info">
          <div className="info-card">
            <h3>Deployment Info</h3>
            <p><strong>Deploy Time:</strong> {deployTime}</p>
            <p><strong>Site ID:</strong> {commitHash}</p>
            <p><strong>Network:</strong> Walrus Mainnet</p>
            <p><strong>Domain:</strong> {window.location.hostname}</p>
          </div>
          
          <div className="info-card">
            <h3>⚡ Auto Deployment Features</h3>
            <ul>
              <li>Auto deploy on main branch push</li>
              <li>CI/CD via GitHub Actions</li>
              <li>Auto hosting on Walrus Mainnet</li>
              <li>Real-time updates via distributed storage</li>
            </ul>
          </div>
          
          <div className="info-card">
            <h3>Tech Stack</h3>
            <ul>
              <li>React + Vite</li>
              <li>Walrus Sites Deploy</li>
              <li>Sui Blockchain</li>
              <li>Distributed Storage (Walrus)</li>
            </ul>
          </div>
        </div>
        
        <div className="demo-section">
          <h3>🔄 Walrus Real-time Updates</h3>
          <p>This page is hosted on Walrus Mainnet and automatically updates when code changes!</p>
          <div className="walrus-info">
            <p>🌐 <strong>Distributed Storage:</strong> Stored across 100+ nodes worldwide</p>
            <p>⚡ <strong>High Availability:</strong> Accessible even if 2/3 of nodes go offline</p>
            <p>🔒 <strong>Security:</strong> Verified through Sui blockchain</p>
          </div>
          <div className="status-indicator">
            <span className="status-dot"></span>
            Walrus Deployment Status: Active
          </div>
        </div>
      </header>
    </div>
  )
}

export default App