
import { FETCH_PROFILE_SUCCESS, UPDATE_PROFILE_SUCCESS } from '../../../src/app/actions/TYPES';
import { profileReducer } from '../../../src/app/reducers/profile';
import initialState from '../../../src/app/reducers/initialState';

describe('Profile Reducer', () => {
    it('should return default state if type is not handled and no state given', () => {
        expect(profileReducer(null, {})).toBe(initialState.profile);
    });

    it('should return same state if type is not handled', () => {
        const state = { dummy: 'profile' };

        expect(profileReducer(state, {})).toBe(state);
    });

    it('should return profile on fetch success', () => {
        const fetchedProfile = { dummy: 'profile' };
        const action = { type: FETCH_PROFILE_SUCCESS, profile: fetchedProfile };

        expect(profileReducer(null, action)).toBe(fetchedProfile);
    });

    it('should return new profile on update success', () => {
        const updatedProfile = { dummy: 'profile' };
        const action = { type: UPDATE_PROFILE_SUCCESS, profile: updatedProfile };

        expect(profileReducer(null, action)).toBe(updatedProfile);
    });
});
