import { useState } from 'react'

function RunnerForm({ runner, headerText, buttonText, onSubmit }) {
  const [formData, setFormData] = useState(
    runner || {
      name: '',
      age: ''
    }
  )

  return (
    <div>
      <h2>{headerText}</h2>
      <form onSubmit ={(e) => {
        e.preventDefault()
        onSubmit(formData)
      }}>
        <div>
          <label htmlFor='nameInput'>Name</label>
          <input
            id='nameInput'
            type='text'
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor='ageInput'>Age</label>
          <input
            id='ageInput'
            type='number'
            value={formData.age}
            onChange={e => setFormData({...formData, age: e.target.value})}
          />
        </div>
        <div>
          <button type='submit'>{buttonText}</button>
        </div>
      </form>
    </div>
  )
}

export default RunnerForm