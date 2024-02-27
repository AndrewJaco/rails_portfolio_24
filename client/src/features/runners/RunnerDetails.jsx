import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { fetchRunner, deleteRunner } from '../../services/runnerService'


function RunnerDetails() {
  const [ runner, setRunner ] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchRunnerHandler() {
      try {
        const json = await fetchRunner(id)
        setRunner(json)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRunnerHandler()
  }, [id])

  const deleteRunnerHandler = async () => {
    try {
      await deleteRunner(id)
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
      <button onClick={deleteRunnerHandler}>Delete</button>
    </div>
  )
}

export default RunnerDetails