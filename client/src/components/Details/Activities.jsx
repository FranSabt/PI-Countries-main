import React from 'react'

const Activities = ({name, dificulty, season, duration}) => {
    //console.log(activity);
  return (
    <div className='card-activities'>
        {
          name ? <div>
          <p>Name: {name}</p>
          <p>Dificulty: {dificulty}</p>
          <p>Season: {season}</p>
          <p>Duration: {duration}min</p>
          </div>
          : <p>"No activities yet"</p>
        }
    </div>
  )
}

export default Activities