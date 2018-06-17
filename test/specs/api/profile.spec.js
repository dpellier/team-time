
import { fetch, update } from '../../../src/app/api/profile';

describe('Profile API', () => {
    let localStorageMock;

    beforeEach(() => {
        localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn()
        };
        global.localStorage = localStorageMock;
    });

    describe('fetch', () => {
        const localProfile = { dummy: 'profile' };

        it('should fetch and return the profile', async() => {
            const profile = await fetch();

            expect(profile).toBeDefined();
            expect(profile).not.toEqual(localProfile);
            expect(localStorageMock.getItem).toHaveBeenCalled();
        });

        it('should return the profile from local storage', async() => {
            localStorageMock.getItem.mockReturnValue(JSON.stringify(localProfile));

            const profile = await fetch();

            expect(profile).toBeDefined();
            expect(profile).toEqual(localProfile);
            expect(localStorageMock.getItem).toHaveBeenCalled();
        });
    });

    describe('update', () => {
        it('should update, save locally and return the profile', async() => {
            const profile = { dummy: 'profile' };
            const updatedProfile = await update(profile);

            expect(updatedProfile).toBeDefined();
            expect(updatedProfile).toEqual(profile);
            expect(localStorageMock.setItem).toHaveBeenCalledWith(jasmine.any(String), JSON.stringify(profile));
        });
    });
});
