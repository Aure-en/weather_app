import React from 'react'

function Forecast({ city, country, lat, lng }) {
  return (
    <div>
      <h2>City - {city}</h2>
      <h2>Country - {country}</h2>
      <h2>Lat - {lat}</h2>
      <h2>Lng - {lng}</h2>
    </div>
  )
}

export default Forecast
