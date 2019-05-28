import { connect } from 'react-redux';
import OpenedImage from '../../components/OpenedImage';

const getInformation = (state) => {
  return {
    details: state.common.info,
    price: state.common.price,
    count: state.common.count,
  }
}

const mapStateToProps = state => ({
  comments: state.common.comments,
  information: getInformation(state),
});

const mapDispatchToProps = dispatch => ({
  fetchComments: (callback) => dispatch({ type: 'FETCH_COMMENTS_PENDING' }),
  uploadComment: (imageId, text) => dispatch(
    {
      type: 'UPLOAD_COMMENT_PENDING',
      payload: { imageId, text }
    }),
  loadImageInfo: Id => dispatch({ type: 'LOAD_IMAGE_INFO_PENDING', payload: { Id }}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OpenedImage);
