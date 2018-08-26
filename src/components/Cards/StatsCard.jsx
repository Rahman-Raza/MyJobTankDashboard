import React from "react";
import PropTypes from "prop-types";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Card from "material-ui/Card";
import CardContent from "material-ui/Card/CardContent";
import CardHeader from "material-ui/Card/CardHeader";
import CardActions from "material-ui/Card/CardActions";
import Typography from "material-ui/Typography";
import LocationOn from "@material-ui/icons/LocationOn";

import statsCardStyle from "assets/jss/material-dashboard-pro-react/components/statsCardStyle";

function StatsCard({ ...props }) {
  const {
    classes,
    title,
    description,
    statLink,
    small,
    statText,
    statIconColor,
    iconColor
  } = props;

  // it is assumed there is a separator in the title
  // e.g. Twitter - San Francisco
  let [company, location] = title.split("-");
  company = company.trim();
  location = location.trim();

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.cardHeader + " " + classes[iconColor + "CardHeader"],
          avatar: classes.cardAvatar,
          title: classes.cardHeaderTitle
        }}
        avatar={<props.icon className={classes.cardIcon} />}
        title={small}
      />
      <CardContent className={classes.cardContent}>
        <Typography component="p" className={classes.cardCategory}>
          {company}
        </Typography>
        <Typography
          variant="headline"
          component="h2"
          className={classes.cardTitle}
        >
          {description}{" "}
        </Typography>
        <Typography
          className={classes.cardContentSubheading}
          variant="subheading"
          gutterBottom
        >
          <LocationOn style={{ fontSize: 20 }} />
          {location}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.cardStats}>
          <props.statIcon
            className={
              classes.cardStatsIcon +
              " " +
              classes[statIconColor + "CardStatsIcon"]
            }
          />{" "}
          {statLink !== undefined ? (
            <a href={statLink.href} className={classes.cardStatsLink}>
              {statLink.text}
            </a>
          ) : statText !== undefined ? (
            statText
          ) : null}
        </div>
      </CardActions>
    </Card>
  );
}

StatsCard.defaultProps = {
  iconColor: "purple",
  statIconColor: "gray"
};

StatsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func.isRequired,
  iconColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
  title: PropTypes.node,
  description: PropTypes.node,
  small: PropTypes.node,
  statIcon: PropTypes.func.isRequired,
  statIconColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  statLink: PropTypes.object,
  statText: PropTypes.node
};

export default withStyles(statsCardStyle)(StatsCard);
