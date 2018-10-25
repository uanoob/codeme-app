import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout';
import Home from './container/Home';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
import ProfileUser from './components/ProfileUser';
import { authCheckState } from './store/actions';

class App extends Component {
  componentDidMount() {
    const { onTryAutoSignup } = this.props;
    onTryAutoSignup();
  }

  render() {
    const { isAutenticated } = this.props;
    let routes = (
      <Switch>
        <Route path="/login" component={LoginUser} />
        <Route path="/register" component={RegisterUser} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
    if (isAutenticated) {
      routes = (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={ProfileUser} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

App.propTypes = {
  onTryAutoSignup: PropTypes.func.isRequired,
  isAutenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAutenticated: state.auth.isAuth,
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
