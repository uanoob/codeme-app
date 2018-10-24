import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { auth, isEmailValid, isPasswordValid } from '../store/actions';
import { checkValidity } from '../utils/utility';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 'auto',
    width: 300
  },
  textField: {
    marginLeft: theme.spacing.auto,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

export class LoginUser extends Component {
  state = {
    redirect: false,
    email: '',
    password: '',
    touchedEmail: false,
    touchedPassword: false
  };

  handleChangeEmail = e => {
    this.props.onValidEmail(checkValidity(e.target.value));
    this.setState({
      touchedEmail: true,
      email: e.target.value
    });
  };

  handleChangePassword = e => {
    this.props.onValidPassword(checkValidity(e.target.value));
    this.setState({
      touchedPassword: true,
      password: e.target.value
    });
    // console.log(this.state);
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onAuth(this.state.email, this.state.password);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.props.onLogined) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const { classes, onEmailValid, onPasswordValid } = this.props;
    // console.log(onEmailValid);

    return (
      <div>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.submitHandler}
        >
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            autoComplete="on"
            margin="normal"
            variant="outlined"
            error={!onEmailValid && this.state.touchedEmail}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            onChange={this.handleChangePassword}
            autoComplete="on"
            margin="normal"
            variant="outlined"
            error={!onPasswordValid && this.state.touchedPassword}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Login
          </Button>
          <div align="center">
            <span>Not registered?</span>
            <span>
              <Link to="/register">
                <Button size="small" color="primary">
                  SignUp Now!
                </Button>
              </Link>
            </span>
          </div>
        </form>
        {this.renderRedirect()}
      </div>
    );
  }
}

LoginUser.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  onLogined: state.auth.isAuth,
  onEmailValid: state.auth.emailValid,
  onPasswordValid: state.auth.passwordValid
});

const mapDispatchToProps = {
  onAuth: auth,
  onValidEmail: isEmailValid,
  onValidPassword: isPasswordValid
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginUser));
