import React, { useState, useEffect } from 'react'
import AlgoliaPlaces from 'algolia-places-react';

function InputSearch({ getLocation }) {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  useEffect(() => getLocation(city, country, lat, lng))

  return (
    <AlgoliaPlaces
      placeholder='Write an address here'
 
      options={{
        appId: 'plCIL43TO1Z4',
        apiKey: 'be563ce995a9d539bed17e7dd31bb4f3',
        type: 'city'
      }}
 
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
        setCity(suggestion.name)
        setCountry(suggestion.country)
        setLat(suggestion.latlng.lat)
        setLng(suggestion.latlng.lng)
      }}
    />
  )
}

export default InputSearch
