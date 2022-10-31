import React from 'react'
import { useParams  } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryDetails } from '../../store/actions/actions'
import './Details.css'

const Details = () => {
	let { id } = useParams()

let dispatch = useDispatch();
  let countryFind = useSelector(state => state.detail)

  useEffect(() => {
	if(!countryFind.id !== id){
		dispatch(getCountryDetails(id))
	}
  },[countryFind] ) 


  return (
		<div className='card-detail'>
			<div >
			<h3 className='titleCard-detail'>{countryFind.name}</h3>
			<img className='cardImage-detail' src={countryFind.image} alt={countryFind.name + ' flag'}/>
			<p>Country: {countryFind.name}</p>
			<p>Intetnational Code: {countryFind.id_letters}</p>
			<p>Capital: {countryFind.capital}</p>
			<p>Continent: {countryFind.continent}		||	Subregion: {countryFind.subregion}</p>
			<p>Ground Area: {countryFind.area} Km²</p>
			<p>Population: {countryFind.population}</p>
		</div>
	</div>
  )
}

export default Details