import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { API_URL } from '../../constants'

function RunnerDetails() {
  const [ runner, setRunner ] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  
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

  const deleteRunner = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        navigate('/runners')
      } else {
        throw response
      }
    } catch (error) {
      console.error(error)
    }
  }

  if (!runner) return <h2>Loading...</h2>

  return (
    <div>
      <h2>{runner.name}</h2>
      <p>age: {runner.age}</p>
      <Link to={`/runners/${id}/edit`}>Edit</Link>
      <br />
      <Link to='/runners'>Back to runners</Link>
      {" | "}
      <button onClick={deleteRunner}>Delete</button>
    </div>
  )
}

export default RunnerDetails