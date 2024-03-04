import { useState, useEffect } from 'react'
import { fetchAllRunners, deleteRunner } from '../../services/runnerService'
import RunnerCard from '../../components/RunnerCard'

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

  const deleteRunnerHandler = async id => {
    try {
     await deleteRunner(id);
     setRunners(runners.filter(runner => runner.id !== id))
    } catch (error) {
      console.error("failed to delete runner", error)
    }
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      {runners.map(runner => (
        <div key={runner.id}>
          <RunnerCard runner={runner} deleteRunnerHandler={deleteRunnerHandler} />
        </div>
      ))}
    </div>
  )
}

export default RunnerList