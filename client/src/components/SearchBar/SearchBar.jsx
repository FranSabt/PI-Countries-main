import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../../store/actions/actions';

const SearchBar = () => {
	const [search, setSearch] = useState('');
  let dispatch = useDispatch();

	const onInputSubmit = (e) => {
		e.preventDefault();
		dispatch(getCountriesByName(search))
	}

	const onInputChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value)
	}
	
	return (
    <div>
			<form onSubmit={onInputSubmit}>
			<input type='text' onChange={onInputChange} value={search}/>
			<input type='submit' value='search'/>
			</form>
			SearchBar
		</div>
  )
}

export default SearchBar