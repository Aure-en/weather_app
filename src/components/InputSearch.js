import React, { useEffect, useReducer } from 'react'
import AlgoliaPlaces from 'algolia-places-react';

const initialState = {
  city: '',
  country: '',
  countryCode: '',
  lat: '',
  lng: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        city: action.location.city,
        country: action.location.country,
        countryCode: action.location.countryCode,
        lat: action.location.lat,
        lng: action.location.lng
      }
    default: return state
  }
}

function InputSearch({ getLocation }) {

  const [location, dispatch] = useReducer(reducer, initialState)

  const { city, country, countryCode, lat, lng } = location

  useEffect(() => getLocation(city, country, countryCode, lat, lng), [city, country, countryCode, lat, lng, location])

  return (
    <AlgoliaPlaces
      placeholder="Write a city name here"
 
      options={{
        appId: 'plCIL43TO1Z4',
        apiKey: 'be563ce995a9d539bed17e7dd31bb4f3',
        type: 'city'
      }}
 
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
        dispatch({
          type: 'update',
          location: {
            city: suggestion.name,
            country: suggestion.country,
            countryCode: suggestion.countryCode,
            lat: suggestion.latlng.lat,
            lng: suggestion.latlng.lng
          }
        })
      }}
    />
  )
}

export default InputSearch
