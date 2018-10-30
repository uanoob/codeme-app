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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getAllPostsByAuthorId } from '../../store/actions/root.action';
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

class AuthorPage extends React.Component {
  state = { expanded: false };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const { userId, onGetAllPostsByAuthorId } = this.props;
    onGetAllPostsByAuthorId(userId);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleColor = string => stringToColor(string);

  handleAuthorAvatar = str => `${str.charAt(0)}${str.charAt(str.length - 1)}`.toUpperCase();

  render() {
    const {
      classes, userName, userPosts, userId, authorId,
    } = this.props;
    const { expanded } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={(
            <Avatar
              aria-label="Recipe"
              style={{ backgroundColor: this.handleColor(userPosts[0].author_name) }}
            >
              {this.handleAuthorAvatar(userPosts[0].author_name)}
            </Avatar>
)}
          action={(
            <IconButton>
              <MoreVertIcon />
            </IconButton>
)}
          title={userName}
        />
        <CardContent />
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
            {userPosts.length !== 0 ? (
              userPosts.map(post => (
                <div key={post.id}>
                  <Typography>{post.author_name}</Typography>
                  <Typography>{post.title}</Typography>
                  <Typography>{post.body}</Typography>
                  <Typography>{post.category_name}</Typography>
                </div>
              ))
            ) : (
              <Typography>No any post here :(</Typography>
            )}
          </CardContent>
        </Collapse>
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
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onGetAllPostsByAuthorId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.auth.user.id,
  authorId: state.author.authorId,
  userName: state.auth.user.login,
  userPosts: state.posts.posts,
});

const mapDispatchToProps = {
  onGetAllPostsByAuthorId: getAllPostsByAuthorId,
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthorPage),
);
