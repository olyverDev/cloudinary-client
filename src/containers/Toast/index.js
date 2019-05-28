import { connect } from 'react-redux';
import Toast from '../../components/Toast/Toast';

const mapStateToProps = state => ({
  isError: state.common.error,
});

const mapDispatchToProps = dispatch => ({
  hideToast: () => dispatch({ type: 'HIDE_TOAST' }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toast);
