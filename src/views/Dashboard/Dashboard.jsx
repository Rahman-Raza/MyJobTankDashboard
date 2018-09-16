import Add from "@material-ui/icons/Add";
import AddLocation from "@material-ui/icons/AddLocation";
import Section from "components/Section/Section.jsx";
import Background from "assets/img/dashboard-bg.png";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import AddJob from "components/AddJob/AddJob.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import StatsCard from "components/Cards/StatsCard.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import FaApple from "react-icons/lib/fa/apple";
import FaFacebookSquare from "react-icons/lib/fa/facebook-square";
import FaGooglePlusSquare from "react-icons/lib/fa/google-plus-square";
import FaLinkedinSquare from "react-icons/lib/fa/linkedin-square";
import FaSnapchatSquare from "react-icons/lib/fa/snapchat-square";
import FaTumblrSquare from "react-icons/lib/fa/tumblr-square";
import FaTwitch from "react-icons/lib/fa/twitch";
import FaTwitterSquare from "react-icons/lib/fa/twitter-square";

// local components
import LocalSearch from "./Search.js";

const us_flag = require("assets/img/flags/US.png");
const de_flag = require("assets/img/flags/DE.png");
const au_flag = require("assets/img/flags/AU.png");
const gb_flag = require("assets/img/flags/GB.png");
const ro_flag = require("assets/img/flags/RO.png");
const br_flag = require("assets/img/flags/BR.png");

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

class Dashboard extends React.Component {
  state = {
    value: 0,
    alert: null,
    show: false,
    open: false,
    newOpenings: [
      {
        company: "Twitter",
        role: "Front End Software Engineer",
        city: "San Francisco",
        icon: FaTwitterSquare
      },
      {
        company: "Tumblr",
        role: "Android Software Engineer",
        city: "Santa Clara",
        icon: FaTumblrSquare
      },
      {
        company: "Twitch",
        role: "Backend Software Engineer",
        city: "New York",
        icon: FaTwitch
      },
      {
        company: "Snapchat",
        role: "DevOps Software Engineer",
        city: "Santa Monica",
        icon: FaSnapchatSquare
      },
      {
        company: "Google",
        role: "Machine Learning Engineer",
        city: "San Francisco",
        icon: FaGooglePlusSquare
      },
      {
        company: "Apple",
        role: "IOS Software Engineer",
        city: "Cupertino",
        icon: FaApple
      },
      {
        company: "Facebook",
        role: "Backend Software Engineer",
        city: "Menlo Park",
        icon: FaFacebookSquare
      },
      {
        company: "LinkedIn",
        role: "Machine Learning Engineer",
        city: "San Francisco",
        icon: FaLinkedinSquare
      }
    ],
    closed: [],
    openings: [
      {
        company: "Google",
        role: "Machine Learning Engineer",
        city: "San Francisco",
        icon: FaGooglePlusSquare
      },
      {
        company: "Apple",
        role: "IOS Software Engineer",
        city: "Cupertino",
        icon: FaApple
      },
      {
        company: "Facebook",
        role: "Backend Software Engineer",
        city: "Menlo Park",
        icon: FaFacebookSquare
      },
      {
        company: "LinkedIn",
        role: "Machine Learning Engineer",
        city: "San Francisco",
        icon: FaLinkedinSquare
      }
    ]
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  inputAlert = () => {
    console.log("checking this.props.classes", this.props.classes);
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-250px" }}
          title="Input something"
          onConfirm={e => this.inputConfirmAlert(e)}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.info
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
        >
          <AddJob />
        </SweetAlert>
      )
    });
  };
  inputConfirmAlert = e => {
    this.setState({ alert: e });
    setTimeout(this.inputConfirmAlertNext, 200);
  };
  inputConfirmAlertNext = () => {
    const inputValue = this.state.alert;
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.info
          }
          title={
            <p>
              You entered: <b>{inputValue}</b>
            </p>
          }
        />
      )
    });
  };

  hideAlert = () => {
    this.setState({
      show: false
    });
  };

  openJobDescription = () => {
    console.log("opened job");
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { fullScreen } = this.props;
    return (
      <div>
        <AddJob open={this.state.open} onClose={this.handleClose} />

        <Section
          containerSize={0}
          style={{
            background: "url(" + Background + ") repeat-x",
            backgroundSize: "fixed",
            paddingBottom: "5%"
          }}
        >
          <GridContainer dashGrid={true}>
            <ItemGrid xs={1} sm={1} />

            <ItemGrid xs={10} sm={10} style={{ marginTop: "50px" }}>
              <RegularCard
                cardTitle={<span>Job Positions</span>}
                cardSubtitle={<LocalSearch />}
                subtitleAlign="right"
                content={
                  <NavPills
                    color="warning"
                    tabs={[
                      {
                        tabButton: "New Positions",
                        tabContent: (
                          <div>
                            <GridContainer>
                              {this.state.newOpenings.map((opening, index) => (
                                <ItemGrid xs={12} sm={6} md={3} key={index}>
                                  <StatsCard
                                    onClick={() => {
                                      this.openJobDescription();
                                    }}
                                    icon={opening.icon}
                                    iconColor="orange"
                                    title={
                                      opening.company + " - " + opening.city
                                    }
                                    description={opening.role}
                                    small="Tech"
                                    statIcon={Email}
                                    statText="Updated 2 Min ago..."
                                  />
                                </ItemGrid>
                              ))}
                            </GridContainer>
                          </div>
                        )
                      },
                      {
                        tabButton: "Open Positions",
                        tabContent: (
                          <div>
                            <GridContainer>
                              {this.state.openings.map((opening, index) => (
                                <ItemGrid xs={12} sm={6} md={3} key={index}>
                                  <StatsCard
                                    onClick={() => {
                                      this.openJobDescription();
                                    }}
                                    icon={opening.icon}
                                    iconColor="blue"
                                    title={
                                      opening.company + " - " + opening.city
                                    }
                                    description={opening.role}
                                    small="Tech"
                                    statIcon={Email}
                                    statText="Updated 2 Min ago..."
                                  />
                                </ItemGrid>
                              ))}
                            </GridContainer>
                          </div>
                        )
                      },
                      {
                        tabButton: "Closed Positions",
                        tabContent: (
                          <div>
                            <GridContainer>
                              {this.state.newOpenings.map((opening, index) => (
                                <ItemGrid xs={12} sm={6} md={3} key={index}>
                                  <StatsCard
                                    onClick={() => {
                                      this.openJobDescription();
                                    }}
                                    icon={opening.icon}
                                    iconColor="red"
                                    title={
                                      opening.company + " - " + opening.city
                                    }
                                    description={opening.role}
                                    small="Tech"
                                    statIcon={Email}
                                    statText="Updated 2 Min ago..."
                                  />
                                </ItemGrid>
                              ))}
                            </GridContainer>
                          </div>
                        )
                      }
                    ]}
                  />
                }
              />
            </ItemGrid>
          </GridContainer>
        </Section>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
