import Add from "@material-ui/icons/Add";
import AddLocation from "@material-ui/icons/AddLocation";
import Section from "components/Section/Section.jsx";
import Background from "assets/img/dashboard-bg.png";
import axios from "axios";
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
import Pagination from "react-js-pagination";

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
    paginator: [
    {
      limit: 10,
      next: "?limit=10&offset=0",
      offset: 0,
      total_count: 100,
      previous: null,

    }
    ],
    activePage: 1,
    value: 0,
    alert: null,
    show: false,
    open: false,
    newOpenings: [
      {
        CompanyName: "Twitter",
        JobPosition: "Front End Software Engineer",
        Location: "San Francisco",
        icon: FaTwitterSquare
      },
      {
        CompanyName: "Tumblr",
        JobPosition: "Android Software Engineer",
        Location: "Santa Clara",
        icon: FaTumblrSquare
      },
      {
        CompanyName: "Twitch",
        JobPosition: "Backend Software Engineer",
        Location: "New York",
        icon: FaTwitch
      },
      {
        CompanyName: "Snapchat",
        JobPosition: "DevOps Software Engineer",
        Location: "Santa Monica",
        icon: FaSnapchatSquare
      },
      {
        CompanyName: "Google",
        JobPosition: "Machine Learning Engineer",
        Location: "San Francisco",
        icon: FaGooglePlusSquare
      },
      {
        CompanyName: "Apple",
        JobPosition: "IOS Software Engineer",
        Location: "Cupertino",
        icon: FaApple
      },
      {
        CompanyName: "Facebook",
        JobPosition: "Backend Software Engineer",
        Location: "Menlo Park",
        icon: FaFacebookSquare
      },
      {
        CompanyName: "LinkedIn",
        JobPosition: "Machine Learning Engineer",
        Location: "San Francisco",
        icon: FaLinkedinSquare
      }
    ],
    closed: [],
    openings: [
      {
        CompanyName: "Google",
        JobPosition: "Machine Learning Engineer",
        Location: "San Francisco",
        icon: FaGooglePlusSquare
      },
      {
        CompanyName: "Apple",
        JobPosition: "IOS Software Engineer",
        Location: "Cupertino",
        icon: FaApple
      },
      {
        CompanyName: "Facebook",
        JobPosition: "Backend Software Engineer",
        Location: "Menlo Park",
        icon: FaFacebookSquare
      },
      {
        CompanyName: "LinkedIn",
        JobPosition: "Machine Learning Engineer",
        Location: "San Francisco",
        icon: FaLinkedinSquare
      }
    ]
  };

  reloadPageData = (url) =>{
var self = this;
    axios.get(url)
      
      .then(function (response) {
        console.log("heres the response from axios pagination call", response);
        
        if(response["status"]  == 200){
          self.handlePagination(response.data["Data"]["paginator"]);
          self.handleJobPostingsData(response.data["Data"]["items"]);

        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  //

  handlePageChange = (pageNumber) =>  {
    console.log(`active page is ${pageNumber}`);

    var url = '';
    
    if(pageNumber - this.state.activePage == 1){
       url = 'http://18.206.187.45:8080/jobpostingspagination' + this.state.paginator[0]["next"]
    }
    else if (pageNumber - this.state.activePage == -1){
       url = 'http://18.206.187.45:8080/jobpostingspagination' + this.state.paginator[0]["previous"]
    }

    else {
      url = '';
    }

    this.reloadPageData(url);

    this.setState({activePage: pageNumber});
  }



  handlePagination = (response) =>{

    var page = this.state.paginator;

    page[0] = response;
   this.setState({paginator: page});
  }
  handleJobPostingsData = (response) =>{
    console.log("checking job postings items", response);
    this.setState({newOpenings: response});
  }
  componentDidMount = () =>{
    var self=this;
    axios.get('http://18.206.187.45:8080/jobpostingspagination?limit=10&offset=0')
      
      .then(function (response) {
        console.log("heres the response from axios pagination call", response);
        
        if(response["status"]  == 200){
          self.handlePagination(response.data["Data"]["paginator"]);
          self.handleJobPostingsData(response.data["Data"]["items"]);

        }
      })
      .catch(function (error) {
        console.log(error);
      });


  }


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
                <div>
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
                                    icon={FaGooglePlusSquare}
                                    iconColor="orange"
                                    title={
                                      opening.CompanyName + " - " + opening.Location
                                    }
                                    description={opening.JobPosition}
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
                                    icon={FaGooglePlusSquare}
                                    iconColor="blue"
                                    title={
                                      opening.CompanyName + " - " + opening.Location
                                    }
                                    description={opening.JobPosition}
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
                                    icon={FaGooglePlusSquare}
                                    iconColor="red"
                                    title={
                                      opening.CompanyName + " - " + opening.Location
                                    }
                                    description={opening.JobPosition}
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


            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.paginator[0]['total_count']}
          pageRangeDisplayed={2}
          onChange={this.handlePageChange}
        />
        </div>
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
