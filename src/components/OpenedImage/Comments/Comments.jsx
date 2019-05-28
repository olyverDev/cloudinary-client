import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import './style.css';

export default class Comments extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    this.container.scrollTop = this.container.scrollHeight; 
  }

  render() {
    return <ul ref={el => (this.container = el)} className='commentsContainer'>
        {this.props.comments.map((comment, index) =>
            <Comment key={`${comment._id}-${index}`} text={comment.value} date={comment.date} />
          )}
      </ul>;
  }
}

Comments.PropTypes = {
  comments: PropTypes.array.isRequired,
}
