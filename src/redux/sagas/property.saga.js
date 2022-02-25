import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchProperties(){
    try {
        const response = yield axios.get('/api/property');
        console.log('this is the axios response from api/property: ', response.data);
        yield put({ type: 'STORE_PROPERTY', payload: response.data });
    } catch (error) {
        console.log('ERROR in GET property.saga', error);
    }
}

function* propertySaga() {
    yield takeEvery ('GET_PROPERTY', fetchProperties);
}

export default propertySaga;