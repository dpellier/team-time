
import { TIME_UPDATE } from '../../../src/app/actions/TYPES';
import { timeReducer } from '../../../src/app/reducers/time';
import initialState from '../../../src/app/reducers/initialState';

describe('Time Reducer', () => {
    it('should return default state if type is not handled and no state given', () => {
        expect(timeReducer(null, {})).toBe(initialState.currentTime);
    });

    it('should return same state if type is not handled', () => {
        const state = { dummy: 'time' };

        expect(timeReducer(state, {})).toBe(state);
    });

    it('should return new time on update', () => {
        const updatedTime = { dummy: 'time' };
        const action = { type: TIME_UPDATE, currentTime: updatedTime };

        expect(timeReducer(null, action)).toBe(updatedTime);
    });
});
