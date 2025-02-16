import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MedicalDesktop from   './pages/MedicalDesktop'
import Dashboard from './pages/Dashboard'
import Donation from './pages/Donation'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/medical-desktop' element={<MedicalDesktop/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/donation' element={<Donation/>}/>
      </Routes>
    </div>
  )
}

export default App
