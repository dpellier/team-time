
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TimeBoard } from '../../../../src/app/components/TimeBoard/TimeBoard';

configure({ adapter: new Adapter() });

describe('<TimeBoard />', () => {
    const mockProfile = { availability: { from: '00:00', to: '12:00' } };
    const mockMembers = [{ dummy: 'member1' }, { dummy: 'member2' }];

    it('should display a row rof each team members', () => {
        const wrapper = shallow(
            <TimeBoard profile={ mockProfile }
                       teamMembers={ mockMembers } />
        );
        expect(wrapper.find('TimeRow').length).toBe(mockMembers.length);
    });
});
