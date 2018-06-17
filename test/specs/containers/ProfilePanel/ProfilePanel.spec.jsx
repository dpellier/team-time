
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProfilePanel } from '../../../../src/app/containers/ProfilePanel/ProfilePanel';

configure({ adapter: new Adapter() });

describe('<ProfilePanel />', () => {
    const mockProfile = { availability: { from: '00:00', to: '12:00' } };

    let mockOnChange;

    beforeEach(() => {
        mockOnChange = jest.fn();
    });

    it('should render the panel', () => {
        const wrapper = shallow(
            <ProfilePanel onProfileChange={ mockOnChange }
                          profile={ mockProfile } />
        );
        expect(wrapper.find('.profile-panel').length).toBe(1);
    });

    describe('onFromTimeChange', () => {
        it('should update state', () => {
            const mockEvent = { target: { value: 'fake' } };
            const wrapper = shallow(
                <ProfilePanel onProfileChange={ mockOnChange }
                              profile={ mockProfile } />
            );

            wrapper.instance().onFromTimeChange(mockEvent);

            expect(mockOnChange).toHaveBeenCalledWith(mockProfile, {
                availability: { from: mockEvent.target.value }
            });
        });
    });

    describe('onToTimeChange', () => {
        it('should update state', () => {
            const mockEvent = { target: { value: 'fake' } };
            const wrapper = shallow(
                <ProfilePanel onProfileChange={ mockOnChange }
                              profile={ mockProfile } />
            );

            wrapper.instance().onToTimeChange(mockEvent);

            expect(mockOnChange).toHaveBeenCalledWith(mockProfile, {
                availability: { to: mockEvent.target.value }
            });
        });
    });

    describe('onTimezoneChange', () => {
        it('should update state', () => {
            const mockEvent = { target: { value: 'fake' } };
            const wrapper = shallow(
                <ProfilePanel onProfileChange={ mockOnChange }
                              profile={ mockProfile } />
            );

            wrapper.instance().onTimezoneChange(mockEvent);

            expect(mockOnChange).toHaveBeenCalledWith(mockProfile, {
                timezone: mockEvent.target.value
            });
        });
    });
});
