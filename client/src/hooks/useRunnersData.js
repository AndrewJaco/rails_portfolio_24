import { useState, useEffect } from 'react' 
import { fetchAllRunners, searchRunners } from '../services/runnerService'

const useRunnersData = (searchTerm) => {
  const [runners, setRunners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadRunners () {
      try {
        let data
        if (searchTerm) {
          data = await searchRunners(searchTerm)
        } else {
          data = await fetchAllRunners()
        }
        setRunners(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
        console.error("Failed to load runners", error)
      }
    }
    loadRunners()
  }, [searchTerm])


  return {runners, loading, error}
}

export default useRunnersData
