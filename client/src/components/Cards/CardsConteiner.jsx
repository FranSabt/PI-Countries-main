import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../store/actions/actions'
import CardComponent from './CardComponent'

const CardsConteiner = () => {

  // const [countries, setCountries] =  useState([])

  let dispatch = useDispatch();
  let countriesFind = useSelector(state => state.contries)

  useEffect(() => {
    if(!countriesFind.length){
      dispatch(getCountries())
    }
  }) //* Para que cargue 1 vez

  return (
    <div>
      {countriesFind.map(e => {
        return <CardComponent 
        area={e.area}
        capital={e.capital}
        continent={e.continent}
        key={e.id} 
        id={e.id} 
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