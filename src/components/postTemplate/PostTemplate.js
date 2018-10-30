import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const PostTemplate = (props) => {
  const {
    classes,
    handleSelectedPost,
    authorAvatar,
    authorColor,
    authorName,
    categoryName,
    body,
  } = props;

  console.log(authorColor);
  console.log(authorAvatar);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {authorAvatar}
          </Avatar>
)}
        action={(
          <IconButton>
            <MoreVertIcon onClick={handleSelectedPost} />
          </IconButton>
)}
        title={authorName}
        subheader={categoryName}
      />
      <CardContent>
        <CardContent>
          <Typography component="p">{body}</Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

PostTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  authorName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleSelectedPost: PropTypes.func.isRequired,
};

export default withStyles(styles)(PostTemplate);
