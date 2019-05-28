import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import './style.css';

class ImagesList extends React.PureComponent {

  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const { images } = this.props;
    return (
      <div className='imagesOuter'>
        <div className='container'>
          {images && images.map((image, index) =>
            <Image
              key={`${index}-${image.Id}`}
              Id={image.Id}
              path={image.url}
              width={image.width}
              height={image.height}
            />)}
        </div>
      </div>
    );
  }
}

ImagesList.propTypes = {
  images: PropTypes.array.isRequired,
  fetchImages: PropTypes.func.isRequired,
}

export default ImagesList;
