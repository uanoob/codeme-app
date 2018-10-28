import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: 20,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

function Home(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" />
      </Paper>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired,
};

export default withStyles(styles)(Home);