import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Category from './Category';
import { getAllCategories, getAllPostsByCategory } from '../../store/actions/root.action';
import Preloader from '../../components/preloader/PreLoader';

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
    const { onGetAllCategories } = this.props;
    onGetAllCategories();
  }

  handleSelectedCategory = (index, title) => {
    this.setState({ selectedIndex: index });
    const { onGetAllPostsByCategory } = this.props;
    onGetAllPostsByCategory(title);
  };

  render() {
    const { loading, categories, classes } = this.props;
    const { selectedIndex } = this.state;

    return !loading ? (
      <div className={classes.root}>
        <List component="nav">
          {categories.map(category => (
            <Category
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              selected={selectedIndex === category.id}
              onClick={() => this.handleSelectedCategory(category.id, category.title)}
            />
          ))}
        </List>
      </div>
    ) : (
      <Preloader />
    );
  }
}

Categories.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  onGetAllCategories: PropTypes.func.isRequired,
  onGetAllPostsByCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      alias: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.categories.loading,
  categories: state.categories.categories,
});

const mapDispatchToProps = {
  onGetAllCategories: getAllCategories,
  onGetAllPostsByCategory: getAllPostsByCategory,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Categories),
);
