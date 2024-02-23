import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RunnerList from '../features/runners/RunnerList'
import RunnerDetails from '../features/runners/RunnerDetails'
import NewRunnerForm from '../features/runners/NewRunnerForm'
import RunnerEditForm from '../features/runners/RunnerEditForm'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/runners' element={<RunnerList />} />
      <Route path='/runners/:id' element={<RunnerDetails />} />
      <Route path='/new' element={<NewRunnerForm />} />
      <Route path='/runners/:id/edit' element={<RunnerEditForm />} />
    </Routes>
  )
}

export default AppRoutes