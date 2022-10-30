import React from 'react'
import { useEffect,  useState } from 'react'
import CardComponent from './CardComponent'

const CardsConteiner = () => {

  const [countries, setCountries] =  useState([])

  useEffect(() => {
    //fetch('https://restcountries.com/v3/all')
    fetch('http://localhost:3001/api/country')
    .then(res => res.json())
    .then(data => setCountries(data.slice(0, 9)))
  }, []) 

  return (
    <div>
      {countries.map(e => {
        return <CardComponent 
        area={e.area}
        capital={e.capital}
        continent={e.continent}
        key={e.id} 
        id_letters={e.id_letters} 
        flag={e.image}
        name={e.name} 
        population={e.population} 
        subregion={e.subregion}
        />
      })}
    </div>
  )
}

export default CardsConteiner