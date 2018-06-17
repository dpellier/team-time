
import { FETCH_TEAM_SUCCESS, UPDATE_TEAM_SUCCESS } from '../actions/TYPES';
import initialState from './initialState';

export function teamReducer(state, action) {
    switch(action.type) {
        case FETCH_TEAM_SUCCESS:
            return action.team;
        case UPDATE_TEAM_SUCCESS:
            return action.team;
        default:
            return state || initialState.team;
    }
}
