import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { auth } from "../store/actions";

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
    email: "Email",
    password: "Password"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(this.state.email.value, this.state.password.value);
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
          onChange={this.handleChange("email")}
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          onChange={this.handleChange("password")}
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

// export default withStyles(styles)(LoginUser);

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onAuth: auth
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginUser));
