
import React from 'react';
import PropTypes from 'prop-types';

const periods = Array.from({ length: 48 }, (_, idx) => {
    const hour = Math.floor(idx / 2).toString().padStart(2, '0');
    const minute = idx % 2 ? '30': '00';

    return `${hour}:${minute}`;
});

const TimeSelector = ({ currentValue, onChange }) =>
    <select className='time-selector'
            onChange={ onChange }
            defaultValue={ currentValue }>
        {
            periods.map((period, idx) =>
                <option key={ idx }
                        value={ period }>
                    { period }
                </option>
            )
        }
    </select>
;

TimeSelector.propTypes = {
    currentValue: PropTypes.string,
    onChange: PropTypes.func
};

export { TimeSelector };
