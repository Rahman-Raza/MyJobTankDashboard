import React from 'react';

import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import orange from '@material-ui/core/colors/orange';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '30px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    textTransform: 'uppercase',
  },
  controlContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  controlIcon: {
    color: orange[600],
    fontSize: '12px',
    margin: '10px',
    border: '1px solid',
    borderColor: orange[600],
    borderRadius: '50%',
    padding: '10px'
  },
};

class Particulars extends React.Component {
  render() {
    return (
      <section style={styles.root}>
        <div style={styles.iconContainer}>
          <Icon>arrow_back_ios</Icon>
        </div>
        <div>
          <Typography style={styles.name} variant="headline" align="center">
            Josh J. Brolin
          </Typography>
          <Typography align="center" gutterBottom>
            machine learning engineer
          </Typography>
          <Typography align="center">555-555-5555</Typography>
          <Typography align="center">kalsdklajsdf@magil.com</Typography>
          <aside style={styles.controlContainer}>
            <Icon style={styles.controlIcon}>star_rate</Icon>
            <Icon style={styles.controlIcon}>thumb_down</Icon>
          </aside>
        </div>
        <div style={styles.iconContainer}>
          <Icon>arrow_forward_ios</Icon>
        </div>
      </section>
    );
  }
}

export default Particulars;
