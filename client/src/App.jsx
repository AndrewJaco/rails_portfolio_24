import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RunnerList from './features/runners/RunnerList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Andrew Jacobus</h1>
      <p>a runner's programmer</p>

      <RunnerList />
    </div>
  )
}

export default App
