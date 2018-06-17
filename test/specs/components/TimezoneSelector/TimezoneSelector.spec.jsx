
const mockTimezones = [1, 2, 3, 4, 5];
jest.mock('../../../../src/app/utils/time', () => ({
    getTimezones: () => mockTimezones
}));

import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TimezoneSelector } from '../../../../src/app/components/TimezoneSelector/TimezoneSelector';

configure({ adapter: new Adapter() });

describe('<TimezoneSelector />', () => {
    const mockValue = '12:00';
    const mockOnChange = jest.fn();

    it('is correctly rendered', () => {
        const component = renderer.create(
            <TimezoneSelector currentValue={ mockValue }
                              onChange={ mockOnChange } />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should display an option for every timezone', () => {
        const wrapper = shallow(
            <TimezoneSelector currentValue={ mockValue }
                              onChange={ mockOnChange } />
        );
        expect(wrapper.find('option').length).toBe(mockTimezones.length);
    });
});
