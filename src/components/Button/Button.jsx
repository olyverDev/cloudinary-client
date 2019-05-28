import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ active, handleClick, text }) =>
  <div className="buttonWrapper">
    <button
      onClick={active ? handleClick : () => {}}
      className={active ? "activeButton" : "disabledButton"}
    >
      {text}
    </button>
  </div>

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Button;
