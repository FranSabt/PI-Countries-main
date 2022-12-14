import React from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesAll, getAllActivities } from '../../store/actions/actions'
import { useEffect } from 'react'
import './LandingPage.css'
import countryNameArrow from '../../assets/countryNameArrow.png'  
import countryBTNs from '../../assets/countryBTNs.png'  
import countryDetails from '../../assets/countryDetails.png' 

const LandingPage = () => {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesAll())
    dispatch(getAllActivities())

  },[dispatch])


  return (
    <div className='landing-conteiner'>
        <h1>Welcome to Fran's CountryApp Project!!!</h1>

        <div className='div-conteiner'>
          <h2>What's about?</h2>
          <p className='landing-bg'>Country APIs is a little web app that allows the user to see the different countries in the world,  can see also all kinds of tourist activities for each one of them with the season in wich that activity can be done,  as well as to create new activities.<br/>It was build with love and care and I spect that this app be of your appreciation.</p>
        </div>

        <div >
        <ul className='div-conteiner'>
          <li className='landing-bg'>
            <h3>Click in Home to see al the contries in the world</h3>
          </li>
          <li className='landing-bg'>
            <h3>If you make click on the country's name yo can see te details of the country</h3>
            <img className='landing-img' src={countryNameArrow} alt="an arrow that's point to country name's"/>
          </li>
          <li className='landing-bg'>
            <h3>And you will see the details like this</h3>
            <img className='landing-img' src={countryDetails} alt="card with details of Canada"/>
          </li>
          <li className='landing-bg'>
            <h3>Also you can get differents sorting for how the countries are show to you, and if you dont want any particular order anymores use "Reset" button</h3>
            <img className='landing-img' src={countryBTNs} alt="an arrow that's point to countries buttons"/>
          </li>
          <li>
            <h3>In Form you can create new activities</h3>
          </li>
          <li>
            <h3>And in AddActivity you can add has many activities to many contries as you like</h3>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default LandingPage