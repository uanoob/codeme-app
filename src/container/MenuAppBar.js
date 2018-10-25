import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null
  };

  // componentDidMount() {
  //   const { onAuthCheckState } = this.props;
  //   onAuthCheckState();
  // }

  onHandleLogout = event => {
    this.props.onLogout();
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              CodeMe
            </Typography>
            <FormGroup>
              <Link to='/login'>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.props.onLogined}
                      aria-label="LoginSwitch"
                    />
                  }
                  label={this.props.onLogined ? 'Logout' : 'Login'}
                  onClick={this.props.onLogined ? this.onHandleLogout : null}
                />
              </Link>
            </FormGroup>
            {this.props.onLogined && (
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
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
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
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  onLogined: state.auth.isAuth
});

const mapDispatchToProps = {
  onAuthCheckState: authCheckState,
  onLogout: logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MenuAppBar));
