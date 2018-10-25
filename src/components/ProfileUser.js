import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { getUserProfile } from '../store/actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: 20,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

class ProfileUser extends Component {
  componentDidMount() {
    const { onGetUserProfile, tokenUser } = this.props;
    onGetUserProfile(tokenUser);
  }

  render() {
    const { classes } = this.props;
    const { profileUser } = this.props;

    return profileUser ? (
      <Paper className={classes.root} elevation={1}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          User Profile:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Name:
          {' '}
          {profileUser.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Email:
          {' '}
          {profileUser.email}
        </Typography>
      </Paper>
    ) : null;
  }
}

ProfileUser.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired,
  onGetUserProfile: PropTypes.func.isRequired,
  tokenUser: PropTypes.string.isRequired,
  profileUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  tokenUser: state.auth.token,
  profileUser: state.user.profile || null,
});

const mapDispatchToProps = {
  onGetUserProfile: getUserProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ProfileUser));
