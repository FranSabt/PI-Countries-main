const initialState = {
    contries: [],
    contriesFiltered: [],
    allContries: [],
    activities: [],
    detail: [],
}

let filter = "name";

export default function reducer(state = initialState, action){

    console.log(filter);

    switch (action.type) {

        case"GET_COUNTRIES":
            return {
                ...state,
                contries: action.payload,
                contriesFiltered: action.payload,
                allContries: action.payload,
            }

        case"GET_COUNTRIES_ALL":
            return {
                ...state,
                contries: action.payload,
                contriesFiltered: action.payload,
                allContries: action.payload,
            }

        case"GET_COUNTRIES_FILTERED":
        return {
            ...state,
            //contries: action.payload,
            contriesFiltered: action.payload,
        }

        case"GET_ALL_ACTIVITIES":
        return {
            ...state,
            activities: action.payload,
        }

        case"POST_ACTIVITIES_COUNTRIES":
        return{
            ...state
        }

        
        case "FILTER":
            filter = action.payload
            return {
                ...state,
            }
        
        case "RESET":
            return{
                ...state,
                contriesFiltered: state.contriesFiltered
            }


        case "SORT":
            let orderCountries = [...state.contries]
            orderCountries = orderCountries.sort((a, b) => {
                if(a[filter] < b[filter]){
                    return action.payload === 'ascent' ? -1 : 1
                }
                else{
                    return action.payload === 'ascent' ? 1 : -1
                }
            }) 
            return {
                ...state,
                contriesFiltered: orderCountries
            }


        case"GET_COUNTRIES_BY_NAME":
            return {
                ...state,
                contriesFiltered: action.payload
            }


        case "GET_COUNTRY_DETAILS":
            return {
                ...state,
                detail: action.payload
            }


        case "ADD_ACTIVITY":
            return{
                ...state,
                activities:[...state.activities, action.payload]
            }


        default:
            return {...state};
    }
}