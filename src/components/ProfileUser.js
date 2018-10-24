import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getUserProfile } from '../store/actions';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 'auto',
    marginTop: 16,
    width: 300
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class ProfileUser extends Component {
  componentDidMount() {
    const { onGetUserProfile, tokenUser } = this.props;
    console.log(tokenUser);
    onGetUserProfile(tokenUser);
  }
  render() {
    const { classes } = this.props;
    const { profileUser } = this.props;

    return profileUser ? (
      <Card className={classes.container}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            User Profile:
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Name: {profileUser.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Email: {profileUser.email}
          </Typography>
        </CardContent>
      </Card>
    ) : null;
  }
}

ProfileUser.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tokenUser: state.auth.token,
  profileUser: state.user.profile
});

const mapDispatchToProps = {
  onGetUserProfile: getUserProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProfileUser));
