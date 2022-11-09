import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../store/actions/actions'
import CardComponent from './CardComponent'
import Loading from '../Loading/Loading'
import Pagination from '../Pagination/Pagination'
import Order from '../Order/Order'
import './CardConteiner.css' //?Styles

const CardsConteiner = () => {

  let dispatch = useDispatch();
  let countriesFind = useSelector(state => state.contriesFiltered)
  
  //*info for the pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countriesFind.slice( (currentPage === 1 ? indexOfFirstCountry : indexOfFirstCountry - 1),  (currentPage === 1 ? indexOfLastCountry : indexOfLastCountry - 1))
  //? these logic in "currentCountries" if beacuse wdon't want to jump one country between the page 1 and the next pages



  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect (() => {
    if (currentCountries < 250){
      pagination(1)
    }
  },)

  useEffect(() => {
    setCountriesPerPage(
      currentPage === 1 ? 9 : 10
    )
  },[currentPage]) //!

  useEffect(() => {
    if(!countriesFind.length){
      dispatch(getCountries())
    }
  }) //* Para que cargue 1 vez


  const onReset = () => {
    dispatch(getCountries())
}

  const onPrev = () => {
    if (currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

  const onNetx = () => {
    if (currentPage < (countriesFind.length / countriesPerPage)){
      setCurrentPage(currentPage + 1)
    }
  }

console.log(countriesFind);




  return (
    <div className='mainConteiner'>

      <div className='reset'>
        <button className='btn-reset' onClick={onReset}>Reset Filters</button>
        <Order />
      </div>

      <div className='btn-conteiner'>
        <div className='pagination-conteiner numConteiner'>
          <div className='prev-next-btn'>
            <button onClick={onPrev}>&laquo; Prev</button>
            <button onClick={onNetx}>Netx &raquo;</button>
          </div>
          <Pagination className='pagination'
              countriesPerPage={countriesPerPage}
              countriesFind={countriesFind.length}
              pagination={pagination}
              currentPage={currentPage}
        />
        </div>
      </div>

      
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
