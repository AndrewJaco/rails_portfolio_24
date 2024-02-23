import React, { useState, useEffect } from 'react'
import { API_URL } from '../../constants'

function RunnerList() {
  const [runners, setRunners] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchRunners() {
      try {
        const response = await fetch(API_URL)
        if (response.ok) {
          const data = await response.json()
          setRunners(data)
          setLoading(false)
        } else {
        throw response
        }
      } catch (error) {
        console.error(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchRunners()
  }, [])

  return (
    <div>
      {runners.map(runner => (
        <div key={runner.id}>
          <h2>{runner.name}</h2>
          <p>{runner.age}</p>
        </div>
      ))}
    </div>
  )
}

export default RunnerList