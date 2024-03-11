import { useState, useEffect } from 'react' 
import { fetchAllRunners, searchRunners } from '../services/runnerService'

const useRunnersData = (searchTerm, page = 1) => {
  const [runners, setRunners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalRunners, setTotalRunners] = useState(0)
  const [perPage, setPerPage] = useState(10)

  useEffect(() => {
    async function loadRunners () {
      try {
        let data
        if (searchTerm) {
          data = await searchRunners(searchTerm, page)
        } else {
          data = await fetchAllRunners(page)
        }
        if (data.runners) {
          setRunners(data.runners)
          setTotalRunners(data.total_count)
          setPerPage(data.per_page)
        }
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
        console.error("Failed to load runners", error)
      }
    }
    loadRunners()
  }, [searchTerm, page])


  return { runners, loading, error, totalRunners, perPage }
}

export default useRunnersData
