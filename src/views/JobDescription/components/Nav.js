 import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';
import blue from '@material-ui/core/colors/blue';

import './Nav.scss';

const styles = {
  nav: {
    margin: '10px 0',
  },
  a: {
    color: blue['500'],
    fontSize: '24px',
    textDecoration: 'none',
  },
};

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav" style={styles.nav}>
        <Grid container >
          <Grid md={8} item justify="flex-start">
            <a style={styles.a} href="/dashboard">
              &lt; Positions
            </a>
          </Grid>
          <Grid item justify="space-around">
            
          </Grid>
        </Grid>
      </nav>
    );
  }
}

export default Nav;
