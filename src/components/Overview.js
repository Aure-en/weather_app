import React from 'react'

function Overview({ city, country, main, icon, description, temp, feelslike, humidity, windSpeed, units }) {
  return (
    <div>
      <div className="error"></div>
      <h1>{city}, {country}</h1>
      <div className="current">
        <div>{main}</div>
        <div>{description}</div>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='Icon representing the weather'/>
        <div>{temp}{ units === 'imperial' ? 'F' : 'C°' }</div>
        <div>Feels: {feelslike}</div>
        <div>Humidity: {humidity}</div>
        <div>Wind: {windSpeed}{ units === 'imperial' ? 'm/h' : 'm/s' }</div>
      </div>
    </div>
  )
}

export default Overview
