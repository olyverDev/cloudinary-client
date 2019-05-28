import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const Comment = ({ text, date }) => (
  <li className='commentWrapper'>
    <span title={text} className='comment'> {text} </span>
    <span className="date"> {date} </span>
  </li>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Comment;
