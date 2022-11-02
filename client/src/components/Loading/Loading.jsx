import React from 'react'
import load from '../../assets/loading.gif'
import './Loading.css'

const Loading = () => {
  return (
    <div className='loadingConteiner'>
			<h1>
			Loading...
			</h1>
			<img className='loadingImg' src={load} alt='Loading gif'/>
		</div>
  )
}

export default Loading