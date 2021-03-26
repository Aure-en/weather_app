import React, { useState, useEffect } from 'react'
import Overview from './Overview'
import Times from './Times'
import keys from '../config'
import Units from './Units'

function Forecast({ city, country, countryCode, lat, lng, getWeather }) {

  const [data, setData] = useState({})
  // Units can be imperial (Fahrenheit, m/h) or metric (Celsius, m/s)
  const [display, setDisplay] = useState({})
  const [units, setUnits] = useState('metric')

  const changeUnits = (units) => {
    setUnits(units)
  }

  useEffect(() => {
    if (!city) return
    (async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=${units}&appid=${keys.openWeatherMap}`);
        const data = await response.json();
        setData(data);
        setDisplay(data.hourly[0]);
        getWeather(data.hourly[0]);
      } catch (err) {
        console.log(err);
      }
    })();
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
      <Units changeUnits={changeUnits} />
    </div>
  )
}

export default Forecast
