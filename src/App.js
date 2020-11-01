import React, { useState } from 'react'
import InputSearch from './components/InputSearch'
import Image from './components/Image'
import Forecast from './components/Forecast'

function App() {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  const getLocation = (city, country, lat, lng) => {
    setCity(city)
    setCountry(country)
    setLat(lat)
    setLng(lng)
  }

  return (
    <div className="App">
      <Image />
      <div className="content">
        <InputSearch getLocation={getLocation}/>
        <Forecast city={city} country={country} lat={lat} lng={lng}/>
      </div>
    </div>
  );
}

export default App;
