import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../sidebar/Sidebar';
import Posts from '../../containers/post/Posts';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
});

function CSSGrid(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Sidebar />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Posts />
        </Grid>
      </Grid>
    </div>
  );
}

CSSGrid.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(CSSGrid);
