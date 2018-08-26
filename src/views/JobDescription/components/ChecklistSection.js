import React, {Component} from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {},
  listItem: {
    display: 'inline-block',
    width: '33%',
  },
  listItemText: {
    position: 'relative',
    top: '-26px',
    left: '20px',
  },
};

class ChecklistSection extends React.Component {
  render() {
    return (
      <section style={styles.root}>
        <Typography variant="subheading">{this.props.subheading}</Typography>

        {this.props.labels.map((current, index) => {
          return (
            <ListItem key={index} style={styles.listItem}>
              <ListItemIcon>
                <DoneIcon color="error" />
              </ListItemIcon>
              <ListItemText style={styles.listItemText} primary={current} />
            </ListItem>
          );
        })}
      </section>
    );
  }
}

export default ChecklistSection;
