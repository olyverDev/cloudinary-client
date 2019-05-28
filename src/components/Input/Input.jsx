import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Input = ({ isLong, handleChange, placeholder, ...other }) =>
  <div className="inputContainer">
    {isLong ?
      <textarea
        {...other}
        onChange={handleChange}
        placeholder={placeholder}
        className="textArea"
      /> :
      <input
        {...other}
        onChange={handleChange}
        placeholder={placeholder}
        className="textInput"
      />}
  </div>

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isLong: PropTypes.bool,
};

Input.defaultProps = {
  isLong: false,
  placeholder: '',
};

export default Input;
