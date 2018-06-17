
import initialState from '../../../src/app/reducers/initialState';

describe('Initial State', () => {
    it('should return the application initial state', () => {
        expect(initialState).toEqual({
            currentTime: jasmine.any(Number),
            profile: null,
            team: null
        });
    });
});
