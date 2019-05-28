import React from 'react';
import PropTypes from 'prop-types';
import CommentsHeader from './CommentsHeader';
import Comments from './Comments';
import CommentInput from './CommentInput';
import Information from './Information/Information';
import closeIcon from '../../images/close_icon.png';
import './style.css';

class OpenedImage extends React.Component {

  state = {
    infoOpened: false,
  }

  componentDidMount() {
    this.props.fetchComments();
    this.props.loadImageInfo(this.props.Id);
  }

  uploadComment = (text) => {
    this.props.uploadComment(this.props.Id, text);
  }

  render() {
    return (
      <div id='opened' className='openedImageContainer'>
        <img
          className='openedImage'
          src={this.props.path}
          alt='Cannot load'
          onClick={this.props.closeModal}
        />
        <div className='commentsSection'>
          {this.state.infoOpened &&
            <Information
              details={this.props.information.details}
              price={this.props.information.price}
              count={this.props.information.count}
            />}
          <CommentsHeader
            title="Комментарии"
            handleClick={() => this.setState({ infoOpened: !this.state.infoOpened })}
          />
          <Comments
            comments={this.props.comments.filter(comment => comment.imageId === this.props.Id)}
          />
          <CommentInput imageId={this.props.Id} uploadComment={this.uploadComment} />
        </div>
        <img
          src={closeIcon}
          alt='Cannot load'
          id='close'
          className='closeIcon'
          onClick={this.props.closeModal}
          width={40}
          title='Close'
        />
      </div>
    );
  }
}

OpenedImage.propTypes = {
  Id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  information: PropTypes.objectOf(PropTypes.string).isRequired,
  comments: PropTypes.array,
  error: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  loadImageInfo: PropTypes.func.isRequired,
}

OpenedImage.defaultProps = {
  comments: [],
  error: false,
}

export default OpenedImage;
