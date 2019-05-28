import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

let enhancers;

const sagaMiddleware = createSagaMiddleware();

if (
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(sagaMiddleware),
  );
} else {
  enhancers = compose(applyMiddleware(sagaMiddleware));

}

const store = createStore(reducers, enhancers);

sagaMiddleware.run(sagas);

export default store;
