import React, { useState, useEffect } from 'react'
import Overview from './Overview'
import Times from './Times'
import keys from '../config'

function Forecast({ city, country, countryCode, lat, lng, getWeather, units = 'imperial' }) {

  const [data, setData] = useState({})
  // Units can be imperial (Fahrenheit, m/h) or metric (Celsius, m/s)
  const [display, setDisplay] = useState({})

  useEffect(() => {
    if (!city) return
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=${units}&appid=${keys.openWeatherMap}`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setData(response)
        return response
      })
      .then(response => {
        setDisplay(response.hourly[0])
        getWeather(response.hourly[0].weather[0].description)
      })
      .catch(error => console.log(error))
    }, [city, country, countryCode, lat, lng, units])

  return (
    (Object.keys(data).length !== 0) &&
    <div>
      {(Object.keys(display).length !== 0) &&
        <Overview
          city={city} 
          country={country}
          display={display}
          units={units}
        />
      }
      <Times setDisplay={setDisplay} getWeather={getWeather} data={data}/>
      <button onClick={() => console.log(display)}>Test</button>
    </div>
  )
}

export default Forecast
