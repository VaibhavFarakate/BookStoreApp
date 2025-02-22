import React from 'react'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import { Route, Routes } from "react-router-dom"
import Signup from './Components/Signup'
import Contact from './Contact/Contact'

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>
    </>
  )
}

export default App
