import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { authCheckState, logout } from '../store/actions';

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
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  onHandleLogout = () => {
    const { onLogout } = this.props;
    onLogout();
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, isAutenticated } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Incode Blog
            </Typography>
            <FormGroup>
              <Link to="/login">
                <FormControlLabel
                  control={
                    <Switch checked={isAutenticated} aria-label="LoginSwitch" />
                  }
                  label={isAutenticated ? 'Logout' : 'Login'}
                  onClick={isAutenticated ? this.onHandleLogout : null}
                />
              </Link>
            </FormGroup>
            {isAutenticated && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {' '}
                  <Link to="/profile">
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  </Link>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired,
  onLogout: PropTypes.func.isRequired,
  isAutenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAutenticated: state.auth.isLogined,
});

const mapDispatchToProps = {
  onAuthCheckState: authCheckState,
  onLogout: logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(MenuAppBar));
