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
import Comment from '../comment/Comment';

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 'auto',
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, post, comments } = this.props;
    const { expanded } = this.state;

    return post ? (
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
              </div>
            ))}
          </CardContent>
        </Collapse>
        <Comment />
      </Card>
    ) : null;
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.posts.post,
  comments: state.comments.comments,
});
const mapDispatchToProps = {};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RecipeReviewCard),
);
