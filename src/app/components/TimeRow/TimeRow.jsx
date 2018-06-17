
import React from 'react';
import PropTypes from 'prop-types';
import { TeamMember } from '../TeamMember/TeamMember';
import { getTimeAsUser, getPercentOfDay } from '../../utils/time';

function getMemberTranslation(from, to) {
    // In case of splitted availability
    if (to < from) {
        // Check which side is bigger and return the center of it
        if (to > 100 - from) {
            return to / 2;
        }
        return from + (100 - from) / 2;
    }
    return from + (to - from) / 2;
}

function renderAvailability(from, to) {
    if (to < from) {
        // Availability should be split between start and end of day
        return (
            <React.Fragment>
                <div className='time-row__available time-row__available--left'
                     style={ { left: `${from}%`, right: '0' } }>
                </div>
                <div className='time-row__available time-row__available--right'
                     style={ { left: '0', right: `${100 - to}%` } }>
                </div>
            </React.Fragment>
        );
    }

    return (
        <div className='time-row__available'
             style={ { left: `${from}%`, right: `${100 - to}%` } }>
        </div>
    );
}

const TimeRow = ({ teamMember, timezone }) => {
    const from = getPercentOfDay(getTimeAsUser(teamMember.availability.from, teamMember.timezone, timezone));
    const to = getPercentOfDay(getTimeAsUser(teamMember.availability.to, teamMember.timezone, timezone));

    return (
        <div className='time-row'>
            <div className='time-row__member'
                 style={ { transform: `translateX(${getMemberTranslation(from, to)}%)` } }>
                <TeamMember name={ teamMember.name }
                            picture={ teamMember.picture } />
            </div>

            { renderAvailability(from, to) }
        </div>
    );
};

TimeRow.propTypes = {
    teamMember: PropTypes.object,
    timezone: PropTypes.string
};

export { TimeRow };
