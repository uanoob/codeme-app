import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { auth, setNameInputValid, setPasswordInputValid } from '../../store/actions/root.action';
import checkValidity from '../../utils/validation.utils';

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

export class RegisterUserComponent extends Component {
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
    const { tryRegistration } = this.props;
    const { name, password } = this.state;
    tryRegistration(name, password);
  };

  render() {
    const { classes, nameFieldValid, passwordFieldValid } = this.props;

    const { name, touchedName, touchedPassword } = this.state;

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
            disabled={!(nameFieldValid && passwordFieldValid)}
          >
            auth
          </Button>
        </form>
      </div>
    );
  }
}

RegisterUserComponent.propTypes = {
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
  passwordFieldValid: PropTypes.bool.isRequired,
  onSetNameInputValid: PropTypes.func.isRequired,
  onSetPasswordInputValid: PropTypes.func.isRequired,
  tryRegistration: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nameFieldValid: state.validation.isNameInputValid,
  passwordFieldValid: state.validation.isPasswordInputValid,
});

const mapDispatchToProps = {
  tryRegistration: auth,
  onSetNameInputValid: setNameInputValid,
  onSetPasswordInputValid: setPasswordInputValid,
};

const RegisterPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(RegisterUserComponent));

export default RegisterPage;
