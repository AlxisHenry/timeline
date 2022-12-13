import './App.css'
import { useEffect, useState } from 'react'
import { getRepositories } from './services/api/index'

function App() {

  const [repositories, setRepositories] = useState([])
  
  useEffect(() => {
    (async () => {
      const [state, repositories] = await getRepositories()
      setRepositories(repositories)
    })()
  }, [])

  // if (!repositories) return <div>Loading...</div>;

  return (
    <div className="App">
      <div className="__timeline__">
      </div>
    </div>
  )
}

export default App
