import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import checkValidity from '../../utils/validation.utils';
import { setCommentInputValid, createComment } from '../../store/actions/root.action';

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

class Comments extends React.Component {
  state = {
    comment: '',
    touchedComment: false,
  };

  handleChangeComment = (e) => {
    const { onSetCommentInputValid } = this.props;
    onSetCommentInputValid(checkValidity(e.target.value));
    this.setState({
      touchedComment: true,
      comment: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const {
      onCreateComment, postId, authorId, authorName,
    } = this.props;

    const { comment } = this.state;
    onCreateComment(comment, authorId, authorName, postId);
    this.setState({ comment: '', touchedComment: false });
  };

  render() {
    const { classes, commentFieldValid } = this.props;
    const { comment, touchedComment } = this.state;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-static"
            label="Leave comment"
            multiline
            rows="4"
            placeholder="Your comment"
            value={comment}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={this.handleChangeComment}
            error={!commentFieldValid && touchedComment}
          />
        </form>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.button}
          disabled={!commentFieldValid}
          onClick={this.submitHandler}
        >
          Send
        </Button>
      </div>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired,
  commentFieldValid: PropTypes.bool.isRequired,
  onSetCommentInputValid: PropTypes.func.isRequired,
  onCreateComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  commentFieldValid: state.validation.isCommentInputValid,
  postId: state.posts.post.id,
  authorId: state.user.profile.id,
  authorName: state.user.profile.login,
});

const mapDispatchToProps = {
  onSetCommentInputValid: setCommentInputValid,
  onCreateComment: createComment,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Comments),
);
