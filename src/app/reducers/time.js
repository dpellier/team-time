
import { TIME_UPDATE } from '../actions/TYPES';
import initialState from './initialState';

export function timeReducer(state, action) {
    switch(action.type) {
        case TIME_UPDATE:
            return action.currentTime;
        default:
            return state || initialState.currentTime;
    }
}
