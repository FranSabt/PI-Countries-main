import React from 'react'
import './CardComponent.css'

const CardComponent = ({area, capital, continent, id_letters, flag, name, population, subregion}) => {
  return (
    <div>
			<div className='card'>
			<h3 className='titleCard'>{name}</h3>
			<img className='cardImage' src={flag} alt={name + ' flag'}/>
			<p>Country: {name}</p>
			<p>Capital: {capital}</p>
		</div>
		</div>
  )
}

export default CardComponent
