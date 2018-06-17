
import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TimeSelector } from '../../../../src/app/components/TimeSelector/TimeSelector';

configure({ adapter: new Adapter() });

describe('<TimeSelector />', () => {
    const mockValue = '12:00';
    const mockOnChange = jest.fn();

    it('is correctly rendered', () => {
        const component = renderer.create(
            <TimeSelector currentValue={ mockValue }
                          onChange={ mockOnChange } />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should display an option for every possible period', () => {
        const wrapper = shallow(
            <TimeSelector currentValue={ mockValue }
                          onChange={ mockOnChange } />
        );
        expect(wrapper.find('option').length).toBe(48);
    });
});
