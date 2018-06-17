
const localKey = 'team-time-team';

export function fetch() {
    const localTeam = localStorage.getItem(localKey);

    if (!localTeam) {
        // Mock real API call with small network delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    members: [
                        {
                            name: 'Gandhi',
                            picture: 'https://pbs.twimg.com/profile_images/593761567281262592/NVUTI1z-_400x400.png',
                            timezone: 'Asia/Kolkata',
                            availability: {
                                from: '07:30',
                                to: '15:30'
                            }
                        },
                        {
                            name: 'Homer',
                            picture: 'http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Homer-Simpson-02-Donut-icon.png',
                            timezone: 'America/Denver',
                            availability: {
                                from: '10:00',
                                to: '18:00'
                            }
                        },
                        {
                            name: 'Caribou',
                            picture: 'https://pbs.twimg.com/profile_images/686936288394612736/Tbkas47u_400x400.jpg',
                            timezone: 'America/Toronto',
                            availability: {
                                from: '07:30',
                                to: '16:30'
                            }
                        },
                        {
                            name: 'Dupont',
                            picture: 'https://i.imgur.com/x2KTiOQ.jpg',
                            timezone: 'Europe/Paris',
                            availability: {
                                from: '08:00',
                                to: '17:30'
                            }
                        },
                        {
                            name: 'Chun li',
                            picture: 'data:image/jpeg;base64,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',
                            timezone: 'Asia/Shanghai',
                            availability: {
                                from: '07:30',
                                to: '18:00'
                            }
                        },
                        {
                            name: 'Maui',
                            picture: 'https://vignette.wikia.nocookie.net/lemondededisney/images/3/3e/Disney_Maui.jpeg/revision/latest?cb=20161220211825&path-prefix=fr',
                            timezone: 'Pacific/Auckland',
                            availability: {
                                from: '10:00',
                                to: '20:00'
                            }
                        }
                    ]
                });
            }, 1000);
        });
    }

    return Promise.resolve(JSON.parse(localTeam));
}

export function update(team) {
    localStorage.setItem(localKey, JSON.stringify(team));

    return Promise.resolve(team);
}
