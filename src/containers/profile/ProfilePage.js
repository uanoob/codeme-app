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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Chat';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { getAllPostsByAuthorId, deletePosts } from '../../store/actions/root.action';
import ProfileForm from './ProfileForm';
import Preloader from '../../components/preloader/PreLoader';
import stringToColor from '../../utils/stringToColor';

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

class ProfilePage extends React.Component {
  state = { expanded: false };

  componentDidMount() {
    const { match, onGetAllPostsByAuthorId } = this.props;
    const userId = match.params.id;
    onGetAllPostsByAuthorId(userId);
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

  handlePreloader = loading => (loading ? <Preloader /> : <div>Sometime went wrong :(</div>);

  render() {
    const {
      classes, user, userPosts, loaded, loading,
    } = this.props;
    const { expanded } = this.state;

    return loaded ? (
      <Card className={classes.card}>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" style={{ backgroundColor: this.handleColor(user.login) }}>
              {this.handleAuthorAvatar(user.login)}
            </Avatar>
)}
          title={user.login}
        />
        <CardContent />
        <ProfileForm />
        <CardActions className={classes.actions} disableActionSpacing>
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
                          aria-label="Delete"
                          onClick={() => this.handlerDeletePost(post.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={post.body} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={post.category_name} />
                    </ListItem>
                  </Paper>
                </div>
              ))
            ) : (
              <Typography>No any post here :(</Typography>
            )}
          </CardContent>
        </Collapse>
      </Card>
    ) : (
      this.handlePreloader(loading)
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    actions: PropTypes.string.isRequired,
    expand: PropTypes.string.isRequired,
    expandOpen: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
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
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onGetAllPostsByAuthorId: PropTypes.func.isRequired,
  onDeletePosts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.currentUser.user,
  userPosts: state.allPosts.posts,
  loaded: state.allPosts.loaded,
  loading: state.allPosts.loading,
});

const mapDispatchToProps = {
  onGetAllPostsByAuthorId: getAllPostsByAuthorId,
  onDeletePosts: deletePosts,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProfilePage),
);
