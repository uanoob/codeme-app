import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Post = ({
  id, title, body, authorName, categoryName, onClick,
}) => (
  <ListItem button id={id} onClick={onClick}>
    <ListItemText primary={title} />
    <ListItemText primary={body} />
    <ListItemText primary={authorName} />
    <ListItemText primary={categoryName} />
  </ListItem>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Post;
