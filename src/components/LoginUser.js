import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
    email: '',
    password: '',
    touchedEmail: false,
    touchedPassword: false
  };

  handleChangeEmail = e => {
    const { onValidEmail } = this.props;
    onValidEmail(checkValidity(e.target.value));
    this.setState({
      touchedEmail: true,
      email: e.target.value
    });
  };

  handleChangePassword = e => {
    const { onValidPassword } = this.props;
    onValidPassword(checkValidity(e.target.value));
    this.setState({
      touchedPassword: true,
      password: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { onAuth } = this.props;
    const { email, password } = this.state;
    onAuth(email, password);
  };

  handleRedirect = () => {
    const { onLogined } = this.props;
    if (onLogined) {
      this.props.history.push('/');
    }
  };

  render() {
    const { classes, onEmailValid, onPasswordValid } = this.props;
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
            disabled={!(onEmailValid && onPasswordValid)}
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
        {this.handleRedirect()}
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
