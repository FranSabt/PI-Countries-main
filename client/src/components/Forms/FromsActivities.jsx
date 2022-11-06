import React from 'react'
// import PropTypes from 'prop-types'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../store/actions/actions';
import './FormsActivities.css';

const FromsActivities = ()=> {

	let dispatch = useDispatch()


	const [input, setInput]  = useState(
		{
			name: '',
			dificulty: '',
			season: '',
			duration: '',
		}
	);

	const [errorName, setErrorName] = useState('');

	const handleInputName =  (e) => {

		if(!/\S+[A-Za-z]{2,16}\S+/.test(e.target.value)){
			setErrorName('Name has to be a least 4 letters long')
		}
		else {
			setErrorName('')
		}
		setInput({
			...input, 
			[e.target.name]: e.target.value,
		})
	}

	const [errorDificulty, setErrorDificulty] = useState('');

	const handleInputDificulty =  (e) => {

		if(!/[1-5]{1}/.test(e.target.value)){
			setErrorDificulty('Dficulty must be a number between 1 and 5')
		}
		if (Number(e.target.value) > 5 || Number(e.target.value) < 1){
			setErrorDificulty('Dficulty must be a number between 1 and 5')
		}
		else {
			setErrorDificulty('')
		}
		setInput({
			...input, 
			[e.target.name]: e.target.value,
		})
	}


	const [errorDuration, setErrorDuration] = useState('');

	const handleInputDuration =  (e) => {
		
		if (Number(e.target.value) > 120 || Number(e.target.value) < 15){
			setErrorDuration('Duration must be a leat 15 min a max 120')
		}
		else if (!Number.isInteger(Number(e.target.value))){
			setErrorDuration('Duration must be in Integers')
		}
		else {
			setErrorDuration('')
		}
		setInput({
			...input, 
			[e.target.name]: e.target.value,
		})
	}



	const handleInputSeason = (e) => {
		setInput({
			...input, 
			[e.target.name]: e.target.value,
		})
	}
	
	


	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addActivity(input));
		setInput({
			name: '',
			dificulty: '',
			season: '',
			duration: '',
		})

	}

  return (
    <div className='formConteiner'>
			<form className='form' action='' onSubmit={handleSubmit}>

				{/*//? ACTIVITY NAME */}
				<div className='activityName'>
					<label>Activy name: </label>
					<input type="text" id='activityName' placeholder="Activity Name" name='name' value={input.name} onChange={handleInputName}/>
					{!errorName ? <div><br/></div> : <div>{errorName}</div>}
				</div>

				{/*//? ACTIVITY DURATION */}
				<div className='activityDuration'> 
					<label>Duration: </label>
					<input type="text" id='activityName' placeholder="Duration in minutes" name='duration' value={input.duration} onChange={handleInputDuration} /> <span>{input.duration}</span>
					{!errorDuration ? <div><br/></div> : <div>{errorDuration}</div>}
				</div>

				{/*//? ACTIVITY DUFICULTY */}
				<div className='dificulty'>
					<label>Dificulty: </label>
					<input type="text" id="dificulty" placeholder="measure from 1 to 5" name="dificulty" min="1" max="5" value={input.dificulty} onChange={handleInputDificulty}/>
					{!errorDificulty ? <div><br/></div> : <div>{errorDificulty}</div>}
				</div>

				{/*//? ACTIVITY SEASON */}
				<div className='season'>
				<label>Season: </label>
				<select name='season' onChange={handleInputSeason}>
					<option value="" >Select a season</option>	
					<option value="spring" >Spring</option>
					<option value="summer" >Summer</option>
                    <option value="autumn" >Autumn</option>
                    <option value="winter" >Winter</option>
                </select>
				</div>

							{/*//? SUBMIT BUTTON */}
			<input type='submit' value={'Add activity'} disabled={ (!input.name || !input.dificulty || !input.duration || !input.season) ? true : false}/>
			</form>
		</div>
  )
}

//FromsActivities.propTypes = {}

export default FromsActivities