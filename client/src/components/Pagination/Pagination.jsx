import React from "react";
import './Pagination.css'

const Pagination = ({countriesPerPage, countriesFind, pagination }) => {

  console.log('countriesPerPage' + countriesPerPage, + 'countriesFind' + countriesFind,+ 'pag' + pagination);
  const pageNumber = []

  for ( let i = 1; i <= Math.ceil(countriesFind/countriesPerPage); i++) {
    pageNumber.push(i)
  }


  return (
    <nav className="pagConteiner">
      <ul className="numConteiner">
        {pageNumber && pageNumber.map(n => (
          <li className="number" key={n}>
            <button onClick={() => pagination(n)}>{n}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
