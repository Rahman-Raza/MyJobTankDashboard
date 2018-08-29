import React from "react";

import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";

import CloudUpload from "@material-ui/icons/CloudUpload";
import LocationOn from "@material-ui/icons/LocationOn";

import RegularCard from "components/Cards/RegularCard.jsx";

const styles = {
  letterhead: {},
  logoContainer: {
    height: "100px",
    width: "100px",
    borderRadius: "10%"
  },
  logo: {
    height: "200px",
    width: "200px",
    padding: "5px"
  },
  infoContainer: {
    marginLeft: "30px",
    padding: "30px 0 0 30px"
  },
  subHeadingStyle: {
    color: "#088390",
    position: "absolute",
    right: "20px",
    bottom: "5px"
  },
  subHeadingIcon: {
    margin: "0 5px"
  },
  subHeadingText: {
    fontSize: "24px",
    position: "relative",
    bottom: "4px"
  },
  headline: {},
  title: {}
};

const SubHeading = (
  <p style={styles.subHeadingStyle}>
    <CloudUpload style={styles.subHeadingIcon} />{" "}
    <span style={styles.subHeadingText}>Upload A Resume</span>
  </p>
);

class LetterHead extends React.Component {
  render() {
    return (
      <section style={styles.letterhead}>
        <RegularCard cardTitle="Job Description" content={SubHeading} />
        <Grid container>
          <Grid item md={2}>
            <img style={styles.logo} src="https://picsum.photos/200/300" />
          </Grid>
          <Grid item md={9}>
            <div style={styles.infoContainer}>
              <Typography
                variant="headline"
                align="right"
                style={{ color: grey[700] }}
              >
                Tech
              </Typography>
              <Typography
                variant="title"
                gutterBottom
                style={{ color: grey[900] }}
              >
                Company Name
              </Typography>
              <Typography variant="display1" gutterBottom>
                Machine Learning Engineer
              </Typography>
              <Typography
                variant="subheading"
                gutterBottom
                style={{ color: grey[700] }}
              >
                <LocationOn style={{ position: "relative", top: "5px" }} />
                <span>San Francisco California</span>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default LetterHead;
