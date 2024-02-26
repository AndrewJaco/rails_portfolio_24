import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { fetchRunner as fetchRunnerService, deleteRunner as deleteRunnerService } from '../../services/runnerService'


function RunnerDetails() {
  const [ runner, setRunner ] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchRunner() {
      try {
        const data = await fetchRunnerService(id)
        setRunner(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRunner()
  }, [id])

  const deleteRunner = async () => {
    try {
      await deleteRunnerService(id)
      navigate('/runners')
    } catch (error) {
      console.error("failed to delete the runner", error)
    }
  }

  if (!runner) return <h2>Loading...</h2>

  return (
    <div>
      <h2>{runner.name}</h2>
      <p>age: {runner.age}</p>
      <Link to={`/runners/${id}/edit`}>Edit</Link>
      {" | "}
      <Link to='/runners'>Back to runners</Link>
      {" | "}
      <button onClick={deleteRunner}>Delete</button>
    </div>
  )
}

export default RunnerDetails