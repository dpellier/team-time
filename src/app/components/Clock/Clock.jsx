
import React from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '../../utils/time';
import { TIME_FORMAT } from '../../utils/TIME_FORMAT';

const Clock = ({ time, timezone }) =>
    <div className='clock'>
        { formatTime(time, timezone, TIME_FORMAT.FULL_HOUR) }
    </div>
;

Clock.propTypes = {
    time: PropTypes.number,
    timezone: PropTypes.string
};

export { Clock };
