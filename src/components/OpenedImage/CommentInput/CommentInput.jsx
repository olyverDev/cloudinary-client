import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class CommentsForm extends React.Component {

  state = {
    commentText: '',
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.commentText !== nextState.commentText) return true;
    return false;
  }

  handleInputChange = (event) => {
    this.setState({ commentText: event.target.value });
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) this.handleSubmitClick();
    if (e.keyCode === 27) this.input.blur();
  }

  handleSubmitClick = () => {
    this.props.uploadComment(this.state.commentText);
    this.input.value = '';
  }

  render() {
    return (
      <div className='commentsForm'>
        <input
            ref={el => this.input = el}
            type='text'
            placeholder='Написать комментарий'
            onKeyDown={this.handleKeyDown}
            onChange={this.handleInputChange}
            className='commentInput'
        />
      </div>
    )
  }
}

CommentsForm.protoTypes = {
  imageId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
