import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { auth, isEmailValid, isPasswordValid } from "../store/actions";
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
  }
});

export class LoginUser extends Component {
  state = {
    email: "",
    password: ""
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
    this.props.onAuth(this.state.email, this.state.password);
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
          Login
        </Button>
      </form>
    );
  }
}

LoginUser.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onAuth: auth,
  onValidEmail: isEmailValid,
  onValidPassword: isPasswordValid
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginUser));
