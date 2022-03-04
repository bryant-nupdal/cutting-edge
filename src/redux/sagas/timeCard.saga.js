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

// function* clockIn(action) {
//     console.log( 'in clock in saga, the action.payload is ', action.payload);
//     try {
//         const response = yield axios.put(`/api/timeCard/clockIn/${action.payload}`);
//         // yield put({ type: 'FETCH_TIMECARD', payload: action.payload });
//     } catch (error) {
//         console.log(error);
//     }
// }

function* clockOut(action) {
    try {
        console.log( 'in clock out saga, the action.payload is ', action.payload);
        const response = yield axios.put(`/api/timeCard/clockOut/${action.payload}`);
        // yield put({ type: 'FETCH_TIMECARD', payload: action.payload });
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
 }

 export default timeCardSaga;