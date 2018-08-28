import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Add from "@material-ui/icons/Add";
import CloudUpload from "@material-ui/icons/CloudUpload";

const styles = {
    root: {

    },
    addIconStyle: {
        border: "1px solid #088390",
        color: "#088390",
        cursor: "pointer",
        fontSize: 30,
        position: "absolute",
        right: "31px",
        top: "21px"
    },
    menuItemStyle: {
        color: "#088390"
    },
    menuItemIconStyle: {
        color: "#088390",
        margin: "5px"
    }
};

class JobMenu extends React.Component {
    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <Add
                    classes={{
                        root: classes.addIconStyle
                    }}
                    aria-owns={anchorEl ? "simple-menu" : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                />
                <Menu
                    id="job-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem classes={{ root: classes.menuItemStyle }}>
                        <Add classes={{ root: classes.menuItemIconStyle }} />{" "}
                        Add A Job Description
                    </MenuItem>
                    <MenuItem classes={{ root: classes.menuItemStyle }}>
                        <CloudUpload
                            classes={{ root: classes.menuItemIconStyle }}
                        />{" "}
                        Upload A Resume
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(JobMenu);
