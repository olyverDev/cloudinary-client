import { all } from 'redux-saga/effects';
import comments from './comments';
import images from './images';
import auth from './auth';
 
export default function* () {
  yield all([
    comments(),
    images(),
    auth(),
  ]);
}
