import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
// import { syncHistoryWithStore } from 'react-router-redux';

import { createBrowserHistory } from 'history';
// import history from './services/history';
import store from './store';
import './styles/index.css';
import App from './App';
import ImagesList from './containers/ImagesList';
import Login from './containers/Login';
import Admin from './containers/Admin';
import 'babel-polyfill';

// const storeHistory = syncHistoryWithStore(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App>
        <Switch>
          <Route exact path='/' component={ImagesList} />
          <Route path='/auth' component={Login} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
