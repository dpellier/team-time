
import merge from 'deepmerge';
import { fetch, update } from '../api/profile';
import { FETCH_PROFILE_SUCCESS, UPDATE_PROFILE_SUCCESS } from './TYPES';

export function fetchProfile() {
    return function(dispatch) {
        return fetch()
            .then((profile) => {
                dispatch(fetchProfileSuccess(profile));
            }).catch(error => {
                // TODO dispatch error and manage UI feedback
                throw error;
            });
    };
}

export function fetchProfileSuccess(profile) {
    return { type: FETCH_PROFILE_SUCCESS, profile };
}

export function updateProfile(profile, newProps) {
    return function(dispatch) {
        return update(merge(profile, newProps))
            .then((updatedProfile) => {
                dispatch(updateProfileSuccess(updatedProfile));
            }).catch(error => {
                // TODO dispatch error and manage UI feedback
                throw error;
            });
    };
}

export function updateProfileSuccess(profile) {
    return { type: UPDATE_PROFILE_SUCCESS, profile };
}
