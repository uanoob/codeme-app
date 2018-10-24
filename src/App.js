import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Layout from './hoc/Layout';
import Home from './container/Home';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
import ProfileUser from './components/ProfileUser';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginUser} />
          <Route exact path="/register" component={RegisterUser} />
          <Route exact path="/profile" component={ProfileUser} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
