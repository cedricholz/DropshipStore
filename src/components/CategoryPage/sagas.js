import {call, put, takeLatest} from "redux-saga/effects";

import {REQUEST_API_DATA, receiveApiData} from "./actions";

import {fetchData} from './api'


function* getApiData(action) {
    try {
        const data = yield call(fetchData, action.payload);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}