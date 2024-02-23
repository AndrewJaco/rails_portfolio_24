import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RunnerList from '../features/runners/RunnerList'
import RunnerDetails from '../features/runners/RunnerDetails'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<></>} />
      <Route path='/runners' element={<RunnerList />} />
      <Route path='/runners/:id' element={<RunnerDetails />} />
      <Route path='/new' element={<h1>New runner form</h1>} />
    </Routes>
  )
}

export default AppRoutes