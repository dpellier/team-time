
import React from 'react';
import { Provider } from 'react-redux';
import { fetchProfile } from './actions/profile';
import { fetchTeam } from './actions/team';
import { timeUpdate } from './actions/time';
import MainPage from './containers/MainPage/MainPage';
import { configureStore } from './store';

const store = configureStore();

// Fetch initial data
store.dispatch(fetchProfile());
store.dispatch(fetchTeam());

// Start time update every seconds
setInterval(() => {
    store.dispatch(timeUpdate());
}, 1000);

const App = () =>
    <Provider store={ store }>
        <MainPage />
    </Provider>
;

export { App };
