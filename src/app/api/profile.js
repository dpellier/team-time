
import { getUserTimezone } from '../utils/time';

const localKey = 'team-time-profile';

export function fetch() {
    const localProfile = localStorage.getItem(localKey);

    if (!localProfile) {
        // Mock real API call with small network delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    timezone: getUserTimezone(),
                    availability: {
                        from: '08:00',
                        to: '18:00'
                    }
                });
            }, 1000);
        });
    }

    return Promise.resolve(JSON.parse(localProfile));
}

export function update(profile) {
    localStorage.setItem(localKey, JSON.stringify(profile));

    return Promise.resolve(profile);
}
