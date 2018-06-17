
jest.mock('../../../src/app/api/team');

import { fetchTeam, fetchTeamSuccess, updateTeam, updateTeamSuccess, addTeamMember } from '../../../src/app/actions/team';
import { FETCH_TEAM_SUCCESS, UPDATE_TEAM_SUCCESS } from '../../../src/app/actions/TYPES';
import { fetch, update } from '../../../src/app/api/team';

describe('Team Actions', () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
    });

    describe('fetchTeam', () => {
        it('should dispatch fetched team success action', async() => {
            const team = { dummy: 'team' };
            fetch.mockReturnValue(Promise.resolve(team));

            await fetchTeam()(mockDispatch);

            expect(fetch).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({
                team: team,
                type: FETCH_TEAM_SUCCESS
            });
        });
    });

    describe('fetchTeamSuccess', () => {
        it('should return team fetch success action', () => {
            const team = { dummy: 'team' };

            expect(fetchTeamSuccess(team)).toEqual({
                team: team,
                type: FETCH_TEAM_SUCCESS
            });
        });
    });

    describe('updateTeam', () => {
        it('should dispatch updated team success action', async() => {
            const team = { dummy: 'team' };
            const updatedTeam = { dummy: 'updated team' };
            update.mockReturnValue(Promise.resolve(updatedTeam));

            await updateTeam(team)(mockDispatch);

            expect(update).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({
                team: updatedTeam,
                type: UPDATE_TEAM_SUCCESS
            });
        });
    });

    describe('updateTeamSuccess', () => {
        it('should return team update success action', () => {
            const team = { dummy: 'team' };

            expect(updateTeamSuccess(team)).toEqual({
                team: team,
                type: UPDATE_TEAM_SUCCESS
            });
        });
    });

    describe('addTeamMember', () => {
        it('should add team member and dispatch new team', async() => {
            const team = { members: [] };
            const newMember = { dummy: 'member' };
            const newTeam = { members: [newMember] };
            update.mockReturnValue(Promise.resolve(newTeam));

            await addTeamMember(team, newMember)(mockDispatch);

            expect(update).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({
                team: newTeam,
                type: UPDATE_TEAM_SUCCESS
            });
        });
    });
});
