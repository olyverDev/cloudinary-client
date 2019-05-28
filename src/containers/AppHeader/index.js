import { connect } from 'react-redux';
import AppHeader from '../../components/AppHeader/AppHeader';

const mapStateToProps = state => ({ loginText: state.common.loginText });

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: 'LOGOUT' }),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeader);