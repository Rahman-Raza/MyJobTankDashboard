import React from 'react';

import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const styles = {
  root: {
    margin: '20px 0',
  },
  company: {
    color: grey[600],
  },
  role: {
    fontWeight: 700,
  },
};

class ResumeEntry extends React.Component {
  render() {
    return (
      <article style={styles.root}>
        <Typography>Oct 2015 to Date</Typography>

        <Typography style={styles.company}>
          Boeing Company, Everett, WA
        </Typography>
        <Typography style={styles.role}>
          Sr. Business Operations Manager New Airplane Development for the final
          787 Market Launch
        </Typography>
        <Typography>
          Manage and Support the Services executive leadership as the Sr.
          Business Operations Manager leading projects and efforts requiring
          collaboration across the 787 Program Life Cycle Product Engineering
          Development Teams and Commercial Aviation ( words limit: 680 )
        </Typography>
      </article>
    );
  }
}

export default ResumeEntry;
