import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import kittens from '../kittens';


// initial state & store pattern
const initialState = {

    // kittens
    kittens: kittens.initialState,

};

// main reducer
const rootReducer = combineReducers({
        kittens: kittens.reducer,
    }, initialState
);

// create store
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

///// DEBUG
console.log( JSON.parse(JSON.stringify(store.getState())));
store.subscribe( () => console.log(  JSON.parse(JSON.stringify(store.getState()))));
////

// export store
export default store;