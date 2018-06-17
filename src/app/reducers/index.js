
import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { teamReducer } from './team';
import { timeReducer } from './time';

const rootReducer = combineReducers({
    currentTime: timeReducer,
    profile: profileReducer,
    team: teamReducer
});

export { rootReducer };
