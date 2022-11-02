import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../store/actions/actions';
import './FormsActivities.css';

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
    <div className='formConteiner'>
			<form className='form' action='' onSubmit={handleSubmit}>

				{/*//? ACTIVITY NAME */}
				<div className='activityName'>
					<label>Activy name: </label>
					<input type="text" id='activityName' placeholder="Activity Name" name='name' value={input.name} onChange={handleInputChange}/>
				</div>

				{/*//? ACTIVITY DURATION */}
				<div className='activityDuration'> 
					<label>Duration: </label>
					<input type="number" id='activityName' placeholder="Duration in minutes" name='duration' value={input.duration} onChange={handleInputChange}/>
				</div>

				{/*//? ACTIVITY DUFICULTY */}
				<div className='dificulty'>
					<label>Dificulty measure from 1 to 5: </label>
					<input type="number" id="quantity" name="dificulty" min="1" max="5" value={input.dificulty} onChange={handleInputChange}/>
				</div>

				{/*//? ACTIVITY SEASON */}
				<div className='fieldsetConteiner'>
					<fieldset className='fieldset'>
						<legend>Select a season:</legend>
						<div>
							<input type="radio" id="summer" name="season" value="summer" checked onChange={handleInputChange}/>
							<label htmlFor="summer">Summer</label>
						</div>
						<div>
							<input type="radio" id="autumn" name="season" value="autumn" onChange={handleInputChange}/>
							<label htmlFor="autumn">Autumn</label>
						</div>
						<div>
							<input type="radio" id="winter" name="season" value="winter" onChange={handleInputChange}/>
							<label htmlFor="winter">Winter</label>
						</div>
						<div>
							<input type="radio" id="spring" name="season" value="spring" onChange={handleInputChange}/>
							<label htmlFor="spring">Spring</label>
						</div>
					</fieldset>
				</div>

							{/*//? SUBMIT BUTTON */}
			<input type='submit' value={'Add activity'} />
			</form>
		</div>
  )
}

//FromsActivities.propTypes = {}

export default FromsActivities