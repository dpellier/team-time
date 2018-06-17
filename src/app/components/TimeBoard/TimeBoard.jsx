
import React from 'react';
import PropTypes from 'prop-types';
import { TimeRow } from '../TimeRow/TimeRow';
import { getPercentOfDay } from '../../utils/time';

const TimeBoard = ({ profile, teamMembers }) =>
    <div className='time-board'>
        <span className='time-board__from'
              style={ { left: `${getPercentOfDay(profile.availability.from)}%` } }>
            { profile.availability.from }
        </span>

        <span className='time-board__to'
              style={ { left: `${getPercentOfDay(profile.availability.to)}%` } }>
            { profile.availability.to }
        </span>

        {
            teamMembers.map((teamMember, idx) =>
                <div className='time-board__member'
                     key={ idx }>
                    <TimeRow teamMember={ teamMember }
                             timezone={ profile.timezone } />
                </div>
            )
        }
    </div>
;

TimeBoard.propTypes = {
    profile: PropTypes.object,
    teamMembers: PropTypes.array
};

export { TimeBoard };
