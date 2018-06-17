
jest.mock('../../../src/app/api/profile');

import { fetchProfile, fetchProfileSuccess, updateProfile, updateProfileSuccess } from '../../../src/app/actions/profile';
import { FETCH_PROFILE_SUCCESS, UPDATE_PROFILE_SUCCESS } from '../../../src/app/actions/TYPES';
import { fetch, update } from '../../../src/app/api/profile';

describe('Profile Actions', () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
    });

    describe('fetchProfile', () => {
        it('should dispatch fetched profile success action', async() => {
            const profile = { dummy: 'profile' };
            fetch.mockReturnValue(Promise.resolve(profile));

            await fetchProfile()(mockDispatch);

            expect(fetch).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({
                profile: profile,
                type: FETCH_PROFILE_SUCCESS
            });
        });
    });

    describe('fetchProfileSuccess', () => {
        it('should return profile fetch success action', () => {
            const profile = { dummy: 'profile' };

            expect(fetchProfileSuccess(profile)).toEqual({
                profile: profile,
                type: FETCH_PROFILE_SUCCESS
            });
        });
    });

    describe('updateProfile', () => {
        it('should dispatch updated profile success action', async() => {
            const profile = { dummy: 'profile' };
            const newProps = { some: 'props' };
            const updatedProfile = { dummy: 'updated profile', some: 'props' };
            update.mockReturnValue(Promise.resolve(updatedProfile));

            await updateProfile(profile, newProps)(mockDispatch);

            expect(update).toHaveBeenCalled();
            expect(mockDispatch).toHaveBeenCalledWith({
                profile: updatedProfile,
                type: UPDATE_PROFILE_SUCCESS
            });
        });
    });

    describe('updateProfileSuccess', () => {
        it('should return profile update success action', () => {
            const profile = { dummy: 'profile' };

            expect(updateProfileSuccess(profile)).toEqual({
                profile: profile,
                type: UPDATE_PROFILE_SUCCESS
            });
        });
    });
});
