
export const getCountries =  () => {
    return function(dispatch) {
        return fetch('http://localhost:3001/api/country')
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_COUNTRIES', payload: data.slice(0, 10)}))
    }
}

export const getCountryDetails =  (id) => {
    return function(dispatch) {
        return fetch(`http://localhost:3001/api/country/id/${id}`)
        .then(res => res.json())
        .then(data => dispatch({type: 'GET_COUNTRY_DETAILS', payload: data}))
    }
}

export const addActivity = (newActivity) => {
    return function(dispatch){
        return fetch("http://localhost:3001/api/tourism", {
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify({
                name : newActivity.name, 
                dificulty: newActivity.dificulty, 
                duration: newActivity.duration, 
                season: newActivity.season
            }),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => dispatch({type: 'ADD_ACTIVITY"', payload: data}))

    }
}