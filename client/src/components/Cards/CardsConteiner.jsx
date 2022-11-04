import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../store/actions/actions'
import CardComponent from './CardComponent'
import Loading from '../Loading/Loading'
import Pagination from '../Pagination/Pagination'
import './CardConteiner.css' //?Styles

const CardsConteiner = (props) => {

  let dispatch = useDispatch();
  let countriesFind = useSelector(state => state.contriesFiltered)
  
  //*info for the pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countriesFind.slice(indexOfFirstCountry, indexOfLastCountry)

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    if(!countriesFind.length){
      dispatch(getCountries())
    }
  },[dispatch]) //* Para que cargue 1 vez

console.log(countriesFind);

  return (
    <div className='mainConteiner'>

      <Pagination 
      countriesPerPage={countriesPerPage}
      countriesFind={countriesFind.length}
      pagination={pagination}
      />
      <div className='cardConteiner'> 


    {currentCountries.length ?  

      currentCountries?.map(e => (
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

    : <div><Loading/></div>}
        </div>
    </div>
  )
}

export default CardsConteiner



// return (
//   <div className='mainConteiner'>
    
//     {currentCountries > 0 ? 
//     <Pagination 
//     countriesPerPage={countriesPerPage}
//     countriesFind={countriesFind}
//     pagination={pagination}
//     /> : null}
//     <div className='cardConteiner'> 


//   {currentCountries.length ?  

//     currentCountries?.map(e => (
//       <CardComponent 
//       area={e.area}
//       capital={e.capital}
//       continent={e.continent}
//       key={e.id_letters} 
//       id={e.id} 
//       id_letters={e.id_letters} 
//       flag={e.image}
//       name={e.name} 
//       population={e.population} 
//       subregion={e.subregion}
//       /> 
//     ))

//   : <div><Loading/></div>}
//       </div>
//   </div>
// )
// }
