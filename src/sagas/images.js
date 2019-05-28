import { put, call, takeLatest, all } from 'redux-saga/effects';

import http from '../services/api';

export function* fetchImages(action) {
  try {
    const request = yield call(http, 'images');

    yield put({ type: 'FETCH_IMAGES_SUCCESS', payload: request.data });
  } catch (error) {
    yield put({ type: 'FETCH_IMAGES_FAIL' });
  }
}

export function* uploadImage(action) {
  try {
    const data = new FormData();
    data.append('file', action.payload);
    yield call(http, 'images', { data, method: 'put' });

    yield put({ type: 'UPLOAD_IMAGE_SUCCESS' });
    yield put({ type: 'FETCH_IMAGES_PENDING' });
  } catch (error) {
    yield put({ type: 'UPLOAD_IMAGES_FAIL' });
  }
}

export function* deleteImages(action) {
  try {
    yield call(http, 'images', {
      data: { ids: action.payload.ids },
      method: 'delete',
      mode: 'no-cors'
    });
    yield call(http, 'imageInfo', {
      data: { ids: action.payload.ids },
      method: 'delete',
      mode: 'no-cors'
    });

    yield put({ type: 'DELETE_IMAGE_SUCCESS' });
    yield put({ type: 'FETCH_IMAGES_PENDING' });
  } catch (error) {
    yield put({ type: 'DELETE_IMAGES_FAIL' });
  }
}

export function* saveImageInfo(action) {
  const { info, price, count, Id } = action.payload;
  try {
    yield call(http, 'imageInfo', {
      data: { info, price, count, Id },
      method: 'put',
      mode: 'no-cors'
    });

    yield put({ type: 'SAVE_IMAGE_INFO_SUCCESS' });
    yield put({ type: 'LOAD_IMAGE_INFO_PENDING', payload: { Id } })
  } catch (error) {
    yield put({ type: 'SAVE_IMAGE_INFO_FAIL' });
  }
}

export function* loadImageInfo(action) {
  const { Id } = action.payload;
  try {
    const response = yield call(http, `imageInfo?Id=${Id}`);
    yield put({ type: 'LOAD_IMAGE_INFO_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'LOAD_IMAGE_INFO_FAIL' });
  }
}

export default () => all([
  takeLatest('FETCH_IMAGES_PENDING', fetchImages),
  takeLatest('UPLOAD_IMAGE_PENDING', uploadImage),
  takeLatest('DELETE_IMAGES_PENDING', deleteImages),
  takeLatest('SAVE_IMAGE_INFO_PENDING', saveImageInfo),
  takeLatest('LOAD_IMAGE_INFO_PENDING', loadImageInfo),
]);
