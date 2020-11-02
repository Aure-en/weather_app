import React, { useReducer } from 'react'
import InputSearch from './components/InputSearch'
import Image from './components/Image'
import Forecast from './components/Forecast'

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

  const { city, country, countryCode, lat, lng } = location

  return (
    <div className="App">
      <Image />
      <div className="content">
        <InputSearch getLocation={getLocation}/>
        <Forecast city={city} country={country} countryCode={countryCode} lat={lat} lng={lng}/>
      </div>
    </div>
  );
}

export default App;
