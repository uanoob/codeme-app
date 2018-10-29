import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Category = ({
  id, title, selected, onClick,
}) => (
  <ListItem button id={id} selected={selected} onClick={onClick}>
    <ListItemText primary={title} />
  </ListItem>
);

Category.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Category;
