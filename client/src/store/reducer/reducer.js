const initialState = {
    contries: [],
    contriesByName: [],
    activities: [],
    detail: [],
}

export default function reducer(state = initialState, action){

    switch (action.type) {
        case"GET_COUNTRIES":
            return {
                ...state,
                contries: action.payload
            }

            case"GET_COUNTRIES_BY_NAME":
            return {
                ...state,
                contries: action.payload
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