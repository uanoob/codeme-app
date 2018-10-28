import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout';
import MainPage from './components/main/MainPage';
import LoginPage from './containers/auth/LoginPage';
import RegisterPage from './containers/auth/RegisterPage';
import PostPage from './containers/post/PostPage';
import { authCheckState } from './store/actions/root.action';

class App extends Component {
  componentDidMount() {
    const { onTryAutoSignup } = this.props;
    onTryAutoSignup();
  }

  render() {
    const { isAutenticated } = this.props;
    let routes = (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Redirect to="/login" />
      </Switch>
    );
    if (isAutenticated) {
      routes = (
        <Switch>
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/post" component={PostPage} />
          {/* <Route exact path="/profile" component={ProfileUser} /> */}
          <Redirect to="/main" />
        </Switch>
      );
    }
    return <Layout>{routes}</Layout>;
  }
}

App.propTypes = {
  onTryAutoSignup: PropTypes.func.isRequired,
  isAutenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAutenticated: state.auth.isLogined,
});

const mapDispatchToProps = {
  onTryAutoSignup: authCheckState,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
