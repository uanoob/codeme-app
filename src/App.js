import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import './App.css';
import Header from './containers/header/Header';
import MainPage from './components/main/MainPage';
import LoginPage from './containers/auth/LoginPage';
import RegisterPage from './containers/auth/RegisterPage';
import CreatePost from './containers/post/CreatePost';
// import UpdatePost from './containers/post/CurrentPost';
import AuthorPage from './containers/author/AuthorPage';
import CurrentPost from './containers/post/CurrentPost';
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
          <Route exact path="/profile/:id" component={CreatePost} />
          {/* <Route exact path="post/update/:id" component={UpdatePost} /> */}
          <Route exact path="/author/:id" component={AuthorPage} />
          <Route exact path="/post/:id" component={CurrentPost} />
          <Redirect to="/main" />
        </Switch>
      );
    }
    return (
      <Fragment>
        <Header />
        {routes}
      </Fragment>
    );
  }
}

App.propTypes = {
  onTryAutoSignup: PropTypes.func.isRequired,
  isAutenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAutenticated: state.currentUser.isLogined,
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
