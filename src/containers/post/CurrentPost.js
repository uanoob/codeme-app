import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Comment from '../comment/Comment';
import Preloader from '../../components/preloader/PreLoader';
import { deleteComment, getPostById, getCommentsByPostId } from '../../store/actions/root.action';

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
  avatar: {
    backgroundColor: red[500],
  },
});

class CurrentPost extends React.Component {
  state = { expanded: false };

  componentDidMount() {
    const { match, onGetPostById, onGetCommentsByPostId } = this.props;
    const postId = match.params.id;
    onGetPostById(postId);
    onGetCommentsByPostId(postId);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleDeleteComment = (commentId) => {
    const { match, onDeleteComment } = this.props;
    const postId = match.params.id;
    onDeleteComment(postId, commentId);
  };

  handlePreloader = loading => (loading ? <Preloader /> : <div>Sometime went wrong :(</div>);

  render() {
    const {
      loaded, loading, classes, post, comments,
    } = this.props;
    const { expanded } = this.state;

    return loaded ? (
      <Card className={classes.card}>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
)}
          action={(
            <IconButton>
              <MoreVertIcon />
            </IconButton>
)}
          title={post.author_name}
          subheader={post.title}
        />
        <CardContent>
          <Typography component="p">{post.body}</Typography>
          <Typography component="p">{post.category_name}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {comments.map(comment => (
              <div key={comment.id}>
                <Typography paragraph>{comment.author_name}</Typography>
                <Typography paragraph>{comment.body}</Typography>
                <IconButton aria-label="Delete">
                  <DeleteIcon onClick={() => this.handleDeleteComment(comment.id)} />
                </IconButton>
              </div>
            ))}
          </CardContent>
        </Collapse>
        <Comment />
      </Card>
    ) : this.handlePreloader(loading);
  }
}

CurrentPost.propTypes = {
  // match: PropTypes.shape({
  //   isExact: PropTypes.bool.isRequired,
  //   params: {
  //     id: PropTypes.string.isRequired,
  //     _proto_: PropTypes.shape({ valueOf: PropTypes.func.isRequired }),
  //   },
  //   path: PropTypes.string.isRequired,
  //   url: PropTypes.string.isRequired,
  // }).isRequired,
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    actions: PropTypes.string.isRequired,
    expand: PropTypes.string.isRequired,
    expandOpen: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author_id: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      author_id: PropTypes.string.isRequired,
      author_name: PropTypes.string.isRequired,
      post_id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onGetPostById: PropTypes.func.isRequired,
  onGetCommentsByPostId: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.currentPost.loading,
  loaded: state.currentPost.loaded,
  post: state.currentPost.post,
  comments: state.comments.comments,
});
const mapDispatchToProps = {
  onGetPostById: getPostById,
  onDeleteComment: deleteComment,
  onGetCommentsByPostId: getCommentsByPostId,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CurrentPost),
);
