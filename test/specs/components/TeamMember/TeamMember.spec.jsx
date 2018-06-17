
import React from 'react';
import renderer from 'react-test-renderer';
import { TeamMember } from '../../../../src/app/components/TeamMember/TeamMember';

describe('<TeamMember />', () => {
    it('is correctly rendered', () => {
        const component = renderer.create(
            <TeamMember name={ 'Name' }
                        picture={ 'URL' } />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
