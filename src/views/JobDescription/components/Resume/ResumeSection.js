import React from 'react';

import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import ResumeEntry from './ResumeEntry';

const styles = {
  root: {
    margin: '20px 0',
    width: '100%',
  },
};

class ResumeSection extends React.Component {
  render() {
    return (
      <section style={styles.root}>
        <Grid container spacing={0}>
          <Grid item sm={1}>
            <Icon>{this.props.icon}</Icon>
          </Grid>
          <Grid item sm={11}>
            <Typography variant="title" gutterBottom>
              {this.props.heading}
            </Typography>
            {this.props.children}
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default ResumeSection;
