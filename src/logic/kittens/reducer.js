// reducer for kittens
import {
    RECEIVE,
    TOGGLE_LOADING,
    RESET,
    CACHE_LOADED} from './actions';
import initialState from './initialState';

export default (state = initialState, action) => {

    switch (action.type){

        case RECEIVE:
            return Object.assign({}, state, {list: action.list});

        case CACHE_LOADED:
            return Object.assign({}, initialState ,{...action.state});

        case RESET:
            return Object.assign({}, initialState);

        case TOGGLE_LOADING:
            return Object.assign({}, state, {isFetching: action.isFetching});
        default:
            return state;
    }
}