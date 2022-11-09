import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities, addActivityToCountries, getCountries } from '../../store/actions/actions'


function DinamicInputs() {  

	let dispatch = useDispatch();
	let activities = useSelector(state => state.activities)
	let countries = useSelector(state => state.allContries)

	countries = countries.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	})


  useEffect(() => {
      dispatch(getAllActivities())

  },[dispatch])


	useEffect(() => {
    dispatch(getCountries())
    
  },[dispatch])


	//!Punto de retorno

	const [actvityName, setActvityName ] = useState('');

	const handleActivityChange = (e) => {
		setActvityName( e.target.value)
	}

	const [countriesActivities, setCountriesActivities] = useState([])

  const agregaActividad = () => {

	setCountriesActivities([...countriesActivities, countriesActivities]);
};

	const handleCountryChange = (e) => {
		if(e.target.value.length > 8) {
			setCountriesActivities([...countriesActivities, e.target.value])
		}
	}

  const handleSubmit = e => {
    e.preventDefault()
		for (e in countriesActivities) {
		//console.log('e =>', countriesActivities[e])
			if(e > 0 && countriesActivities[e].length === 36) dispatch(addActivityToCountries(actvityName, countriesActivities[e]))
			setActvityName('')
			setCountriesActivities([])
		}
  }

  return (        
    <form onSubmit={handleSubmit} className="formConteiner">            
      <label className='label' htmlFor="nombre">Add activities to your countries:</label>
			<select className='select-activitie' name='nombre' onChange={handleActivityChange}>
				<option value="" >Select activity</option>
				{activities.map(e => {
					return <option name='actividad' value={e.id} key={e.id} >{e.name}</option>
				})}
			</select>
      <input
        type="button"
        value="Add an activity"
        onClick={agregaActividad}
      />
      {
      countriesActivities.map((el, i) => (
        <div className='landing-bg' key={`country-${i}`}>
          <label htmlFor={`country-${i}`}>{`Country Nº${i + 1}`}</label>
					<select name='pais' onClick={handleCountryChange}>
						<option value="" >Select activity</option>
				{countries.map(e => {
					return <option  value={e.id} key={e.id} >{e.name}</option>
				})}
					</select>

        </div>
      ))
      }
      <input type="submit" value="Submit" />        
    </form>   
  );
};

export default DinamicInputs;