// kittens redux logic
import reducer from './reducer';
import initialState from './initialState';
import {fetchData, cacheLoaded, reset} from './actions';

export default {
    initialState,
    reducer,
    reset,
    fetchData,
    cacheLoaded,
};