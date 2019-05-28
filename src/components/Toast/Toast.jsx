import React from 'react';
import PropTypes from 'prop-types';
import './css.css';

export default class Toast extends React.PureComponent {

  render() {
    return (
      <div className='toastContainer'>
        {this.props.isError ? <div className='toast'>
          <p className='toastMessage'> Error: {this.props.errorMessage} </p>
          <button
            onClick={this.props.hideToast}
            className='toastButton'
          >
            Close
          </button>
        </div> : null}
      </div>
    )
  }
};

Toast.propTypes = {
  isError: PropTypes.bool.isRequired,
  hideToast: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
}

Toast.defaultProps = {
  errorMessage: 'try again',
}