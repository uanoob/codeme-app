import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { login, setNameInputValid, setPasswordInputValid } from '../store/actions';
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
    name: '',
    password: '',
    touchedName: false,
    touchedPassword: false,
  };

  handleChangeName = (e) => {
    const { onSetNameInputValid } = this.props;
    onSetNameInputValid(checkValidity(e.target.value));
    this.setState({
      touchedName: true,
      name: e.target.value,
    });
  };

  handleChangePassword = (e) => {
    const { onSetPasswordInputValid } = this.props;
    onSetPasswordInputValid(checkValidity(e.target.value));
    this.setState({
      touchedPassword: true,
      password: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { tryLogin } = this.props;
    const { name, password } = this.state;
    tryLogin(name, password);
  };

  render() {
    const { nameFieldValid, passwordFieldValid } = this.props;
    const { name, touchedName, touchedPassword } = this.state;
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
            id="outlined-name-input"
            label="Name"
            className={classes.textField}
            name="name"
            value={name}
            onChange={this.handleChangeName}
            autoComplete="on"
            margin="normal"
            variant="outlined"
            error={!nameFieldValid && touchedName}
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
            disabled={!(nameFieldValid && passwordFieldValid)}
          >
            Login
          </Button>
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
  nameFieldValid: PropTypes.bool.isRequired,
  passwordFieldValid: PropTypes.bool.isRequired,
  onSetNameInputValid: PropTypes.func.isRequired,
  tryLogin: PropTypes.func.isRequired,
  onSetPasswordInputValid: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAutenticated: state.auth.isLogined,
  nameFieldValid: state.validation.isNameInputValid,
  passwordFieldValid: state.validation.isPasswordInputValid,
});

const mapDispatchToProps = {
  tryLogin: login,
  onSetNameInputValid: setNameInputValid,
  onSetPasswordInputValid: setPasswordInputValid,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(LoginUser));
