import { put as dispatch, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* shiftSaga() {
    yield takeEvery('FETCH_SHIFTS', fetchShifts);
    yield takeEvery('ADD_SHIFT', addShift)
}

function* fetchShifts() {
    console.log('fetchShifts saga hit');
    try {
        const infoResponse = yield axios.get('/shift');
        yield dispatch({ type: 'GET_SHIFTS', payload: infoResponse.data })
    } catch (error) {
        console.log('saga Error with your fetch info');
    }
}
function* addShift (action) {
    console.log('action.payload:', action.payload);
    try {
        yield axios.post('/shift', action.payload);
        yield dispatch({ type: 'FETCH_SHIFTS' });
    } catch (error) {
        console.log('post Saga error', error);
    }
}


export default shiftSaga;