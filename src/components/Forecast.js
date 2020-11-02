import React, { useState, useEffect } from 'react'
import Overview from './Overview'

function Forecast({ city, country, countryCode, lat, lng, units = 'imperial' }) {

  const [data, setData] = useState({})
  // Units can be imperial (Fahrenheit, m/h) or metric (Celsius, m/s)

  useEffect(() => {
    if (!city) return
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=${units}&appid=eb7ce88a5d6bebe42b30615977a74e6a`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setData(response)
      })
      .catch(error => console.log(error))
  }, [city, country, countryCode, lat, lng, units])

  return (
    <>
    <Overview city={city} country={country}/>
    </>
  )
}

export default Forecast
