
import React from 'react';
import PropTypes from 'prop-types';
import { getTimezones } from '../../utils/time';

const TimezoneSelector = ({ currentValue, id, onChange }) =>
    <select className='timezone-selector'
            id={ id }
            onChange={ onChange }
            defaultValue={ currentValue }>
        {
            getTimezones().map((timezone, idx) =>
                <option key={ idx }
                        value={ timezone }>
                    { timezone }
                </option>
            )
        }
    </select>
;

TimezoneSelector.propTypes = {
    currentValue: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func
};

export { TimezoneSelector };
