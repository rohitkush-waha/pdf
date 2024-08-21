import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Inclusions from './components/Inclusions'
import Cancelation from './components/Cancelation'
import Itinerary from './components/Itinerary'
import Hotel from './components/Hotel'
import Highlights from './components/Highlights'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className='content-flex container'>
      <div  className='width-60'>
      <Highlights />
      <Hotel />
      <Itinerary />
      <Inclusions />
      <Cancelation />
      
      </div>
      <div>
      <Sidebar />
      </div>
      </div>
      <Footer />
    </>
  )
}

export default App