
jest.mock('redux');

import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../../../src/app/reducers/index';
import { configureStore } from '../../../src/app/store';

describe('Store', () => {
    const mockMiddleware = { dummy: 'middleware' };

    const mockStore = { dummy: 'store' };

    beforeEach(() => {
        createStore.mockReturnValue(mockStore);
        applyMiddleware.mockReturnValue(mockMiddleware);
    });

    describe('configureStore', () => {
        it('should return the created store', () => {
            const store = configureStore();

            expect(store).toBe(mockStore);
            expect(createStore).toHaveBeenCalledWith(rootReducer, mockMiddleware);
        });
    });
});
