import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  getAllCategories,
  getSingleCategoryById,
  setCategoryInputValid,
  setTitleInputValid,
  setBodyInputValid,
  createPosts,
} from '../../store/actions/root.action';
import checkValidity from '../../utils/validation.utils';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class ProfileForm extends React.Component {
  state = {
    category: '',
    categoryId: undefined,
    title: '',
    body: '',
    touchedCategory: false,
    touchedTitle: false,
    touchedBody: false,
  };

  componentDidMount() {
    const { onGetAllCategories } = this.props;
    onGetAllCategories();
  }

  handleChangeCategory = (e) => {
    const { onSetCategoryInputValid } = this.props;
    onSetCategoryInputValid(checkValidity(e.target.value));
    this.handleGetIdCategory(e.target.value);
    this.setState({
      touchedCategory: true,
      category: e.target.value,
    });
  };

  handleGetIdCategory = (title) => {
    const { categories } = this.props;
    const result = categories.filter(category => category.title === title);
    console.log(result[0].id);
  };

  handleChangeTitle = (e) => {
    const { onSetTitleInputValid } = this.props;
    onSetTitleInputValid(checkValidity(e.target.value));
    this.setState({
      touchedTitle: true,
      title: e.target.value,
    });
  };

  handleChangeBody = (e) => {
    const { onSetBodyInputValid } = this.props;
    onSetBodyInputValid(checkValidity(e.target.value));
    this.setState({
      touchedBody: true,
      body: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { onCreatePosts, authorId, authorName } = this.props;
    const {
      title, body, categoryId, category,
    } = this.state;
    onCreatePosts(title, body, authorId, authorName, categoryId, category);
    this.setState({
      category: '',
      categoryId: undefined,
      title: '',
      body: '',
      touchedCategory: false,
      touchedTitle: false,
      touchedBody: false,
    });
  };

  render() {
    const {
      classes, categories, categoryInputValid, titleInputValid, bodyInputValid,
    } = this.props;
    const {
      category, touchedCategory, touchedTitle, touchedBody,
    } = this.state;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="title"
            label="Title"
            placeholder="Title"
            className={classes.textField}
            margin="normal"
            variant="filled"
            onChange={this.handleChangeTitle}
            error={!titleInputValid && touchedTitle}
          />

          {/* <TextField
            id="addNewCategory"
            label="Add New Category"
            placeholder="Add New Category"
            className={classes.textField}
            margin="normal"
            variant="filled"
            onChange={this.handleChangeCategory}
            error={!categoryInputValid && touchedCategory}
          /> */}

          <TextField
            id="filled-select-category"
            select
            label="Select category"
            className={classes.textField}
            value={category}
            onChange={this.handleChangeCategory}
            error={!categoryInputValid && touchedCategory}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select category"
            margin="normal"
            variant="filled"
          >
            {categories.map(item => (
              <MenuItem key={item.id} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="body"
            label="Write Post"
            multiline
            rows="4"
            placeholder="Write Post"
            className={classes.textField}
            margin="normal"
            variant="filled"
            onChange={this.handleChangeBody}
            error={!bodyInputValid && touchedBody}
          />
        </form>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.submitHandler}
          disabled={!(categoryInputValid && titleInputValid && bodyInputValid)}
        >
          Create Post
        </Button>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
    dense: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      alias: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onGetAllCategories: PropTypes.func.isRequired,
  // onGetSingleCategoryById: PropTypes.func.isRequired,
  onSetCategoryInputValid: PropTypes.func.isRequired,
  onSetTitleInputValid: PropTypes.func.isRequired,
  onSetBodyInputValid: PropTypes.func.isRequired,
  categoryInputValid: PropTypes.bool.isRequired,
  titleInputValid: PropTypes.bool.isRequired,
  bodyInputValid: PropTypes.bool.isRequired,
  authorId: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  onCreatePosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  categoryInputValid: state.validation.isCategoryInputValid,
  titleInputValid: state.validation.isTitleInputValid,
  bodyInputValid: state.validation.isBodyInputValid,
  categoryId: state.categories.categories,
  authorId: state.auth.user.id,
  authorName: state.auth.user.login,
});

const mapDispatchToProps = {
  onGetAllCategories: getAllCategories,
  onGetSingleCategoryById: getSingleCategoryById,
  onSetCategoryInputValid: setCategoryInputValid,
  onSetTitleInputValid: setTitleInputValid,
  onSetBodyInputValid: setBodyInputValid,
  onCreatePosts: createPosts,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProfileForm),
);
