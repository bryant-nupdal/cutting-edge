import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchTasks(){
    try {
        const response = yield axios.get('/api/task');
        console.log('this is the axios response from api/task, work order number: ', response.data[0].work_order_id);
        yield put({ type: 'STORE_TASKS', payload: response.data });
    } catch (error) {
        console.log('ERROR in GET tasks.saga', error);
    }
}

function* fetchFilteredTasks(action){
    console.log('the action coming in to get tasks is: ', action.payload);
    try {
        const response = yield axios.get(`/api/task/workOrderID/${action.payload}`);
        yield put({ type : 'SET_FILTERED_TASKS', payload: response.data});
    } catch (error) {
        console.log('there was an error in Saga fetch Filtered Tasks', error);
    }
}

// function* addTask(){
//     try{
//         yield axios.post('/api/task');
//         yield put({ type: 'GET_TASKS' });
//     } catch (error) {
//         console.log(error);
//     }
// }

function* deleteTask(action) {
    console.log('the action coming in to delete is: ', action.payload);
    try {
        yield axios.delete(`/api/task/deleteTask/${action.payload}`);
        yield put({ type: 'GET_TASKS' });
    } catch (error) {
        console.log(error);
    }
 }

 function* deleteAllTasks() {
    try {
        yield axios.delete(`/api/deleteTask`);
        yield put({ type: 'GET_TASKS' });
    } catch (error) {
        console.log(error);
    }
 }

function* taskSaga() {
    yield takeEvery ('GET_TASKS', fetchTasks);
    // yield takeEvery ('ADD_TASKS', addTask);
    yield takeEvery ('DELETE_TASK', deleteTask);
    yield takeEvery ('DELETE_ALL_TASKS', deleteAllTasks);
    yield takeEvery ('GET_TASKS_BY_WORK_ORDER', fetchFilteredTasks);
}

export default taskSaga;