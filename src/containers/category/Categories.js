import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Category from './Category';
import { getCategories } from '../../store/actions/root.action';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Categories extends React.Component {
  state = {
    selectedIndex: -1,
  };

  componentDidMount() {
    const { onGetCategories } = this.props;
    onGetCategories();
  }

  handleSelectedCategory = (event, id) => {
    this.setState({ selectedIndex: id });
    // console.log(id);
  };

  render() {
    const { categories, classes } = this.props;
    const { selectedIndex } = this.state;

    return categories ? (
      <div className={classes.root}>
        <List component="nav">
          {categories.map(category => (
            <Category
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              selected={selectedIndex === category.id}
              onClick={event => this.handleSelectedCategory(event, category.id)}
            />
          ))}
        </List>
      </div>
    ) : null;
  }
}

Categories.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  onGetCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      alias: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = {
  onGetCategories: getCategories,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Categories),
);
