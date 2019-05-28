import React, { Component } from 'react';
import './styles/App.css';
import AppHeader from './containers/AppHeader';
import Toast from './containers/Toast';

class App extends Component {
  render() {
    return (
      <div  className='app'>
        <Toast />
        <AppHeader />
        { this.props.children }
      </div>
    );
  }
}

export default App;
