import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RunnerList from '../features/runners/RunnerList'
import RunnerDetails from '../features/runners/RunnerDetails'
import NewRunnerForm from '../features/runners/NewRunnerForm'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/runners' element={<RunnerList />} />
      <Route path='/runners/:id' element={<RunnerDetails />} />
      <Route path='/new' element={<NewRunnerForm />} />
    </Routes>
  )
}

export default AppRoutes