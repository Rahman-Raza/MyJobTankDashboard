import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import blue from "@material-ui/core/colors/blue";
import ArrowBack from "@material-ui/icons/ArrowBack";

import "./Nav.scss";

const styles = {
  nav: {
    margin: "10px 0"
  },
  a: {
    color: "#088390",
    fontSize: "24px",
    textDecoration: "none"
  },
  iconStyle: {
    fontSize: 30,
    position: "relative",
    top: "5px"
  }
};

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav" style={styles.nav}>
        <Grid container>
          <Grid md={8} item justify="flex-start">
            <a style={styles.a} href="/dashboard">
              <ArrowBack style={styles.iconStyle} /> Job Positions
            </a>
          </Grid>
          <Grid item justify="space-around" />
        </Grid>
      </nav>
    );
  }
}

export default Nav;
