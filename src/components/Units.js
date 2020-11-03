import React, { useState } from 'react'

function Units( { changeUnits }) {

  const [checked, setChecked] = useState('imperial')

  return (
    <div className="units">
          
      <input type="radio" id="imperial" name="units" value="imperial" checked={checked === 'imperial'}/>
      <label onClick={() => {
        changeUnits('imperial')
        setChecked('imperial')
      }}>°F</label> | 
      
      <input type="radio" id="metric" name="units" value="metric" checked={checked === 'metric'}/>
      <label onClick={() => {
        changeUnits('metric')
        setChecked('metric')
      }}>°C</label>
      
    </div>
  )
}

export default Units
