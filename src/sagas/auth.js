import { put, call, takeLatest, all } from 'redux-saga/effects';

import http from '../services/api';
import history from '../services/history';

export function* auth(action) {
  try {
    const request = yield call(http, 'auth', {
      method: 'post',
      mode: 'no-cors',
      data: {
        login: action.payload.name,
        pass: action.payload.pass,
      }
    });

    if (request.data.isAdmin) { 
      yield put({ type: 'AUTH_SUCCESS' });
      yield call(history.push, '/admin');
    } else {
      yield put({ type: 'AUTH_FAIL' });
    }
  } catch (error) {
    yield put({ type: 'AUTH_FAIL' });
  }
}

export default () => all([
  takeLatest('AUTH_PENDING', auth),
]);
