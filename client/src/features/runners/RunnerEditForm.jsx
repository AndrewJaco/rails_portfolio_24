import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchRunner, updateRunner } from '../../services/runnerService'

function RunnerEditForm() {
  const [runner, setRunner] = useState(null)
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCurrentRunner = async () => {
      try {
        const json = await fetchRunner(id);
        setRunner(json);
    } catch (error) {
      console.error('Failed to fetch runner', error)
    } finally {
      setLoading(false)
    }
    }
    fetchCurrentRunner()
  }
  , [id])

  const handleSubmit = async e => {
    e.preventDefault()
    
    const updatedRunner = {
      name: runner.name,
      age: runner.age
    }
    try {
      const response = await updateRunner(id, updatedRunner)
      navigate(`/runners/${response.id}`)
    } catch (error) {
      console.error('Failed to update runner', error)
    }
  }

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h2>Edit Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nameInput'>Name</label>
          <input
            id='nameInput'
            type='text'
            value={runner.name}
            onChange={e => setRunner({...runner, name: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor='ageInput'>Age</label>
          <input
            id='ageInput'
            type='number'
            value={runner.age}
            onChange={e => setRunner({...runner, age: e.target.value})}
            required
          />
        </div>
        <div>
          <button type='submit'>Save Runner</button>
        </div>
      </form>
    </div>
  )
}

export default RunnerEditForm