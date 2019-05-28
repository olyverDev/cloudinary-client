import { put, call, takeLatest, all } from 'redux-saga/effects';

import http from '../services/api';

export function* fetchComments(action) {
  try {
    const request = yield call(http, 'comments');

    yield put({ type: 'FETCH_COMMENTS_SUCCESS', payload: request.data });
  } catch (error) {
    yield put({ type: 'FETCH_COMMENTS_FAIL' });
  }
}

export function* uploadComment(action) {
  try {
    const request = yield call(http, 'comments', {
      method: 'put',
      mode: 'no-cors',
      data: {
       imageId: action.payload.imageId,
       value: action.payload.text,
       date: Date.now(),
      },
    });

    yield put({ type: 'UPLOAD_COMMENT_SUCCESS', payload: request.data });
    yield put({ type: 'FETCH_COMMENTS_PENDING' });
  } catch (error) {
    yield put({ type: 'UPLOAD_COMMENT_FAIL' });
  }
}

export default () => all([
  takeLatest('FETCH_COMMENTS_PENDING', fetchComments),
  takeLatest('UPLOAD_COMMENT_PENDING', uploadComment),
]);
