import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

import CircularProgressbar from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const styles = {
  card: {
    boxShadow: "0 0 16px 0 #eee",
    cursor: "pointer",
    marginBottom: "15px",
    backgroundColor: "linear-gradient(60deg, #ffa726, #fb8c00)"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 20px"
  },
  percentageContainer: {
    alignItems: "center",
    color: "#088390",
    display: "flex",
    fontFamily: "Helvetica",
    fontSize: "44px",
    fontWeight: 700,
    justifyContent: "flex-start",
    padding: "10px",
    width: "30%"
  },
  detailContainer: {
    color: "#088390",
    display: "inline-block",
    fontFamily: "Helvetica",
    fontSize: "14px",
    width: "70%",
    padding: "21px"
  },
  icon: {
    position: "relative",
    top: "5px",
    margin: "0 5px"
  },
  name: {
    color: "#088390",
    textTransform: "uppercase",
    margin: "0 0 0 5px"
  }
};

class CandidateCard extends React.Component {
  render() {
    return (
      <Card
        onClick={() => {
          this.props.resumeToggler();
        }}
        style={styles.card}
        key={this.props.key}
      >
        <CardContent style={styles.cardContent}>
          <section style={styles.percentageContainer}>
            <CircularProgressbar
              percentage={this.props.percentage}
              text={`${this.props.percentage}%`}
              styles={{
                path: {
                  stroke: "#088390"
                },
                text: {
                  fill: "#088390"
                }
              }}
            />
          </section>

          <section style={styles.detailContainer}>
            <Typography style={styles.name} variant="button">
              Nicolas Germann
            </Typography>
            <p style={{ margin: 0 }}>
              <Icon style={styles.icon}>phone</Icon>
              <span>555-555-555</span>
            </p>
            <p style={{ margin: 0 }}>
              <Icon style={styles.icon}>email</Icon>
              <span>niclal.lkasdfj@gmail.com</span>
            </p>
          </section>
        </CardContent>
      </Card>
    );
  }
}

export default CandidateCard;
