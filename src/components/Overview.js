import React from 'react'

function Overview({ city, country, display, units }) {

  const main = display.weather[0].main
  const description = display.weather[0].description
  const icon = display.weather[0].icon
  const temp = display.temp
  const humidity = display.humidity
  const wind = display.wind_speed

  return (
    <div>
      <div className="error"></div>
      <h1>{city}, {country}</h1>
      <div className="forecast">
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='Icon representing the weather'/>
        <div>{main}</div>
        <div>{description}</div>

        {
          typeof temp === 'number' ?
            <div>{temp}{ units === 'imperial' ? 'F' : 'C°' }</div> :
            <div>
              <div>{temp.day}{ units === 'imperial' ? 'F' : 'C°' }</div>
              <div>{temp.min}</div>
              <div>{temp.max}</div>
            </div>
        }

        <div>Humidity: {humidity}</div>
        <div>Wind: {wind}{ units === 'imperial' ? 'm/h' : 'm/s' }</div>
      </div>
    </div>
  )
}

export default Overview
