
import moment from 'moment';
import { formatTime, getPercentOfDay, getNow, getTimeAsUser, getTimezones, getUserTimezone } from '../../../src/app/utils/time';
import { TIME_FORMAT } from '../../../src/app/utils/TIME_FORMAT';

describe('Time Utils', () => {
    const euTimezone = 'Europe/Amsterdam';
    const usTimezone = 'America/Los_Angeles';

    describe('getTimeAsUser', () => {
        it('should return time hour in the user timezone', () => {
            const time = '12:24:36';
            const timeInUS = moment.tz('12:24:36', TIME_FORMAT.FULL_HOUR, euTimezone).tz(usTimezone);

            expect(getTimeAsUser(time, euTimezone, usTimezone)).toBe(timeInUS.format(TIME_FORMAT.HOUR_MINUTE));
        });
    });

    describe('getPercentOfDay', () => {
        it('should return correct time percent regarding a whole day', () => {
            const halfDay = moment('12:00', TIME_FORMAT.HOUR_MINUTE);
            const quarterDay = moment('06:00', TIME_FORMAT.HOUR_MINUTE);

            expect(getPercentOfDay(halfDay)).toBe(50);
            expect(getPercentOfDay(quarterDay)).toBe(25);
        });
    });

    describe('formatTime', () => {
        it('should return formatted time', () => {
            const timeEU = moment.tz('12:24:36', TIME_FORMAT.FULL_HOUR, euTimezone);
            const timeUS = moment.tz('12:24:36', TIME_FORMAT.FULL_HOUR, usTimezone);

            expect(formatTime(timeEU, euTimezone, TIME_FORMAT.FULL_HOUR)).toBe('12:24:36');
            expect(formatTime(timeUS, usTimezone, TIME_FORMAT.FULL_HOUR)).toBe('12:24:36');
            expect(formatTime(timeEU, euTimezone, TIME_FORMAT.HOUR_MINUTE)).toBe('12:24');
            expect(formatTime(timeUS, usTimezone, TIME_FORMAT.HOUR_MINUTE)).toBe('12:24');
        });
    });

    describe('getNow', () => {
        it('should return current date', () => {
            const now = getNow();
            const expectedNow = new Date().getTime();

            expect(now).toBe(expectedNow);
        });
    });

    describe('getTimezones', () => {
        it('should return all timezones', () => {
            const timezones = getTimezones();

            expect(timezones.length).toBeGreaterThan(0);
        });
    });

    describe('getUserTimezone', () => {
        it('should return user timezone', () => {
            const userTimezone = getUserTimezone();

            expect(typeof userTimezone).toBe('string');
        });
    });
});
