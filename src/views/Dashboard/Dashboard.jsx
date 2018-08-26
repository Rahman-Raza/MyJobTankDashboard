import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Tooltip from "material-ui/Tooltip";

// @material-ui/icons
import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import StatsCard from "components/Cards/StatsCard.jsx";
import ChartCard from "components/Cards/ChartCard.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import ImagePriceCard from "components/Cards/ImagePriceCard.jsx";
import Favorite from "@material-ui/icons/Favorite";
import Add from "@material-ui/icons/Add";
import IconButton from "components/CustomButtons/IconButton.jsx";
import RegularCard from "components/Cards/RegularCard.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import Info from "@material-ui/icons/Info";
import LocationOn from "@material-ui/icons/LocationOn";
import Gavel from "@material-ui/icons/Gavel";
import FiberNew from "@material-ui/icons/FiberNew";
import AddAlert from "@material-ui/icons/AddAlert";
import Cancel from "@material-ui/icons/Cancel";
import Input from "@material-ui/icons/Input";
import AddJob from "components/AddJob/AddJob.jsx"


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";

import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaApple from 'react-icons/lib/fa/apple';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaTumblrSquare from 'react-icons/lib/fa/tumblr-square';
import FaTwitch from 'react-icons/lib/fa/twitch';
import FaSnapchatSquare from 'react-icons/lib/fa/snapchat-square';
import SweetAlert from "react-bootstrap-sweetalert";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// @material-ui/icons
import Map from "@material-ui/icons/Map";
import AddLocation from "@material-ui/icons/AddLocation";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




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
    newOpenings:[{company: "Twitter", role: "Front End Software Engineer", city: "San Francisco", icon:FaTwitterSquare}, {company: "Tumblr", role: "Android Software Engineer", city: "Santa Clara", icon:FaTumblrSquare},
    {company: "Twitch", role: "Backend Software Engineer", city: "New York", icon:FaTwitch}, {company: "Snapchat", role: "DevOps Software Engineer", city: "Santa Monica", icon:FaSnapchatSquare},{company: "Google", role:"Machine Learning Engineer", city:"San Francisco", icon:FaGooglePlusSquare},
    {company: "Apple", role:"IOS Software Engineer", city:"Cupertino", icon:FaApple},
    {company: "Facebook", role:"Backend Software Engineer", city:"Menlo Park", icon:FaFacebookSquare},
    {company: "LinkedIn", role:"Machine Learning Engineer", city:"San Francisco", icon:FaLinkedinSquare}],
    closed: [],
    openings: [{company: "Google", role:"Machine Learning Engineer", city:"San Francisco", icon:FaGooglePlusSquare},
    {company: "Apple", role:"IOS Software Engineer", city:"Cupertino", icon:FaApple},
    {company: "Facebook", role:"Backend Software Engineer", city:"Menlo Park", icon:FaFacebookSquare},
    {company: "LinkedIn", role:"Machine Learning Engineer", city:"San Francisco", icon:FaLinkedinSquare}],


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
          }>

              <AddJob/>
          </SweetAlert>
      )
    });
  };
  inputConfirmAlert = (e) => {
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
      show: false,
    });
  };


  openJobDescription = () => {
    console.log("opened job");
  }
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


        <AddJob
          open={this.state.open}
          onClose={this.handleClose}
        />



        <GridContainer>
          
          <ItemGrid xs={11} sm={11} >
          <RegularCard
              cardTitle={
                <span>
                  Job Positions
                </span>
              }
              content={
                <NavPills
                  color="warning"
                   alignCenter
                  tabs={[
                    {
                      tabButton: "New",
                       tabIcon: AddAlert,
                      tabContent: (
                       <div>
                       <GridContainer>
                          {this.state.newOpenings.map((opening,index) => (


                            <ItemGrid xs={12} sm={6} md={3} key={index}>
                                <StatsCard
                                onClick={() => {
          this.openJobDescription;
        }}
                                  icon={opening.icon}
                                  iconColor="orange"
                                  title={opening.company + ' - ' + opening.city}
                                  description={opening.role}
                                  small="Tech"
                                  statIcon={Update}
                                  statText="Updated 2 Min ago..."/>
                             </ItemGrid>

                               ))}
                        </GridContainer>
                      </div>
         
                      )
                    },
                    {
                      tabButton: "Open",
                      tabIcon: Input,
                      tabContent: (
                        <div>
                       <GridContainer>
                          {this.state.openings.map((opening, index) => (


                              <ItemGrid xs={12} sm={6} md={3} key={index}>
                                <StatsCard
                                onClick={() => {
          this.openJobDescription;
        }}
                                  icon={opening.icon}
                                  iconColor="blue"
                                  title={opening.company + ' - ' + opening.city}
                                  description={opening.role}
                                  small="Tech"
                                  statIcon={Update}
                                  statText="Updated 2 Min ago..."/>
                             </ItemGrid>

                               ))}
                        </GridContainer>
                      </div>
                      )
                    },
                    {
                      tabButton: "Closed",
                       tabIcon: Cancel,
                      tabContent: (
                       <div>
                       <GridContainer>
                          {this.state.newOpenings.map((opening, index) => (


                              <ItemGrid xs={12} sm={6} md={3} key={index}>
                                <StatsCard
                                onClick={() => {
          this.openJobDescription;
        }}
                                  icon={opening.icon}
                                  iconColor="red"
                                  title={opening.company + ' - ' + opening.city}
                                  description={opening.role}
                                  small="Tech"
                                  statIcon={Update}
                                  statText="Updated 2 Min ago..."/>
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

     
           
      
          <ItemGrid xs={1}>
            <IconButton color="warning" onClick={this.handleClickOpen} customClass={classes.marginRight}>
                      <Add className={classes.icons} />
          </IconButton>
          </ItemGrid>
        </GridContainer>

        <GridContainer>
        <ItemGrid xs={12} sm={12} md={11}>
          <IconCard
            title="Here's a few jobs nearby"
            iconColor="orange"
            icon={AddLocation}
            content={
              <RegularMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXN1kYOQstGejzFAYynqkTyVDVMwzqHIA"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `280px`, borderRadius: "6px", overflow: "hidden" }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            }
          />
        </ItemGrid>
        </GridContainer>
       





      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
