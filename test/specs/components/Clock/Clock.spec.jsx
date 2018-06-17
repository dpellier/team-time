
import moment from 'moment-timezone';
import React from 'react';
import renderer from 'react-test-renderer';
import { Clock } from '../../../../src/app/components/Clock/Clock';

describe('<Clock />', () => {
    const usTimezone = 'America/Los_Angeles';

    it('is correctly rendered', () => {
        moment.tz.setDefault(usTimezone);
        const mockTime = moment('12:24:36', 'HH:mm:ss', usTimezone).valueOf();

        const component = renderer.create(
            <Clock time={ mockTime }
                   timezone={ usTimezone } />
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
