import React from 'react'
import { Link } from 'react-router-dom'
import './CardComponent.css'

const CardComponent = ({area, capital, continent, id, id_letters, flag, name, population, subregion}) => {
  return (
    <div>
			<div className='card'>
				<Link to={`details/${id}`}> <h3 className='titleCard'>{name}</h3> </Link>
				<img className='cardImage' src={flag} alt={name + ' flag'}/>
				<div>
					<p>Country: <span className='basicDetail'>{name}</span></p>
					<p>Capital: <span className='basicDetail'>{capital}</span></p>
					<p>Continent: <span className='basicDetail'>{continent}</span></p>
					<p>Population: <span className='basicDetail'>{population}</span></p>
				</div>
			</div>
		</div>
  )
}

export default CardComponent
