import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/AppRoutes'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='app'>
        <h1>Andrew Jacobus</h1>
        <p>a runner's programmer</p>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
