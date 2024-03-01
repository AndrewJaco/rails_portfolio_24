import { useNavigate } from 'react-router-dom'
import { createRunner } from '../../services/runnerService'
import RunnerForm from '../../components/RunnerForm'

function NewRunnerForm() {
  const navigate = useNavigate()

  const handleCreateSubmit = async (formData) => {
    try {
      const response = await createRunner(formData)
      navigate(`/runners/${response.id}`)
    }
    catch (error) {
      console.error("failed to create runner", error)
    }
  }


  return (
   <RunnerForm 
    headerText="New Runner" 
    buttonText="Create Runner" 
    onSubmit={handleCreateSubmit}
    />
  )
}

export default NewRunnerForm