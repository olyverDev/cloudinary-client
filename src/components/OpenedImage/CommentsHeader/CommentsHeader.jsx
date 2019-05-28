import React from 'react';
import PropTypes from 'prop-types';
import infoIcon from '../../../images/info_icon_2.png';
import './style.css';

const CommentsHeader = ({ title, handleClick }) => (
  <div className='commentsHeader'>
    <p className="title"> {title} </p>
    <img
      src={infoIcon}
      alt='Info'
      title='Info'
      width={30}
      height={30}
      onClick={handleClick}
      className="infoIcon"
    />
  </div>
);

CommentsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CommentsHeader;
