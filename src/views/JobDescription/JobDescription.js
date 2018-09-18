import React, { Component } from "react";
import ReactDOM from "react-dom";

import Paper from "@material-ui/core/Paper";

import "./JobDescription.scss";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

import bgImage from "assets/img/job-position-background.png";

const styles = {
    root: {
        background: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        paddingTop: "50px"
    },
    paper: {
        width: "80%",
        margin: "0 auto",
        padding: "50px 0 50px 50px"
    }
};

class JobDescription extends Component {
    render() {
        return (
            <div style={styles.root}>
                <Paper style={styles.paper}>
                    <Nav />
                    <Main />
                </Paper>
            </div>
        );
    }
}

export default JobDescription;
