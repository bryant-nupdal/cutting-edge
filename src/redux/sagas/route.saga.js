import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchAllRoutes(){
    try {
        const response = yield axios.get('/api/route');
        console.log('this is the axios response from api/route: ', response.data);
        yield put({ type: 'STORE_ALL_ROUTES', payload: response.data });
    } catch (error) {
        console.log('ERROR in fetch all routes saga', error);
    }
}

function* fetchRoute(action){
    try {
        const response = yield axios.get(`/api/route/${action.payload}`);
        console.log('this is the axios response from api/route: ', response.data);
        yield put({ type: 'STORE_ROUTE', payload: response.data });
    } catch (error) {
        console.log('ERROR in the fetch route saga', error);
    }
}

function* routeSaga() {
    yield takeEvery ('GET_ALL_ROUTES', fetchAllRoutes);
    yield takeEvery ('GET_ROUTE', fetchRoute);
}

export default routeSaga;