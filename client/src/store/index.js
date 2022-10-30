import { applyMiddleware, createStore, compose  } from 'redux';
import reducer from './reducer/reducer'
import thunk from 'redux-thunk'

const composeEnhacers = //* for use extension 
    (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore( //* It's the middleware that handles the async's operations
    reducer, 
    composeEnhacers(applyMiddleware(thunk))
    );

export default store;