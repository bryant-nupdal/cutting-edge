import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchOrders(action) {
   try {
       const response = yield axios.get('/api/workOrder');
       yield put({ type: 'SET_WORK_ORDER', payload: response.data });
   } catch (error) {
       console.log(error);
   }
}

function* isComplete (action) {
   try {
       yield axios.put(`/api/workOrder/completed/${action.payload}`);
       yield put({ type: 'FETCH_WORK_ORDER' });
   } catch (error) {
       console.log(error);
   }
}

// Create the rootSaga generator function
export function* rootSaga() {
   yield takeEvery('FETCH_WORK_ORDERS', fetchOrders);
   yield takeEvery('UPDATE_COMPLETE', isComplete);
}