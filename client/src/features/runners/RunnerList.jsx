import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllRunners, deleteRunner as deleteRunnerService } from '../../services/runnerService'

function RunnerList() {
  const [runners, setRunners] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchRunners() {
      try {
        const data = await fetchAllRunners();
        setRunners(data)
        setLoading(false)
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
     await deleteRunnerService(id);
     setRunners(runners.filter(runner => runner.id !== id))
    } catch (error) {
      console.error("failed to delete runner", error)
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
            <Link to={`/runners/${runner.id}/edit`}>Edit</Link>
            {" | "}
            <button onClick={()=> deleteRunner(runner.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RunnerList