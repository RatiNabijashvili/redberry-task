import React, { useState } from 'react'
import { Context } from '../context'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import GeneralInformation from '../General-Information/GeneralInformation'
import Experience from '../Experience/Experience'
import Education from '../Education/Education'
import Resume from '../Resume/Resume'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/general-information' element={<GeneralInformation />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
