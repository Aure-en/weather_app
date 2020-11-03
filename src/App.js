import React, { useReducer, useState } from 'react'
import InputSearch from './components/InputSearch'
import Image from './components/Image'
import Forecast from './components/Forecast'
import './sass/main.scss'

const initialState = {
  city: '',
  country: '',
  countryCode: '',
  lat: '',
  lng: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        city: action.location.city,
        country: action.location.country,
        countryCode: action.location.countryCode,
        lat: action.location.lat,
        lng: action.location.lng
      }
    default: return state
  }
}

function App() {

  const [location, dispatch] = useReducer(reducer, initialState)
  const [weather, setWeather] = useState('sky')

  const getLocation = (city, country, countryCode, lat, lng) => {
    dispatch({
      type: 'update',
      location: {
        city,
        country,
        countryCode,
        lat,
        lng
      }
    })
  }

  const getWeather = (description) => {
    setWeather(description)
  }

  const { city, country, countryCode, lat, lng } = location

  return (
    <div className="App">
      <div className="content">
        <main className="main">
          <header>
            <div className="heading">Through the window</div>
            <h1>Weather</h1>
          </header>
          <InputSearch getLocation={getLocation}/>
          <Forecast city={city} country={country} countryCode={countryCode} lat={lat} lng={lng} getWeather={getWeather}/>
        </main>
        <Image description={weather}/>
      </div>
    </div>
  );
}

export default App;
