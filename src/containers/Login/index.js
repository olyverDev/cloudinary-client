import { connect } from 'react-redux';
import Login from '../../components/Login/Login';

const mapStateToProps = state => ({ logged: state.common.logged });

const mapDispatchToProps = dispatch => ({
  login: (name, pass) => dispatch({ type: 'AUTH_PENDING', payload: { name, pass } }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
