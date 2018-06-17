
import React from 'react';
import renderer from 'react-test-renderer';
import { Error } from '../../../../src/app/components/Error/Error';

describe('<Error />', () => {
    it('is correctly rendered', () => {
        const component = renderer.create(
            <Error />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
