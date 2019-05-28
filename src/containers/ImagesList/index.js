import { connect } from 'react-redux';
import ImagesList from '../../components/ImagesList/ImagesList';

const mapStateToProps = state => ({
  images: state.common.images,
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch({ type: 'FETCH_IMAGES_PENDING' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesList);
