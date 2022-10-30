import React from 'react'
import { Link } from 'react-router-dom'
import './CardComponent.css'

const CardComponent = ({area, capital, continent, id, id_letters, flag, name, population, subregion}) => {
  return (
    <div>
			<div className='card'>
				<Link to={`details/${id}`}> <h3 className='titleCard'>{name}</h3> </Link>
				<img className='cardImage' src={flag} alt={name + ' flag'}/>
				<p>Country: {name}</p>
				<p>Capital: {capital}</p>
			</div>
		</div>
  )
}

export default CardComponent
