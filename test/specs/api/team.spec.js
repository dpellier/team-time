
import { fetch, update } from '../../../src/app/api/team';

describe('Team API', () => {
    let localStorageMock;

    beforeEach(() => {
        localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn()
        };
        global.localStorage = localStorageMock;
    });

    describe('fetch', () => {
        const localTeam = { dummy: 'team' };

        it('should fetch and return the team', async() => {
            const team = await fetch();

            expect(team).toBeDefined();
            expect(team).not.toEqual(localTeam);
            expect(localStorageMock.getItem).toHaveBeenCalled();
        });

        it('should return the team from local storage', async() => {
            localStorageMock.getItem.mockReturnValue(JSON.stringify(localTeam));

            const team = await fetch();

            expect(team).toBeDefined();
            expect(team).toEqual(localTeam);
            expect(localStorageMock.getItem).toHaveBeenCalled();
        });
    });

    describe('update', () => {
        it('should update, save locally and return the team', async() => {
            const team = { dummy: 'team' };
            const updatedTeam = await update(team);

            expect(updatedTeam).toBeDefined();
            expect(updatedTeam).toEqual(team);
            expect(localStorageMock.setItem).toHaveBeenCalledWith(jasmine.any(String), JSON.stringify(team));
        });
    });
});
