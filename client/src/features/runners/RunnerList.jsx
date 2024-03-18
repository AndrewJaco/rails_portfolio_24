import { useState, useEffect } from 'react'
import { deleteRunner } from '../../services/runnerService'
import RunnerCard from '../../components/RunnerCard'

import SearchBar from './SearchBar'
import useUrlSearchParams from '../../hooks/useUrlSearchParams'
import useRunnersData from '../../hooks/useRunnersData'
import Pagination from './Pagination'
import { useSearchParams } from 'react-router-dom'

function RunnerList() {
  const [runners, setRunners] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [debounceSearchTerm, setDebounceSearchTerm] = useUrlSearchParams('search')

  const [searchParams, setSearchParams] = useSearchParams()
  const initialPageFromUrl = Number(searchParams.get('page')) || 1
  const [currentPage, setCurrentPage] = useState(initialPageFromUrl || 1)
  
  const {
    runners: fetchedRunners,
    loading,
    error,
    totalRunners, 
    perPage
  } = useRunnersData(debounceSearchTerm, currentPage)

  useEffect(() => {
    if(fetchedRunners) {
      setRunners(fetchedRunners)
    }
  }, [fetchedRunners])

  useEffect(() => {
    const initialSearchTerm = searchParams.get('search') || ''
    setSearchTerm(initialSearchTerm)

    const pageFromURL = searchParams.get('page') || 1
    setCurrentPage(Number(pageFromURL))
  }, [searchParams])

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

  const handlePageChange = (page) => {
    setCurrentPage(page)
    setSearchParams({ search: debounceSearchTerm, page })
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <SearchBar
        value={searchTerm}
        onSearchChange={handleDebounceSearchChange}
        onImmedianteChange={handleImmediateSearchChange}
      />
      <Pagination 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={Math.ceil(totalRunners / perPage)}
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