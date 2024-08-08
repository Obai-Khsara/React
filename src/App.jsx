import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Analytics from './Components/Analytics/Analytics'
import Newsletter from './Components/Newsletter/Newsletter'
import Cards from './Components/Cards/Cards'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App