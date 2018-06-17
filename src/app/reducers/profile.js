
import { FETCH_PROFILE_SUCCESS, UPDATE_PROFILE_SUCCESS } from '../actions/TYPES';
import initialState from './initialState';

export function profileReducer(state, action) {
    switch(action.type) {
        case FETCH_PROFILE_SUCCESS:
            return action.profile;
        case UPDATE_PROFILE_SUCCESS:
            return action.profile;
        default:
            return state || initialState.profile;
    }
}
