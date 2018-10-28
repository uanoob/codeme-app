import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PostTemplate from '../../components/postTemplate/PostTemplate';
import { getPosts, getPostById, getCommentsByPostId } from '../../store/actions/root.action';

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
    const { onGetPosts } = this.props;
    onGetPosts();
  }

  handleSelectedPost = (id) => {
    const { onGetPostById, onGetCommentsByPostId, history } = this.props;
    onGetPostById(id);
    onGetCommentsByPostId(id);
    history.push('/post');
  };

  render() {
    const { posts, classes } = this.props;

    return posts.length !== 0 ? (
      <div className={classes.root}>
        <List component="nav">
          {posts.map(post => (
            <PostTemplate
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              authorId={post.author_id}
              authorName={post.author_name}
              categoryId={post.category_id}
              categoryName={post.category_name}
              onClick={() => this.handleSelectedPost(post.id)}
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
  onGetPosts: PropTypes.func.isRequired,
  onGetPostById: PropTypes.func.isRequired,
  onGetCommentsByPostId: PropTypes.func.isRequired,
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
  onGetPosts: getPosts,
  onGetPostById: getPostById,
  onGetCommentsByPostId: getCommentsByPostId,
};

export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Posts),
  ),
);
