import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Image from './Image/Image.jsx';
import Edit from '../../containers/Edit';
import history from '../../services/history';
import './css.css';

class Admin extends React.Component {

  componentDidMount() {
    if (!this.props.logged) history.push('/auth');
    else this.props.fetchImages();
  }

  handleChange = (e) => {
    this.props.uploadImage(e.target.files[0]);
  }

  handleFakeClick = () => {
    this.uploader.click();
  }

  render() {
    const { images, basket, editModalOpened } = this.props;
    return (
      <div className="adminContainer">
        <div className="adminInfo">
          <span className='infoText'> Фотографий: </span>
          <span className='countText'> {images.length}, </span>
          <span className='infoText'> Выбрано: </span>
          <span className='countText'> {basket.length} </span>
        </div>
        <div className="imagesOuter">
          <div className="container">
            {images && images.map((image, index) =>
              <Image
                key={`${index}-${image.Id}`}
                Id={image.Id}
                path={image.url}
                width={image.width}
                height={image.height}
                basketImage={this.props.basketImage}
                unbasketImage={this.props.unbasketImage}
                active={basket.includes(image.Id)}
              />)}
          </div>
        </div>
        <div className='buttons'>
          <Button
            handleClick={this.handleFakeClick}
            text="Загрузить"
            active={!basket.length}
          />
          <input
            ref={(el) => this.uploader = el}
            onChange={this.handleChange}
            className='uploadReal'
            type='file'
            name='file'
            accept="image/*"
          />
          <Button
            handleClick={() => this.props.deleteImages(basket)}
            text="Удалить"
            active={!!basket.length && !editModalOpened}
          />
          <Button
            handleClick={() => this.props.openEditModal(this.props.basket[0])}
            text="Редактировать"
            active={basket.length === 1 && !editModalOpened}
          />
          <Button
            handleClick={() => this.props.selectAll(images)}
            text="Выбрать все"
            active={images.length !== basket.length && !editModalOpened}
          />
          <Button
            handleClick={this.props.clearBasket}
            text="Очистить выбор"
            active={!!basket.length && !editModalOpened}
          />
        </div>
        {editModalOpened ? <Edit /> : null}
      </div>
    );
  }
}

Admin.propTypes = {
  basket: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  openEditModal: PropTypes.func.isRequired,
  editModalOpened: PropTypes.bool.isRequired,
  selectAll: PropTypes.func.isRequired,
  clearBasket: PropTypes.func.isRequired,
}

export default Admin;
