import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout';
import Home from './container/Home';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
import ProfileUser from './components/ProfileUser';
import { authCheckState } from './store/actions';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={LoginUser} />
        <Route path="/register" component={RegisterUser} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
    console.log(this.props.isAutenticated);
    if (this.props.isAutenticated) {
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

App.propTypes = {};

const mapStateToProps = state => ({
  isAutenticated: state.auth.isAuth
});

const mapDispatchToProps = {
  onTryAutoSignup: authCheckState
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
