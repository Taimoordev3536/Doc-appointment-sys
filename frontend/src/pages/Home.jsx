import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import DoctorFind from '../components/DoctorFind'

function Home() {
  return (
    <div>
    {/* <Header/> */}
    <DoctorFind/>
    <SpecialityMenu/>
    <TopDoctors/>
    <Banner/>
    </div>
  )
}

export default Home
