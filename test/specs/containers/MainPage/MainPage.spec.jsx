
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MainPage } from '../../../../src/app/containers/MainPage/MainPage';

configure({ adapter: new Adapter() });

describe('<MainPage />', () => {
    const mockProfile = { availability: { from: '00:00', to: '12:00' } };
    const mockTeam = { members: [{ dummy: 'member1' }, { dummy: 'member2' }] };
    const mockTime = new Date().getTime();

    it('should display Loading if no data', () => {
        const wrapper = shallow(
            <MainPage />
        );
        expect(wrapper.find('Loading').length).toBe(1);
        expect(wrapper.find('.main-page').length).toBe(0);
    });

    it('should display main page when data are fetched', () => {
        const wrapper = shallow(
            <MainPage currentTime={ mockTime }
                      profile={ mockProfile}
                      team={ mockTeam } />
        );
        expect(wrapper.find('Loading').length).toBe(0);
        expect(wrapper.find('.main-page').length).toBe(1);
        expect(wrapper.find('Clock').length).toBe(1);
        expect(wrapper.find('TimeBoard').length).toBe(1);
    });

    describe('', () => {
        it('should set state to error on catch', () => {
            const wrapper = shallow(
                <MainPage />
            );
            wrapper.instance().componentDidCatch();

            expect(wrapper.state('hasError')).toBe(true);
        });
    });
});
