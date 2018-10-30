import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
          <Typography component="p">{body}</Typography>
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
};

export default withStyles(styles)(PostTemplate);
