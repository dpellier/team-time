
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TeamPanel } from '../../../../src/app/containers/TeamPanel/TeamPanel';

configure({ adapter: new Adapter() });

describe('<TeamPanel />', () => {
    it('should render the form', () => {
        const wrapper = shallow(
            <TeamPanel />
        );
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.state('isFormValid')).toBe(false);
    });

    describe('onNameChange', () => {
        it('should update state', () => {
            const mockEvent = { target: { value: 'fake' } };
            const wrapper = shallow(
                <TeamPanel />
            );

            wrapper.instance().onNameChange(mockEvent);

            expect(wrapper.state('name')).toBe(mockEvent.target.value);
        });
    });

    describe('onPictureChange', () => {
        it('should update state', () => {
            const mockEvent = { target: { value: 'fake' } };
            const wrapper = shallow(
                <TeamPanel />
            );

            wrapper.instance().onPictureChange(mockEvent);

            expect(wrapper.state('picture')).toBe(mockEvent.target.value);
        });
    });

    describe('onTimezoneChange', () => {
        it('should update state', () => {
            const mockEvent = { target: { value: 'fake' } };
            const wrapper = shallow(
                <TeamPanel />
            );

            wrapper.instance().onTimezoneChange(mockEvent);

            expect(wrapper.state('timezone')).toBe(mockEvent.target.value);
        });
    });
    describe('onFromTimeChange', () => {
        it('should update state', () => {
            const mockEvent = { target: { value: 'fake' } };
            const wrapper = shallow(
                <TeamPanel />
            );

            wrapper.instance().onFromTimeChange(mockEvent);

            expect(wrapper.state('availableFrom')).toBe(mockEvent.target.value);
        });
    });

    describe('onToTimeChange', () => {
        it('should update state', () => {
            const mockEvent = { target: { value: 'fake' } };
            const wrapper = shallow(
                <TeamPanel />
            );

            wrapper.instance().onToTimeChange(mockEvent);

            expect(wrapper.state('availableTo')).toBe(mockEvent.target.value);
        });
    });

    describe('saveMember', () => {
        it('should update state', () => {
            const mockAddMemberToTeam = jest.fn();
            const mockEvent = { preventDefault: jest.fn(), stopPropagation: jest.fn() };
            const wrapper = shallow(
                <TeamPanel addMemberToTeam={ mockAddMemberToTeam } />
            );

            wrapper.instance().saveMember(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(mockEvent.stopPropagation).toHaveBeenCalled();
            expect(mockAddMemberToTeam).toHaveBeenCalled();
        });
    });

    describe('validateForm', () => {
        it('should set validity to false if some fields are not set', () => {
            const wrapper = shallow(
                <TeamPanel />
            );

            wrapper.instance().validateForm();

            expect(wrapper.state('isFormValid')).toBe(false);
        });

        it('should set validity to true if all fields are set', () => {
            const wrapper = shallow(
                <TeamPanel />
            );
            wrapper.instance().setState({
                name: 'dummy name',
                picture: 'dummy url',
                timezone: 'dummy timezone',
                availableFrom: '00:00',
                availableTo: '23:00'
            });

            wrapper.instance().validateForm();

            expect(wrapper.state('isFormValid')).toBe(true);
        });
    });

    describe('resetState', () => {
        it('should reset state to default value', () => {
            const wrapper = shallow(
                <TeamPanel />
            );
            wrapper.instance().setState({
                name: 'dummy name',
                picture: 'dummy url',
                timezone: 'dummy timezone',
                availableFrom: '00:00',
                availableTo: '23:00'
            });

            wrapper.instance().resetState();

            expect(wrapper.state('name')).toBe('');
            expect(wrapper.state('picture')).toBe('');
            expect(wrapper.state('timezone')).toEqual(jasmine.any(String));
            expect(wrapper.state('availableFrom')).toBe('08:00');
            expect(wrapper.state('availableTo')).toBe('17:00');
            expect(wrapper.state('isFormValid')).toBe(false);
        });
    });
});
