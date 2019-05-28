import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Image extends PureComponent {

  toggleSelection = () => {
    if (!this.props.active) {
      this.props.basketImage(this.props.Id);
    } else {
      this.props.unbasketImage(this.props.Id);
    }
  }

  render() {
    return (
      <div className='imageContainer'>
        {this.props.path && <img
          className={this.props.active ? 'active' : 'image'}
          onClick={this.toggleSelection}
          src={this.props.path}
          width={this.props.width}
          height={this.props.height}
          alt='Cannot load'
          title='Выбрать'
        />}
      </div>
    );
  }
}

Image.propTypes = {
  closeModal: PropTypes.func,
  Id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  active: PropTypes.bool.isRequired,
}

Image.defaultProps = {
  closeModal: () => { },
  width: 400,
  height: 400,
}

export default Image;
