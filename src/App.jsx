import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Inclusions from './components/Inclusions'
import Cancelation from './components/Cancelation'
import Itinerary from './components/Itinerary'
import Hotel from './components/Hotel'
import Highlights from './components/Highlights'

function App() {
  return (
    <>
      <Header />
      <Highlights />
      <Hotel />
      <Itinerary />
      <Inclusions />
      <Cancelation />
      <Footer />
    </>
  )
}

export default App