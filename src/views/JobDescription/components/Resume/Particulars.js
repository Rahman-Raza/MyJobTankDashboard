import React from "react";

import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import orange from "@material-ui/core/colors/orange";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    padding: "30px"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    color: "#088390",
    fontFamily: "Roboto",
    margin: "10px 0",
    textTransform: "uppercase"
  },
  details: {
    color: "#088390",
    fontFamily: "Roboto",
    margin: "10px 0"
  },
  controlContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px"
  },
  controlIconContainer: {
    color: "#088390",
    fontSize: "30px",
    margin: "20px 10px 10px",
    border: "1px solid",
    borderColor: "#088390",
    borderRadius: "50%",
    padding: "10px"
  }
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
          <Typography style={styles.details} align="center" gutterBottom>
            555-555-5555
          </Typography>
          <Typography style={styles.details} align="center">
            kalsdklajsdf@magil.com
          </Typography>

          <aside style={styles.controlContainer}>
            <article style={styles.controlIconContainer}>
              <Icon>star_rate</Icon>
            </article>
            <article style={styles.controlIconContainer}>
              <Icon>thumb_down</Icon>
            </article>
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
