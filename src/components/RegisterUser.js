import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  signup,
  isNameValid,
  isEmailValid,
  isPasswordValid
} from '../store/actions';
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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

export class RegisterUser extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    touchedName: false,
    touchedEmail: false,
    touchedPassword: false
  };

  handleChangeName = e => {
    const { onValidName } = this.props;
    onValidName(checkValidity(e.target.value));
    this.setState({
      touchedName: true,
      name: e.target.value
    });
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
    const { onSignup } = this.props;
    const { name, email, password } = this.state;
    onSignup(name, email, password);
  };

  handleRedirect = () => {
    const { onLogined } = this.props;
    if (onLogined) {
      this.props.history.push('/');
    }
  };

  render() {
    const { classes, onNameValid, onEmailValid, onPasswordValid } = this.props;

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
            value={this.state.name}
            onChange={this.handleChangeName}
            margin="normal"
            variant="outlined"
            error={!onNameValid && this.state.touchedName}
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
            error={!onEmailValid && this.state.touchedEmail}
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
            error={!onPasswordValid && this.state.touchedPassword}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
            disabled={!(onNameValid && onEmailValid && onPasswordValid)}
          >
            Signup
          </Button>
        </form>
        {this.handleRedirect()}
      </div>
    );
  }
}

RegisterUser.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  onLogined: state.auth.isAuth,
  onNameValid: state.auth.nameValid,
  onEmailValid: state.auth.emailValid,
  onPasswordValid: state.auth.passwordValid
});

const mapDispatchToProps = {
  onSignup: signup,
  onValidName: isNameValid,
  onValidEmail: isEmailValid,
  onValidPassword: isPasswordValid
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RegisterUser));
