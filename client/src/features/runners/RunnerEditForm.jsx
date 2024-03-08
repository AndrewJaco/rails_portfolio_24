import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchRunner, updateRunner } from '../../services/runnerService'
import RunnerForm from '../../components/RunnerForm'
import objectToFormData from '../../utils/formDataHelper'

function RunnerEditForm() {
  const [runner, setRunner] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCurrentRunner = async () => {
      try {
        const json = await fetchRunner(id);
        setRunner(json);
    } catch (error) {
      console.error('Failed to fetch runner', error)
    } 
    }
    fetchCurrentRunner()
  }
  , [id])

  const handleUpdateSubmit = async (rawData) => {
    const sanitizedData = { 
      name: rawData.name, 
      age: rawData.age, 
      image: rawData.image }

      const formData = objectToFormData({ runner: sanitizedData })
    
    try {
      const response = await updateRunner(id, formData)
      navigate(`/runners/${response.id}`)
    } catch (error) {
      console.error('Failed to update runner', error)
    }
  }

  if (!runner) return <h2>Loading...</h2>

  return (
    <RunnerForm
      runner={runner}
      headerText="Edit Runner"
      buttonText="Update Runner"
      onSubmit={handleUpdateSubmit}
    />
  )
}

export default RunnerEditForm