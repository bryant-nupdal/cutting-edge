import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* addCard(action) {
    
   try {
       yield axios.post('/api/timeCard', action.payload);
       yield put({ type: 'FETCH_TIMECARD', payload: action.payload.work_order_id });
   } catch (error) {
       console.log(error);
   }
}

function* addTimecardToTask(action) {
    console.log('this should be the task id: ', action.payload);
    try {
        yield axios.post(`/api/timeCard/${action.payload.id}`);
        yield put({ type: 'FETCH_TIMECARD', payload: action.payload.work_order_id });
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

function* clockOut(action) {
    console.log('the action coming into clock out saga is: ', action.payload);
    try {
        const response = yield axios.put(`/api/timeCard/clockOut/${action.payload.id}`);
        yield put({ type: 'FETCH_TIMECARD', payload: action.payload.work_order_id });
    } catch (error) {
        console.log(error);
    }
}

function* deleteTimecard(action) {
    console.log('the action came into the delete function', action.payload);
    try {
        const response = yield axios.delete(`api/timecard/${action.payload.id}`);
        yield put({ type: 'FETCH_TIMECARD', payload: action.payload.work_order_id });
    } catch (error) {
        console.log(error);
    }
}

export function* timeCardSaga() {
    yield takeEvery('FETCH_TIMECARD', fetchTimecard);
    yield takeEvery('ADD_TIMECARD', addCard);
    // yield takeEvery('UPDATE_CLOCK_IN', clockIn);
    yield takeEvery('UPDATE_CLOCK_OUT', clockOut);
    yield takeEvery('ADD_TIMECARD_TO_TASK', addTimecardToTask);
    yield takeEvery('DELETE_TIMECARD', deleteTimecard);
 }

 export default timeCardSaga;