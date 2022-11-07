import React from "react";
import './Pagination.css'

const Pagination = ({countriesPerPage, countriesFind, pagination, currentPage }) => {

  // console.log('countriesPerPage' + countriesPerPage, + 'countriesFind' + countriesFind,+ 'pag' + pagination);
  const pageNumber = []

  for ( let i = 1; i <= Math.ceil(countriesFind/countriesPerPage); i++) {
    pageNumber.push(i)
  }


  return (
    <nav className="pagConteiner">
      <ul className="numConteiner">
        {pageNumber && pageNumber.map(n => (
          n !== currentPage ? 
          <li className="number" key={n}>
            <button className="btn-n" onClick={() => pagination(n)}>{n}</button>
          </li>
          : 
          <li className="currentNumber" key={n}>
            <button className="btn-n" onClick={() => pagination(n)}>{n}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
