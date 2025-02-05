import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MedicalDesktop from   './pages/MedicalDesktop'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/medical-desktop' element={<MedicalDesktop/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
