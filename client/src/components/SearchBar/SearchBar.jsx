import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../../store/actions/actions';
import './SearchBar.css'

const SearchBar = () => {
	const [search, setSearch] = useState('');

	let dispatch = useDispatch();

	const onInputSubmit = (e) => {
		e.preventDefault();
		dispatch(getCountriesByName(search))
		setSearch('')
	}

	const onInputChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value)
	}
	
	return (
    <div className='searchbar'>
			<form onSubmit={onInputSubmit}>
				<input className='searchbar-bar' type='text' placeholder='Search...' onChange={onInputChange} value={search}/>
				<input className='searchbar-btn' type='submit' value='search'/>
			</form>
	</div>
  )
}

export default SearchBar