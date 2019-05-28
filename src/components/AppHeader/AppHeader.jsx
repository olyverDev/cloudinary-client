import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css.css';

const AppHeader = ({ loginText, logout }) => (
  <div className='AppHeader'>
    <Link to='/' className='headerTitle'> Cloudinary client </Link>
    <Link
      onClick={loginText === 'Logout' ? logout : () => {}}
      id='toLogIn'
      to='/auth'
      className='toLogIn'
    >
      {loginText}
    </Link>
  </div>
);

AppHeader.propTypes = {
  loginText: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
}

export default AppHeader;