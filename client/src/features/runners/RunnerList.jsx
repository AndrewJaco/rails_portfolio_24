import { useState, useEffect } from 'react'
import { deleteRunner } from '../../services/runnerService'
import RunnerCard from '../../components/RunnerCard'

import SearchBar from './SearchBar'
import useUrlSearchParams from '../../hooks/useUrlSearchParams'
import useRunnersData from '../../hooks/useRunnersData'

function RunnerList() {
  const [runners, setRunners] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [debounceSearchTerm, setDebounceSearchTerm] = useUrlSearchParams('search')
  
  const {
    runners: fetchedRunners,
    loading,
    error,
  } = useRunnersData(debounceSearchTerm)

  useEffect(() => {
    if(fetchedRunners) {
      setRunners(fetchedRunners)
    }
  }, [fetchedRunners])

  const handleImmediateSearchChange = (searchValue) => {
    setSearchTerm(searchValue)
  }

  const handleDebounceSearchChange = (searchValue) => {
    setDebounceSearchTerm(searchValue)
  }

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
      <SearchBar
        value={searchTerm}
        onSearchChange={handleDebounceSearchChange}
        onImmedianteChange={handleImmediateSearchChange}
      />
      {runners.map(runner => (
        <div key={runner.id}>
          <RunnerCard runner={runner} deleteRunnerHandler={deleteRunnerHandler} />
        </div>
      ))}
    </div>
  )
}

export default RunnerList