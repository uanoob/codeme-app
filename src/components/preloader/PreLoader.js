import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} color="primary" size={50} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.shape({
    progress: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
