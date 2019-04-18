import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {'Hello, I am bundled with rollup.js and deployed to GitLab Pages.'}
        { this.props.children }
      </div>
    );
  }
}

export default App;
