
import merge from 'deepmerge';
import { fetch, update } from '../api/team';
import { FETCH_TEAM_SUCCESS, UPDATE_TEAM_SUCCESS } from './TYPES';

export function fetchTeam() {
    return function(dispatch) {
        return fetch()
            .then((team) => {
                dispatch(fetchTeamSuccess(team));
            }).catch(error => {
                // TODO dispatch error and manage UI feedback
                throw error;
            });
    };
}

export function fetchTeamSuccess(team) {
    return { type: FETCH_TEAM_SUCCESS, team };
}

export function updateTeam(team) {
    return function(dispatch) {
        return update(team)
            .then((updatedTeam) => {
                dispatch(updateTeamSuccess(updatedTeam));
            }).catch(error => {
                // TODO dispatch error and manage UI feedback
                throw error;
            });
    };
}

export function updateTeamSuccess(team) {
    return { type: UPDATE_TEAM_SUCCESS, team };
}

export function addTeamMember(team, member) {
    const newTeam = merge(team, {});
    newTeam.members.push(member);

    return updateTeam(newTeam);
}
