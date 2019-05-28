import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenedImage from '../../containers/OpenedImage';
import './css.css';

class Image extends Component {

  state = {
    opened: false,
  }

  openModal = () => this.setState({ opened: !this.state.opened });

  closeModal = () => this.setState({ opened: false });

  render() {
    return (
      <div className='imageContainer'>
        {this.props.path && <img
          className='image'
          onClick={this.openModal}
          src={this.props.path}
          width={this.props.width}
          height={this.props.height}
          alt='Cannot load'
          title='Открыть'
        />}
        {this.state.opened &&
          <OpenedImage
            closeModal={this.closeModal}
            Id={this.props.Id}
            path={this.props.path}
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
}

Image.defaultProps = {
  closeModal: () => { },
  width: 400,
  height: 400,
}

export default Image;
