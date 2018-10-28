import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout';
import Main from './components/main/Main';
// import Home from './components/Home';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import { authCheckState } from './store/actions/root.action';

class App extends Component {
  componentDidMount() {
    const { onTryAutoSignup } = this.props;
    onTryAutoSignup();
  }

  render() {
    const { isAutenticated, isLoaded } = this.props;
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route exact path="/" component={Login} /> */}
        <Redirect to="/login" />
      </Switch>
    );
    if (isAutenticated && isLoaded) {
      routes = (
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/profile" component={ProfileUser} /> */}
          <Redirect to="/" />
        </Switch>
      );
    }
    return <Layout>{routes}</Layout>;
  }
}

App.propTypes = {
  onTryAutoSignup: PropTypes.func.isRequired,
  isAutenticated: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAutenticated: state.auth.isLogined,
  isLoaded: state.auth.loaded,
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
