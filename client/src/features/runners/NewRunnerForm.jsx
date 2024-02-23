import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../constants'

function NewRunnerForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    const newRunner = { name, age }
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRunner)

    })
    if (response.ok) {
      const {id} = await response.json()
      navigate(`/runners/${id}`)
    } else {
      console.error('Failed to create runner')
    }
  }


  return (
    <div>
      <h2>Create a New Runner</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nameInput'>Name</label>
          <input
            id='nameInput'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='ageInput'>Age</label>
          <input
            id='ageInput'
            type='number'
            value={age}
            onChange={e => setAge(e.target.value)}
            required
          />
        </div>  
        <div>
          <button type='submit'>Create Runner</button>
        </div>
      </form>  
    </div>
  )
}

export default NewRunnerForm