
import React from 'react';
import renderer from 'react-test-renderer';
import { Loading } from '../../../../src/app/components/Loading/Loading';

describe('<Loading />', () => {
    it('is correctly rendered', () => {
        const component = renderer.create(
            <Loading />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
