import React, {Component} from 'react';

import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    margin: '20px 0',
  },
  chip: {
    margin: '5px',
    fontSize: '14px',
    padding: '0 5px',
    backgroundColor: 'rgba(227,109,1,.1)',
  },
};

class ChipSection extends React.Component {
  render() {
    return (
      <section style={styles.root}>
        <Typography variant="subheading" gutterBottom>
          {this.props.subheading}
        </Typography>
        {this.props.labels.map(current => {
          current = current.trim();
          return <Chip style={styles.chip} key={current} label={current} />;
        })}
      </section>
    );
  }
}

export default ChipSection;
