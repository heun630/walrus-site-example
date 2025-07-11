import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [deployTime, setDeployTime] = useState('')
  const [commitHash, setCommitHash] = useState('')

  useEffect(() => {
    setDeployTime(new Date().toLocaleString('ko-KR'))
    
    fetch('https://api.github.com/repos/heun630/walrus-site-example/commits/main')
      .then(res => res.json())
      .then(data => setCommitHash(data.sha?.substring(0, 7) || 'unknown'))
      .catch(() => setCommitHash('unknown'))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="walrus-logo">
          🦭
        </div>
        <h1>Walrus Site Example</h1>
        <p className="subtitle">자동 배포 및 업데이트 예시</p>
        
        <div className="deployment-info">
          <div className="info-card">
            <h3>🚀 배포 정보</h3>
            <p><strong>배포 시간:</strong> {deployTime}</p>
            <p><strong>커밋 해시:</strong> {commitHash}</p>
            <p><strong>브랜치:</strong> main</p>
          </div>
          
          <div className="info-card">
            <h3>⚡ 자동 배포 기능</h3>
            <ul>
              <li>main 브랜치에 푸시할 때마다 자동 배포</li>
              <li>GitHub Actions를 통한 CI/CD</li>
              <li>GitHub Pages로 자동 호스팅</li>
              <li>실시간 업데이트 반영</li>
            </ul>
          </div>
          
          <div className="info-card">
            <h3>🛠️ 기술 스택</h3>
            <ul>
              <li>React + Vite</li>
              <li>GitHub Actions</li>
              <li>GitHub Pages</li>
              <li>자동화된 빌드 프로세스</li>
            </ul>
          </div>
        </div>
        
        <div className="demo-section">
          <h3>🔄 실시간 업데이트 테스트</h3>
          <p>이 페이지는 코드 변경 시 자동으로 업데이트됩니다!</p>
          <div className="status-indicator">
            <span className="status-dot"></span>
            배포 상태: 활성
          </div>
        </div>
      </header>
    </div>
  )
}

export default App