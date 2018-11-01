import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Chat';
import Forward from '@material-ui/icons/Forward';
import Paper from '@material-ui/core/Paper';
import { getAllPostsByAuthorId, deletePosts } from '../../store/actions/root.action';
import Preloader from '../../components/preloader/PreLoader';
import stringToColor from '../../utils/stringToColor';
import CreatePost from '../post/CreatePost';

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 'auto',
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {},
});

class AuthorPage extends React.Component {
  state = {};

  componentDidMount() {
    const { match, onGetAllPostsByAuthorId } = this.props;
    onGetAllPostsByAuthorId(match.params.id);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleColor = string => stringToColor(string);

  handleAuthorAvatar = str => `${str.charAt(0)}${str.charAt(str.length - 1)}`.toUpperCase();

  handlerDeletePost = (postId) => {
    const { onDeletePosts } = this.props;
    onDeletePosts(postId);
  };

  handleCurrentPost = (postId) => {
    const { history } = this.props;
    history.push(`/post/${postId}`);
  };

  handlePostLength = (postBody) => {
    const length = 70;
    return postBody.length > length ? `${postBody.substring(0, length - 3)}...` : postBody;
  };

  handlePreloader = loading => (loading ? <Preloader /> : <div>Sometime went wrong :(</div>);

  handleShowCreatePost = (currentUserId, currentAuthorId) => (currentUserId === currentAuthorId ? <CreatePost /> : null);

  render() {
    const {
      classes, match, userPosts, currentUserId,
    } = this.props;
    const currentAuthorId = match.params.id;

    return (
      <Card className={classes.card}>
        {this.handleShowCreatePost(currentUserId, currentAuthorId)}
        {userPosts.length !== 0 ? (
          userPosts.map(post => (
            <div key={post.id}>
              <Paper className={classes.paper}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: this.handleColor(post.title) }}>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={post.title} />
                  <ListItemSecondaryAction>
                    <IconButton
                      aria-label="Forward"
                      onClick={() => this.handleCurrentPost(post.id)}
                    >
                      <Forward />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText primary={this.handlePostLength(post.body)} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={post.category_name} />
                </ListItem>
              </Paper>
            </div>
          ))
        ) : (
          <Card>
            <Typography>No any post here :(</Typography>
          </Card>
        )}
      </Card>
    );
  }
}

AuthorPage.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    actions: PropTypes.string.isRequired,
    expand: PropTypes.string.isRequired,
    expandOpen: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  userPosts: PropTypes.arrayOf(
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
  onGetAllPostsByAuthorId: PropTypes.func.isRequired,
  onDeletePosts: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentUserId: state.currentUser.user.id,
  userPosts: state.allPosts.posts,
});

const mapDispatchToProps = {
  onGetAllPostsByAuthorId: getAllPostsByAuthorId,
  onDeletePosts: deletePosts,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthorPage),
);
