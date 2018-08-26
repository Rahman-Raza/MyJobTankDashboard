import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import grey from '@material-ui/core/colors/grey';

import Particulars from './Particulars';
import ResumeSection from './ResumeSection';
import ResumeEntry from './ResumeEntry';

const styles = {
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    background: '#f6f8f6',
    minHeight: '100%',
    width: '100%',
    zIndex: '10000',
  },
  closeIcon: {
    color: grey[500],
    cursor: 'pointer',
    position: 'absolute',
    right: '50px',
    top: '30px',
  },
  container: {
    margin: '0 auto',
    padding: '50px 0 0',
    width: '63%',
  },
  spaceAround: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: '24px',
    margin: '0',
  },
  download: {
    padding: '10px',
  },
  chip: {
    borderRadius: '20px',
    margin: '5px',
    fontSize: '14px',
    padding: '3px 5px',
  },
};

class Resume extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <Icon style={styles.closeIcon} onClick={this.props.closeHandler}>
          close
        </Icon>
        <div style={styles.container}>
          <div style={styles.spaceAround}>
            <h3 style={styles.title}>Resume</h3>
            <span style={styles.download}>
              Download PDF
              <Icon color="error">save_alt</Icon>
            </span>
          </div>
          <Divider />

          <Particulars />
          <Divider />

          <Grid container spacing={24} style={{marginTop: '24px'}}>
            <Grid item sm={8}>
              <ResumeSection icon="watch_later" heading="Experience">
                <ResumeEntry />
                <ResumeEntry />
              </ResumeSection>
            </Grid>
            <Grid item sm={4}>
              <ResumeSection icon="watch_later" heading="Summary">
                <Typography>
                  Technology lover with more then 15 years in variety of
                  positions, technical through IT architect to leadership,
                  Identify business requirement, examine technology innovation
                  and lead groups to deliver new and complex high quality
                  solutions, utilize in-depth knowledge of leading-edge products
                  and technology in conjunction with industry and business needs
                </Typography>
              </ResumeSection>

              <ResumeSection icon="wb_incandescent" heading="Skill">
                <Chip style={styles.chip} label="Python" />
                <Chip style={styles.chip} label="C++" />
                <Chip style={styles.chip} label="Java" />
              </ResumeSection>

              <ResumeSection icon="school" heading="Education">
                <Typography>
                  Technology lover with more then 15 years in variety of
                  positions, technical through IT architect to leadership,
                  Identify business requirement, examine technology innovation
                  and lead groups to deliver new and complex high quality
                  solutions, utilize in-depth knowledge of leading-edge products
                  and technology in conjunction with industry and business needs
                </Typography>
              </ResumeSection>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Resume;
