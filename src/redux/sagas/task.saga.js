import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchTasks(){
    try {
        const response = yield axios.get('/api/task');
        console.log('this is the axios response from api/task: ', response.data);
        yield put({ type: 'STORE_TASKS', payload: response.data });
    } catch (error) {
        console.log('ERROR in GET tasks.saga', error);
    }
}

function* addTask(action){
    try{
        yield axios.post('/api/task', action.payload);
        yield put({ type: 'GET_TASKS' });
    } catch (error) {
        console.log(error);
    }
}

function* deleteTask(action) {
    try {
        yield axios.delete(`/api/deleteTask/${action.payload}`);
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
    yield takeEvery ('ADD_TASKS', addTask);
    yield takeEvery ('DELETE_TASK', deleteTask);
    yield takeEvery ('DELETE_ALL_TASKS', deleteAllTasks);
}

export default taskSaga;