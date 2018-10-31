import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FolderIcon from '@material-ui/icons/Chat';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = () => ({
  card: {
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
  },
  avatar: {},
});

const PostTemplate = (props) => {
  const {
    classes,
    handleSelectedPost,
    handleAuthorPosts,
    handleDeletePost,
    handleColor,
    authorAvatar,
    authorColor,
    authorName,
    categoryName,
    body,
  } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <IconButton>
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              onClick={handleAuthorPosts}
              style={{ backgroundColor: authorColor }}
            >
              {authorAvatar}
            </Avatar>
          </IconButton>
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
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: handleColor() }}>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={body} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={handleDeletePost()} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </CardContent>
      </CardContent>
    </Card>
  );
};

PostTemplate.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    actions: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  authorAvatar: PropTypes.string.isRequired,
  authorColor: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleSelectedPost: PropTypes.func.isRequired,
  handleAuthorPosts: PropTypes.func.isRequired,
  handleColor: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default withStyles(styles)(PostTemplate);
