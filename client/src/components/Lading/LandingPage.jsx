import React from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesAll } from '../../store/actions/actions'
import { useEffect } from 'react'

const LandingPage = () => {

  let dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCountriesAll())

  },[dispatch])


  return (
    <div>
        <h1>Welcome to Fran's CountryApp Project!!!</h1>
    </div>
  )
}

export default LandingPage