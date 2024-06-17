import React from 'react'
import Course from '../Components/Course'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Courses = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <Course />
            <Footer />
        </div>
    )
}

export default Courses