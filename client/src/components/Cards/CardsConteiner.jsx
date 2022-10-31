import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../store/actions/actions'
import CardComponent from './CardComponent'

const CardsConteiner = (props) => {

  // const [countries, setCountries] =  useState([])

  let dispatch = useDispatch();
  let countriesFind = useSelector(state => state.contries)

  useEffect(() => {
    if(!countriesFind.length){
      dispatch(getCountries())
    }
  },[dispatch]) //* Para que cargue 1 vez

console.log(countriesFind);

  return (
    <div>
    {countriesFind.length ?  

      countriesFind?.map(e => (
        <CardComponent 
        area={e.area}
        capital={e.capital}
        continent={e.continent}
        key={e.id_letters} 
        id={e.id} 
        id_letters={e.id_letters} 
        flag={e.image}
        name={e.name} 
        population={e.population} 
        subregion={e.subregion}
        /> 
      ))

    : <div>Loader... </div>}
    </div>
  )
}

export default CardsConteiner