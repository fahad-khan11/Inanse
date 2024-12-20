import { useState } from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import About2 from './About2'
import Services from './Services'
import Contactus from './Contactus'
import Footer from './Footer'
function App() {
  return (
    <>
    <Header1/>
    <Header2 />
    <Routes>
      <Route path='/' 
      element={
        <>
        <Home/>
        <AboutUs/>
        <About2/>
        <Services/>
        <Contactus/>
        </>
    }
      />
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
