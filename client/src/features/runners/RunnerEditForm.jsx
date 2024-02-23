import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_URL } from '../../constants'

function RunnerEditForm() {
  const [runner, setRunner] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRunner = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`)
        if (response.ok) {
          const data = await response.json()
          setRunner(data)
        } else {
          throw response
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchRunner()
  }
  , [id])

    const handleSubmit = async e => {
      e.preventDefault()
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: runner.name,
          age: runner.age
        })
      })
      if (response.ok) {
        navigate(`/runners/${id}`)
      } else {
        console.error('Failed to update runner')
      }
    }

  if (!runner) return <h2>Loading...</h2>

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