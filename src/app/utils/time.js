
import moment from 'moment-timezone';
import { TIME_FORMAT } from './TIME_FORMAT';

/**
 * Convert a time from a timezone to another timezone
 * @param time - time to convert
 * @param timezone - initial timezone
 * @param userTimezone - target timezone
 * @returns {string} formatted time in the new timezone
 */
export function getTimeAsUser(time, timezone, userTimezone) {
    return moment.tz(time, TIME_FORMAT.HOUR_MINUTE, timezone).tz(userTimezone).format(TIME_FORMAT.HOUR_MINUTE);
}

/**
 * Get the position of a time in a 24h day
 * ex: 12 => 50% / 6 => 25%
 * @param time - time to search
 * @returns {number} position in the day
 */
export function getPercentOfDay(time) {
    const momentTime = moment(time, TIME_FORMAT.HOUR_MINUTE);
    const hour = momentTime.hour();
    const minute = momentTime.minute() / 60;

    return (hour + minute) * 100 / 24;
}

/**
 * Format a time to a specific format
 * @param time - time to format
 * @param timezone - timezone to apply
 * @param format - format to apply
 * @returns {string} formatted time
 */
export function formatTime(time, timezone, format) {
    return moment(time).tz(timezone).format(format);
}

/**
 * Get the actual time
 * @returns {*} the actual date
 */
export function getNow() {
    return moment.now();
}

/**
 * Get the list of all known timezones
 * @returns {*} list of timezones names
 */
export function getTimezones() {
    return moment.tz.names();
}

/**
 * Get the current user timezone
 * @returns {*} user timezone
 */
export function getUserTimezone() {
    return moment.tz.guess();
}
