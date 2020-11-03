import React from 'react'
import TimesBtn from './TimesBtn';

function Times({ setDisplay, data, getWeather }) {

  const now = new Date();
  const nextDays = [0, 1, 2, 3, 4, 5, 6, 7]
  const nextHours = (() => {
    const hours = []
    let hour = now.getHours();
    while (hour % 3 !== 0) {
      hour -= 1
    }
    hours.push(hour)
    while (hours.length < 8) {
      if (hour === 24) hour = 0
      hours.push(hour+=3)
    }
    return hours
  })()

  return (
    <div>

      <ul>
       {
          nextHours.map((hour, index) =>
            <li
              key={`hourly-${index * 3}`}
              id={`hourly-${index * 3}`}
              onClick={(
                () => {
                  setDisplay(data.hourly[index * 3])
                  getWeather(data.hourly[index * 3].weather[0].description)
                }          
              )}>
                <TimesBtn timeProp={hour} type="hour" />
            </li>)
        }
      </ul>

      <ul>
        {
          nextDays.map(day =>
            <li
              key={`daily-${day}`}
              id={`daily-${day}`}
              onClick={(
                () => {
                  setDisplay(data.daily[day])
                  getWeather(data.daily[day].weather[0].description)
                }
              )}>
                <TimesBtn timeProp={(now.getDay() + day) % 7} type="date" />
            </li>)
        }
      </ul>

    </div>
  )
}

export default Times
