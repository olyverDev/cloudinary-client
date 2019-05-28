import { connect } from 'react-redux';
import EditModal from '../../components/Admin/Edit';

const mapStateToProps = state => ({ 
  imageId: state.common.basket.length && state.common.basket[0],
  price: state.common.price,
  count: state.common.count,
  info: state.common.info,
});

const mapDispatchToProps = dispatch => ({
  closeEditModal: () => dispatch({ type: 'CLOSE_EDIT_MODAL' }),
  loadImageInfo: Id => dispatch({ type: 'LOAD_IMAGE_INFO_PENDING', payload: { Id }}),
  save: payload => dispatch({ type: 'SAVE_IMAGE_INFO_PENDING' , payload }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditModal);
