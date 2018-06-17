
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TimeRow } from '../../../../src/app/components/TimeRow/TimeRow';

configure({ adapter: new Adapter() });

describe('<TimeRow />', () => {
    const usTimezone = 'America/Los_Angeles';
    const mockMember = { timezone: usTimezone, availability: { from: '00:00', to: '12:00' } };

    it('should display a the team member', () => {
        const wrapper = shallow(
            <TimeRow teamMember={ mockMember }
                     timezone={ usTimezone } />
        );
        expect(wrapper.find('TeamMember').length).toBe(1);
    });

    it('should display a single availability element', () => {
        const wrapper = shallow(
            <TimeRow teamMember={ mockMember }
                     timezone={ usTimezone } />
        );
        expect(wrapper.find('.time-row__available').length).toBe(1);
    });

    it('should display two availability elements if across current day', () => {
        const wrapper = shallow(
            <TimeRow teamMember={ mockMember }
                     timezone='Asia/Kolkata' />
        );
        expect(wrapper.find('.time-row__available').length).toBe(2);
    });
});
