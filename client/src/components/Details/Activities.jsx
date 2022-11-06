import React from 'react'

const Activities = (activity) => {
  return (
    <div>
        <p>{activity.name}</p>
        <p>{activity.dificulty}</p>
        <p>{activity.season}</p>
    </div>
  )
}

export default Activities