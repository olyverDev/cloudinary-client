import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import './style.css';

export default class Edit extends Component {
  static state = {
    info: '',
    price: '',
    count: '',
  }

  componentDidMount() {
    this.props.loadImageInfo(this.props.imageId);
  }

  handleInfoChange = (e) => {
    this.setState({
      info: e.target.value,
    });
  }

  handleCountChange = (e) => {
    this.setState({
      count: e.target.value,
    });
  }

  handlePriceChange = (e) => {
    this.setState({
      price: e.target.value,
    });
  }

  render() {
    const { info, price, count } = this.props;
    return (
      <div className='editModalContainer'>
        <div className="infoContainer">
          <Input
            isLong
            handleChange={this.handleInfoChange}
            placeholder={`Детали: ${info}`}
          />
          <Input handleChange={this.handlePriceChange} placeholder={`Цена: ${price}`} />
          <Input
            handleChange={this.handleCountChange}
            placeholder={`Количество: ${count}`}
          />
        </div>
        <div className="actionButtons">
          <Button handleClick={this.props.closeEditModal} text="Отмена" active />
          <Button
            handleClick={() => this.props.save({
              info: this.state.info,
              price: this.state.price,
              count: this.state.count,
              Id: this.props.imageId,
            })}
            text="Сохранить"
            active
          />
        </div>
      </div>
    )
  }
}

Edit.propTypes = {
  imageId: PropTypes.string.isRequired,
  closeEditModal: PropTypes.func.isRequired,
  loadImageInfo: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
}
