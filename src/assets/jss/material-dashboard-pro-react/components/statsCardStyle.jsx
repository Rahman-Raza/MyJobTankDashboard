// ##############################
// // // StatsCard styles
// #############################

import {
  card,
  cardHeader,
  defaultFont,
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  cardActions,
  grayColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  primaryColor,
  roseColor
} from "assets/jss/material-dashboard-pro-react.jsx";

const StatsCardBackground = "#088390";

const statsCardStyle = {
  card: {
    ...card,
    backgroundColor: StatsCardBackground,
    minHeight: "300px"
  },
  cardHeader: {
    ...cardHeader,
    textAlign: "center",
    position: "relative",
    top: "20px",
    width: "86px"
  },
  color: "#FFF",
  cardHeaderTitle: {
    color: "#FFF",
    fontSize: "22px",
    fontWeight: "400",
    position: "absolute",
    right: "-195px",
    top: "20px"
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  cardContent: {
    padding: "35px 20px 20px"
  },
  cardContentSubheading: {
    color: "#FFF"
  },
  cardIcon: {
    width: "40px",
    height: "36px",
    fill: "#fff"
  },
  cardAvatar: {
    margin: "10px 8px 10px",
    display: "flex"
  },
  cardCategory: {
    ...defaultFont,
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "0",
    color: "#FFF",
    margin: "0 0 10px"
  },
  cardTitle: {
    ...defaultFont,
    color: "#FFF",
    fontSize: "23px",
    margin: "10px 0 15px"
  },
  cardTitleSmall: {
    color: "#FFF",
    fontWeight: "400",
    lineHeight: "1"
  },
  cardActions: {
    ...cardActions,
    backgroundColor: "#FAFAFA",
    height: '50px',
    margin: 0,
    padding: "0 15px",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%"
  },
  cardStats: {
    lineHeight: "22px",
    color: "#666",
    fontSize: "14px",
    display: "inline-block",
    margin: "0!important",
    paddingLeft: "20px"
  },
  cardStatsIcon: {
    position: "relative",
    top: "4px",
    width: "16px",
    height: "16px"
  },
  warningCardStatsIcon: {
    color: warningColor
  },
  primaryCardStatsIcon: {
    color: primaryColor
  },
  dangerCardStatsIcon: {
    color: dangerColor
  },
  successCardStatsIcon: {
    color: successColor
  },
  infoCardStatsIcon: {
    color: infoColor
  },
  roseCardStatsIcon: {
    color: roseColor
  },
  grayCardStatsIcon: {
    color: grayColor
  },
  cardStatsLink: {
    color: primaryColor,
    textDecoration: "none",
    ...defaultFont
  }
};

export default statsCardStyle;
