import { connect } from 'react-redux';
import Admin from '../../components/Admin/Admin';

const getBasket = ({ basket, images }) => {
  const imagesIDs = images.map(item => item.Id);
  return basket.filter(item => imagesIDs.includes(item));
}

const mapStateToProps = state => ({ 
  logged: state.common.logged,
  images: state.common.images,
  basket: getBasket(state.common),
  editModalOpened: state.common.editModalOpened,
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: 'LOGIN' }),
  uploadImage: file => dispatch({ type: 'UPLOAD_IMAGE_PENDING', payload: file }),
  fetchImages: () => dispatch({ type: 'FETCH_IMAGES_PENDING' }),
  basketImage: id => dispatch({ type: 'BASKET_IMAGE', payload: { id }}),
  unbasketImage: id => dispatch({ type: 'UNBASKET_IMAGE', payload: { id }}),
  deleteImages: ids => dispatch({ type: 'DELETE_IMAGES_PENDING', payload: { ids }}),
  openEditModal: imageId => dispatch({ type: 'OPEN_EDIT_MODAL', payload: { imageId } }),
  selectAll: images => dispatch({ type: 'BASKET_ALL_IMAGES', payload: { all: images } }),
  clearBasket: () => dispatch({ type: 'CLEAR_BASKET' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
