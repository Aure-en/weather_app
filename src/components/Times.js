import React from 'react'
import TimesBtn from './TimesBtn';

function Times() {

  const now = new Date();
  const nextDays = [0, 1, 2, 3, 4, 5, 6]
  const nextHours = (() => {
    const hours = []
    let hour = now.getHours();
    while (hour % 3 !== 0) {
      hour -= 1
    }
    hours.push(hour)
    while (hour <= 24) {
      hours.push(hour+=3)
    }
    return hours
  })()

  return (
    <div>
      <ul>
        {
          nextDays.map(day => <li key={`date-${day}`}><TimesBtn timeProp={(now.getDay() + day) % 7} type="date" /></li>)
        }
      </ul>

      <ul>
       {
          nextHours.map(hour => <li key={`hours-${hour}`}><TimesBtn timeProp={hour} type="hour" /></li>)
        }
      </ul>

    </div>
  )
}

export default Times
