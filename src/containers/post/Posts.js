import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PostTemplate from '../../components/postTemplate/PostTemplate';
import {
  getAllPosts,
  getPostById,
  getCommentsByPostId,
  getAllPostsByAuthorId,
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
  state = {};

  componentDidMount() {
    const { onGetAllPosts } = this.props;
    onGetAllPosts();
  }

  handleColor = string => stringToColor(string);

  handleAuthorAvatar = str => `${str.charAt(0)}${str.charAt(str.length - 1)}`.toUpperCase();

  handleSelectedPost = (postId) => {
    const { onGetPostById, onGetCommentsByPostId, history } = this.props;
    onGetPostById(postId);
    onGetCommentsByPostId(postId);
    history.push('/post');
  };

  handleAuthorPosts = (authorId) => {
    const { history, onGetAllPostsByAuthorId } = this.props;
    onGetAllPostsByAuthorId(authorId);
    history.push(`/author/${authorId}`);
  };

  handleColor = string => stringToColor(string);

  handleDeletePost = (postId, authorId) => {
    const { onDeletePosts } = this.props;
    onDeletePosts(postId, authorId);
  };

  handleUpdatePost = (postId) => {
    console.log(postId);
  };

  render() {
    const { posts, classes } = this.props;
    const { expanded } = this.state;

    return posts.length !== 0 ? (
      <div className={classes.root}>
        <List component="nav">
          {posts.map(post => (
            <PostTemplate
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              authorColor={this.handleColor(post.author_name)}
              authorAvatar={this.handleAuthorAvatar(post.author_name)}
              authorId={post.author_id}
              authorName={post.author_name}
              categoryId={post.category_id}
              categoryName={post.category_name}
              handleSelectedPost={() => this.handleSelectedPost(post.id)}
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
    ) : (
      <div className={classes.root}>
        <List component="nav">
          <ListItem>
            <ListItemText primary="No post here  :(" />
          </ListItem>
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
  onGetPostById: PropTypes.func.isRequired,
  onGetCommentsByPostId: PropTypes.func.isRequired,
  onGetAllPostsByAuthorId: PropTypes.func.isRequired,
  onDeletePosts: PropTypes.func.isRequired,
  // onUpdatePosts: PropTypes.func.isRequired,
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
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = {
  onGetAllPosts: getAllPosts,
  onGetPostById: getPostById,
  onGetCommentsByPostId: getCommentsByPostId,
  onGetAllPostsByAuthorId: getAllPostsByAuthorId,
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
