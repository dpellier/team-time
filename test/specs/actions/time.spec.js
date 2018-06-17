
jest.mock('moment');

import moment from 'moment';
import { timeUpdate } from '../../../src/app/actions/time';
import { TIME_UPDATE } from '../../../src/app/actions/TYPES';

describe('Time Actions', () => {
    const now = new Date().getTime();

    let mockDispatch;

    beforeEach(() => {
        moment.now.mockReturnValue(now);

        mockDispatch = jest.fn();
    });

    describe('timeUpdate', () => {
        it('should dispatch time update', () => {
            timeUpdate()(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledWith({
                currentTime: now,
                type: TIME_UPDATE
            });
        });
    });
});
