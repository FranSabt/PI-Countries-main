import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../store/actions/actions';

const FromsActivities = props => {

	let dispatch = useDispatch()

	const [input, setInput]  = useState(
		{
			name: '',
			dificulty: 1,
			season: '',
			duration: 1,
		}
	);

	const handleInputChange =  (e) => {
		setInput({
			...input, 
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addActivity(input))
	}


  return (
    <>
			<form action='' onSubmit={handleSubmit}>
				<div>
					<input type="text" id='activityName' placeholder="Activity Name" name='name' value={input.name} onChange={handleInputChange}/>
				</div>
				{/* //! crear un slide para el valor numerico */}
				<div> 
					<input type="number" id='activityName' placeholder="Duration in minutes" name='duration' value={input.duration} onChange={handleInputChange}/>
				</div>

				<input type="number" id="quantity" name="dificulty" min="1" max="5" value={input.dificulty} onChange={handleInputChange}/>
				<fieldset>
				<legend>Select a maintenance season:</legend>
				<div>
					<input type="radio" id="summer" name="season" value="summer" checked onChange={handleInputChange}/>
					<label for="summer">Summer</label>
				</div>
				<div>
					<input type="radio" id="autumn" name="season" value="autumn" onChange={handleInputChange}/>
					<label for="autumn">Autumn</label>
				</div>
				<div>
					<input type="radio" id="winter" name="season" value="winter" onChange={handleInputChange}/>
					<label for="winter">Winter</label>
				</div>
				<div>
					<input type="radio" id="spring" name="season" value="spring" onChange={handleInputChange}/>
					<label for="spring">Spring</label>
				</div>
			</fieldset>
			<input type='submit' value={'Add activity'} />
			</form>
		</>
  )
}

//FromsActivities.propTypes = {}

export default FromsActivities