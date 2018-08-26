import React from 'react';

import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';

const styles = {
  letterhead: {},
  logoContainer: {
    
    height: '100px',
    width: '100px',
    borderRadius: '10%',
    
  },
  logo: {
    height: '75px',
    width: '75px',
    borderRadius: '50%',
    padding: '5px',
  },
  infoContainer: {
    
    marginLeft: '30px',
    paddingLeft: '30px',
    
  },
  headline: {},
  title: {},
};

class LetterHead extends React.Component {
  render() {
    return (
      <section style={styles.letterhead}>
      <Grid >
        <Grid item md={2}>
       
          <img style={styles.logo} src="https://picsum.photos/200/300" />
      
        </Grid>
        <Grid item md={9}>
        <div style={styles.infoContainer}>
          <Typography
            variant="headline"
            gutterBottom
            style={{color: grey[500]}}>
            Company Name
          </Typography>
          <Typography variant="title" gutterBottom>
            Machine Learning Engineer
          </Typography>
          <Typography gutterBottom style={{color: grey[700]}}>
            0-2 years experience
          </Typography>
          <Typography style={{color: grey[700]}}>Bachelor's degree</Typography>
        </div>
        </Grid>
        </Grid>
      </section>
    );
  }
}

export default LetterHead;
