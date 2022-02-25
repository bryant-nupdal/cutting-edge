import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* addCard(action) {
   try {
       yield axios.post('/api/timeCard', action.payload);
       yield put({ type: 'FETCH_TIMECARD' });
   } catch (error) {
       console.log(error);
   }
}

function* fetchTimecard(action) {
   try {
       const response = yield axios.get(`/api/timeCard/${action.payload}`);
       yield put({ type: 'STORE_TIMECARD', payload: response.data });
   } catch (error) {
       console.log(error);
   }
}

function* clockIn(action) {
    try {
        const response = yield axios.put(`/api/timeCard/clockIn/${action.payload}`);
        yield put({ type: 'FETCH_TIMECARD', payload: response.data });
    } catch (error) {
        console.log(error);
    }
 }

 function* clockOut(action) {
    try {
        const response = yield axios.put(`/api/timeCard/clockOut/${action.payload}`);
        yield put({ type: 'FETCH_TIMECARD', payload: response.data });
    } catch (error) {
        console.log(error);
    }
 }

export function* timeCardSaga() {
    yield takeEvery('FETCH_TIMECARD', fetchTimecard);
    yield takeEvery('ADD_TIMECARD', addCard);
    yield takeEvery('UPDATE_CLOCK_IN', clockIn);
    yield takeEvery('UPDATE_CLOCK_OUT', clockOut);
 }

 export default timeCardSaga;