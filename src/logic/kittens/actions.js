// kittens actions

// Receiving data for friends list
export const RECEIVE = "RECEIVE";
export const receive = list => {
    return {type:RECEIVE, list};
};

// toggle loading
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const isFetching = isFetching => {
    return {type: TOGGLE_LOADING, isFetching}
};

// loaded from cache
export const CACHE_LOADED = 'CACHE_LOADED';
export const cacheLoaded = state => {
    return {type: CACHE_LOADED, state};
};

// reset to initial state
export const RESET = 'RESET';
export const reset = () => {
    return {type:RESET};
};

// fetching friends list
export const FETCH = 'FETCH';
export const fetchData = () => {
    return dispatch => {
        fetch('http://localhost:8080/mock/kittens.json')
        .then( response => response.json())
        .then( list => dispatch(receive(list)))
        .catch( e => console.log(e));
    };
};