import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  signup, setNameValid, setEmailValid, setPasswordValid,
} from '../store/actions';
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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

export class RegisterUser extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    touchedName: false,
    touchedEmail: false,
    touchedPassword: false,
  };

  handleChangeName = (e) => {
    const { onSetNameValid } = this.props;
    onSetNameValid(checkValidity(e.target.value));
    this.setState({
      touchedName: true,
      name: e.target.value,
    });
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
    const { onSignup } = this.props;
    const { name, email, password } = this.state;
    onSignup(name, email, password);
  };

  render() {
    const {
      classes, nameFieldValid, emailFieldValid, passwordFieldValid,
    } = this.props;

    const {
      name, touchedName, touchedEmail, touchedPassword,
    } = this.state;

    return (
      <div>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.submitHandler}
        >
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={name}
            onChange={this.handleChangeName}
            margin="normal"
            variant="outlined"
            error={!nameFieldValid && touchedName}
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            onChange={this.handleChangeEmail}
            autoComplete="email"
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
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            error={!passwordFieldValid && touchedPassword}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
            disabled={!(nameFieldValid && emailFieldValid && passwordFieldValid)}
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}

RegisterUser.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    leftIcon: PropTypes.string.isRequired,
    rightIcon: PropTypes.string.isRequired,
    iconSmall: PropTypes.string.isRequired,
  }).isRequired,
  nameFieldValid: PropTypes.bool.isRequired,
  emailFieldValid: PropTypes.bool.isRequired,
  passwordFieldValid: PropTypes.bool.isRequired,
  onSetNameValid: PropTypes.func.isRequired,
  onSetEmailValid: PropTypes.func.isRequired,
  onSetPasswordValid: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nameFieldValid: state.auth.nameValid,
  emailFieldValid: state.auth.emailValid,
  passwordFieldValid: state.auth.passwordValid,
});

const mapDispatchToProps = {
  onSignup: signup,
  onSetNameValid: setNameValid,
  onSetEmailValid: setEmailValid,
  onSetPasswordValid: setPasswordValid,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(RegisterUser));
