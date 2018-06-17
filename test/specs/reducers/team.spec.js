
import { FETCH_TEAM_SUCCESS, UPDATE_TEAM_SUCCESS } from '../../../src/app/actions/TYPES';
import { teamReducer } from '../../../src/app/reducers/team';
import initialState from '../../../src/app/reducers/initialState';

describe('Team Reducer', () => {
    it('should return default state if type is not handled and no state given', () => {
        expect(teamReducer(null, {})).toBe(initialState.team);
    });

    it('should return same state if type is not handled', () => {
        const state = { dummy: 'team' };

        expect(teamReducer(state, {})).toBe(state);
    });

    it('should return team on fetch success', () => {
        const fetchedTeam = { dummy: 'team' };
        const action = { type: FETCH_TEAM_SUCCESS, team: fetchedTeam };

        expect(teamReducer(null, action)).toBe(fetchedTeam);
    });

    it('should return new team on update success', () => {
        const updatedTeam = { dummy: 'team' };
        const action = { type: UPDATE_TEAM_SUCCESS, team: updatedTeam };

        expect(teamReducer(null, action)).toBe(updatedTeam);
    });
});
