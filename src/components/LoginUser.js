import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { auth, setEmailValid, setPasswordValid } from '../store/actions';
import checkValidity from '../utils/utility';

const styles = theme => ({
  typography: {
    useNextVariants: true,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 'auto',
    width: 300,
  },
  textField: {
    marginLeft: theme.spacing.auto,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

export class LoginUser extends Component {
  state = {
    email: '',
    password: '',
    touchedEmail: false,
    touchedPassword: false,
  };

  handleChangeEmail = (e) => {
    const { onSetEmailValid } = this.props;
    onSetEmailValid(checkValidity(e.target.value));
    this.setState({
      touchedEmail: true,
      email: e.target.value,
    });
  };

  handleChangePassword = (e) => {
    const { onSetPasswordValid } = this.props;
    onSetPasswordValid(checkValidity(e.target.value));
    this.setState({
      touchedPassword: true,
      password: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { onAuth } = this.props;
    const { email, password } = this.state;
    onAuth(email, password);
  };

  render() {
    const { emailFieldValid, passwordFieldValid } = this.props;
    const { email, touchedEmail, touchedPassword } = this.state;
    const { classes } = this.props;

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
            value={email}
            onChange={this.handleChangeEmail}
            autoComplete="on"
            margin="normal"
            variant="outlined"
            error={!emailFieldValid && touchedEmail}
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
            error={!passwordFieldValid && touchedPassword}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
            disabled={!(emailFieldValid && passwordFieldValid)}
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
      </div>
    );
  }
}

LoginUser.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
  }).isRequired,
  emailFieldValid: PropTypes.bool.isRequired,
  passwordFieldValid: PropTypes.bool.isRequired,
  onSetEmailValid: PropTypes.func.isRequired,
  onSetPasswordValid: PropTypes.func.isRequired,
  onAuth: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  onLogined: state.auth.isAuth,
  onError: state.auth.error,
  emailFieldValid: state.auth.emailValid,
  passwordFieldValid: state.auth.passwordValid,
});

const mapDispatchToProps = {
  onAuth: auth,
  onSetEmailValid: setEmailValid,
  onSetPasswordValid: setPasswordValid,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(LoginUser));
