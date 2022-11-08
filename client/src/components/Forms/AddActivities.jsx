import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities, getCountries, addActivityToCountries } from '../../store/actions/actions'


function DinamicInputs() {  

	let dispatch = useDispatch();
	let activities = useSelector(state => state.activities)
	let countries = useSelector(state => state.contries)

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

	console.log(activities);
	console.log(countries);

	//!Punto de retorno

	const [actvityName, setActvityName ] = useState('');

	const handleActivityChange = (e) => {
		console.log(e.target.value);
		setActvityName( e.target.value)
	}

	const [countriesActivities, setCountriesActivities] = useState([])

  const agregaActividad = () => {
		setCountriesActivities([...countriesActivities, countriesActivities]);
};

	const handleCountryChange = (e) => {
		console.log(e.target.value);
		setCountriesActivities([...countriesActivities, e.target.value])
	}

  const handleSubmit = e => {
    e.preventDefault()
		for (e in countriesActivities) {
			//console.log('activity', actvityName, '  country',countriesActivities[e]);
			if(e > 0) dispatch(addActivityToCountries(actvityName, countriesActivities[e]))

		}
  }

  return (        
    <form onSubmit={handleSubmit}>            
      <label htmlFor="nombre">Actividad:</label>
			<select name='nombre' onChange={handleActivityChange}>
				<option value="" >Select activity</option>
				{activities.map(e => {
					return <option name='actividad' value={e.id} key={e.id} >{e.name}</option>
				})}
			</select>
      <input
        type="button"
        value="Agrega un Actividad"
        onClick={agregaActividad}
      />
      {
      countriesActivities.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
					<select name='pais' onChange={handleCountryChange}>
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