import React, { useState, useEffect } from 'react'

function TimesBtn({ timeProp, type }) {

  const [time, setTime] = useState(timeProp)

  useEffect(() => {
    if (type === 'date') {
      setTime(getDayLetter(time))
    } else {
      setTime(`${timeProp}:00`)
    }
  }, [])

  return (
      <button type="button">{time}</button>
  )
}

const getDayLetter = (date) => {
  const dayLetters = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  return dayLetters[date]
}

export default TimesBtn
