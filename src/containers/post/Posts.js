import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import PostTemplate from '../../components/postTemplate/PostTemplate';
import {
  getAllPosts,
  getPostById,
  deletePosts,
  updatePosts,
} from '../../store/actions/root.action';
import stringToColor from '../../utils/stringToColor';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Posts extends React.Component {
  state = { expanded: false };

  componentDidMount() {
    const { onGetAllPosts } = this.props;
    onGetAllPosts();
  }

  handleColor = string => stringToColor(string);

  handleAuthorAvatar = str => `${str.charAt(0)}${str.charAt(str.length - 1)}`.toUpperCase();

  handleCurrentPost = (postId) => {
    const { history } = this.props;
    history.push(`/post/${postId}`);
  };

  handleAuthorPosts = (authorId) => {
    const { history } = this.props;
    history.push(`/author/${authorId}`);
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleColor = string => stringToColor(string);

  handleDeletePost = (postId, authorId) => {
    const { onDeletePosts } = this.props;
    onDeletePosts(postId, authorId);
  };

  handleUpdatePost = (postId) => {
    const { history } = this.props;
    history.push(`/post/update/${postId}`);
  };

  render() {
    const { posts, classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          {posts.map(post => (
            <PostTemplate
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              authorColor={this.handleColor(post.author_name || 'Anonymous')}
              authorAvatar={this.handleAuthorAvatar(post.author_name || 'Anonymous')}
              authorId={post.author_id}
              authorName={post.author_name}
              categoryId={post.category_id}
              categoryName={post.category_name}
              handleCurrentPost={() => this.handleCurrentPost(post.id)}
              handleAuthorPosts={() => this.handleAuthorPosts(post.author_id)}
              handleExpandClick={() => this.handleExpandClick()}
              handleColor={() => this.handleColor(post.body)}
              handleDeletePost={() => this.handleDeletePost(post.id, post.author_id)}
              handleUpdatePost={() => this.handleUpdatePost(post.id)}
              expanded={expanded}
            />
          ))}
        </List>
      </div>
    );
  }
}

Posts.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    nested: PropTypes.string.isRequired,
  }).isRequired,
  onGetAllPosts: PropTypes.func.isRequired,
  onDeletePosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      author_id: PropTypes.string.isRequired,
      author_name: PropTypes.string.isRequired,
      category_id: PropTypes.string.isRequired,
      category_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mapStateToProps = state => ({
  posts: state.allPosts.posts,
});

const mapDispatchToProps = {
  onGetAllPosts: getAllPosts,
  onGetPostById: getPostById,
  onDeletePosts: deletePosts,
  onUpdatePosts: updatePosts,
};

export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Posts),
  ),
);
