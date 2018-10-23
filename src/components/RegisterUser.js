import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  signup,
  isNameValid,
  isEmailValid,
  isPasswordValid
} from "../store/actions";
import { checkValidity } from "../utils/utility";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
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
    name: "",
    email: "",
    password: ""
  };

  handleChangeName = e => {
    this.props.onValidName(checkValidity(e.target.value));
    this.setState({
      name: e.target.value
    });
  };

  handleChangeEmail = e => {
    this.props.onValidEmail(checkValidity(e.target.value));
    this.setState({
      email: e.target.value
    });
  };

  handleChangePassword = e => {
    this.props.onValidPassword(checkValidity(e.target.value));
    this.setState({
      password: e.target.value
    });
    console.log(this.state);
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSignup(this.state.name, this.state.email, this.state.password);
  };

  render() {
    const { classes } = this.props;

    return (
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
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Signup
        </Button>
      </form>
    );
  }
}

RegisterUser.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

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
