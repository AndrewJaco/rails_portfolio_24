import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../../constants'

function RunnerDetails() {
  const [ runner, setRunner ] = useState(null)
  const { id } = useParams()
  
  useEffect(() => {
    async function fetchRunner() {
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
  }, [id])

  if (!runner) return <h2>Loading...</h2>

  return (
    <div>
      <h2>{runner.name}</h2>
      <p>age: {runner.age}</p>
      <Link to={`/runners/${id}/edit`}>Edit</Link>
      <br />
      <Link to='/runners'>Back to runners</Link>
    </div>
  )
}

export default RunnerDetails