import React from 'react'

function Overview({ city, country, display, units }) {

  const main = display.weather[0].main
  const description = display.weather[0].description
  const icon = display.weather[0].icon
  const temp = display.temp
  const humidity = display.humidity
  const wind = display.wind_speed
  const date = new Date(display.dt * 1000)
  const precipitation = display.pop;

  return (
    <div className="forecast">

      <div className="forecast__heading">
        <h2>{city}, {country}</h2>
        <h3>{convertDay(date.getDay())}, {convertMonth(date.getMonth())} {date.getDate()}, {date.getFullYear()}</h3>
      </div>

      <div className="forecast__content">

        <div className="forecast__main">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='Icon representing the weather'/>
          <div className="forecast__temp">
            {
              typeof temp === 'number' ?
                <div className="forecast__temp--main">{temp}{ units === 'imperial' ? '°F' : '°C' }</div> :
                <div>
                  <div className="forecast__temp--main">{temp.day}{ units === 'imperial' ? '°F' : '°C' }</div>
                  <div>
                    <span className="forecast__temp--min">{temp.min}</span>
                    <span className="forecast__temp--max">{temp.max}</span>
                  </div>
                </div>
            }
          </div>
        </div>

        <div className="forecast__description">{main} - {description}</div>

        <div className="forecast__details">
          <div data-testid="precipitation"><span className="details">Precipitation:</span> {(precipitation * 100).toFixed(0)}%</div>
          <div data-testid="humidity"><span className="details">Humidity:</span> {humidity}%</div>
          <div data-testid="wind"><span className="details">Wind:</span> {wind}{ units === 'imperial' ? 'm/h' : 'm/s' }</div>
        </div>

      </div>
    </div>
  )
}

const convertDay = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday', 'Sunday']
  return days[date]
}

const convertMonth = (date) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return months[date]
}

export default Overview
