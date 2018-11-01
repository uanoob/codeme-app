import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import { logout } from '../../store/actions/root.action';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

class Header extends React.Component {
  state = {};

  onHandleLogout = () => {
    const { onLogout } = this.props;
    onLogout();
  };

  showNavBar() {
    const { classes, isAutenticated, userId } = this.props;
    const renderIsAuth = () => (
      <div>
        <Link className={classes.link} to="/login">
          <Button color="inherit">Login</Button>
        </Link>
        <Link className={classes.link} to="/register">
          <Button color="inherit">Register</Button>
        </Link>
      </div>
    );
    const renderIsNotAuth = () => (
      <div>
        <Link className={classes.link} to="/main">
          <Button color="inherit">Main</Button>
        </Link>
        <Link className={classes.link} to={`/author/${userId}`}>
          <Button color="inherit">My Page</Button>
        </Link>
        <Button color="inherit" onClick={this.onHandleLogout}>
          Logout
        </Button>
      </div>
    );

    switch (isAutenticated) {
      case false:
        return renderIsAuth();
      default:
        return renderIsNotAuth();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Incode Blog
            </Typography>
            {this.showNavBar()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired,
  onLogout: PropTypes.func.isRequired,
  isAutenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isAutenticated: state.currentUser.isLogined,
  userId: state.currentUser.user.id,
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Header));
