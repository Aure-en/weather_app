import React, { useState, useEffect } from 'react'
import Overview from './Overview'
import Times from './Times'

function Forecast({ city, country, countryCode, lat, lng, units = 'imperial' }) {

  const [data, setData] = useState({})
  // Units can be imperial (Fahrenheit, m/h) or metric (Celsius, m/s)
  const [display, setDisplay] = useState({})

  useEffect(() => {
    if (!city) return
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=${units}&appid=eb7ce88a5d6bebe42b30615977a74e6a`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setData(response)
        return response
      })
      .then(response => setDisplay(response.hourly[0]))
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
      <Times setDisplay={setDisplay} data={data}/>
      <button onClick={() => console.log(display)}>Test</button>
    </div>
  )
}

export default Forecast
