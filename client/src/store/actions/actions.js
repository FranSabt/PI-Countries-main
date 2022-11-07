import  axios from 'axios'

export const getCountriesAll =  () => {
    return async function(dispatch) {
        let countries = await axios.get('http://localhost:3001/api/country/')
        return dispatch ({type: 'GET_COUNTRIES_ALL', payload: countries.data})
    }
}

export const getCountries =  () => {
    return async function(dispatch) {
        let countries = await axios.get('http://localhost:3001/api/country/home')
        return dispatch ({type: 'GET_COUNTRIES', payload: countries.data})
    }
}


export const getCountriesByName =  (name) => {
    return async function(dispatch) {
        let countriesFiltered = await axios.get(`http://localhost:3001/api/country/${name}`)
        return dispatch ({type: 'GET_COUNTRIES_BY_NAME', payload: countriesFiltered.data})
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

export const sort = (order) => {
    return {
        type: "SORT",
        payload: order
    }
}


export const filter = (order) => {
    return {
        type: "FILTER",
        payload: order
    }
}

export const reset = () => {
    return {
        type: "RESET"
    }
}