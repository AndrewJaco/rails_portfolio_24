import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants'
import { Link } from 'react-router-dom'

function RunnerList() {
  const [runners, setRunners] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchRunners() {
      try {
        const response = await fetch(API_URL)
        if (response.ok) {
          const data = await response.json()
          setRunners(data)
          setLoading(false)
        } else {
        throw response
        }
      } catch (error) {
        console.error(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchRunners()
  }, [])

  const deleteRunner = async id => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        const updatedRunners = runners.filter(runner => runner.id !== id)
        setRunners(updatedRunners)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {runners.map(runner => (
        <div key={runner.id}>
          <Link to={`/runners/${runner.id}`}>
            <h2>{runner.name}</h2>  
          </Link>
          <div className='runner-links'>
            <button onClick={()=> deleteRunner(runner.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RunnerList