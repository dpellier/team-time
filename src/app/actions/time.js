
import { TIME_UPDATE } from './TYPES';
import { getNow } from '../utils/time';

export function timeUpdate() {
    return function(dispatch) {
        dispatch({
            currentTime: getNow(),
            type: TIME_UPDATE
        });
    };
}
