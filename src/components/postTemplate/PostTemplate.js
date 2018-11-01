import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import ForwardIcon from '@material-ui/icons/Forward';
import FolderIcon from '@material-ui/icons/Chat';

const styles = () => ({
  card: {
    maxWidth: 400,
  },
  actions: {
    display: 'flex',
  },
  avatar: {},
});

const PostTemplate = (props) => {
  const {
    classes,
    handleCurrentPost,
    handleAuthorPosts,
    handleColor,
    authorAvatar,
    authorColor,
    authorName,
    categoryName,
    body,
  } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <IconButton>
            <Avatar
              aria-label="Avatar"
              className={classes.avatar}
              onClick={handleAuthorPosts}
              style={{ backgroundColor: authorColor }}
            >
              {authorAvatar}
            </Avatar>
          </IconButton>
)}
        action={(
          <IconButton>
            <ForwardIcon onClick={handleCurrentPost} />
          </IconButton>
)}
        title={authorName}
        subheader={categoryName}
      />

      <CardContent>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} />
          <ExpansionPanelDetails>
            <ListItem>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: handleColor() }}>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={body} />
            </ListItem>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CardContent>
    </Card>
  );
};

PostTemplate.propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    actions: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  authorAvatar: PropTypes.string.isRequired,
  authorColor: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleCurrentPost: PropTypes.func.isRequired,
  handleAuthorPosts: PropTypes.func.isRequired,
  handleColor: PropTypes.func.isRequired,
};

export default withStyles(styles)(PostTemplate);
