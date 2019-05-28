import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Information = ({ details, price, count }) => (
  <div className='informationContainer'>
    <div className="item">
      <span className="label"> Цена: </span> <span className="price"> {price} </span>
    </div>
    <div className="item">
      <span className="label"> Количество: </span> <span className="count"> {count} </span>
    </div>
    <div className="detailsItem">
      <span className="detailsLabel"> Дополнительно: </span> 
      <textarea className="details" value={details} readOnly disabled />
    </div>
  </div>
);

Information.propTypes = {
  details: PropTypes.string,
  price: PropTypes.string,
  count: PropTypes.string,
};

Information.defaultProps = {
  details: 'нет информации',
  price: 'нет информации',
  count: 'нет информации',
}

export default Information;
