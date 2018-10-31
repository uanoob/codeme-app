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
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Chat';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
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
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
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
    const { match } = this.props;
    const userId = match.params.id;
    const { onGetAllPostsByAuthorId } = this.props;
    onGetAllPostsByAuthorId(userId);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleColor = string => stringToColor(string);

  handleAuthorAvatar = str => `${str.charAt(0)}${str.charAt(str.length - 1)}`.toUpperCase();

  render() {
    const { classes, userName, userPosts } = this.props;
    const { expanded } = this.state;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={(
            <Avatar aria-label="Recipe" style={{ backgroundColor: this.handleColor(userName) }}>
              {this.handleAuthorAvatar(userName)}
            </Avatar>
)}
          title={userName}
        />
        <CardContent />
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
                        <Avatar style={{ backgroundColor: this.handleColor(post.body) }}>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={post.title} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
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
    );
  }
}

AuthorPage.propTypes = {
  match: PropTypes.shape.isRequired,
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
  userName: PropTypes.string.isRequired,
  onGetAllPostsByAuthorId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userName: state.posts.posts[0].author_name,
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
