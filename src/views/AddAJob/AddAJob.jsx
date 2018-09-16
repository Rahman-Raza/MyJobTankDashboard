import React from "react";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import RatedInputContainer from "./addAJob/RatedInputContainer.js";

import BenefitsSection from "./addAJob/BenefitsSection.js";

import bgImage from "assets/img/job-position-background.png";

const themeColor = "#088390";
const greyBackground = "#F3F3F3";

const styles = {
    rootContainer: {
        background: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        paddingTop: "50px"
    },
    paper: {
        width: "80%",
        margin: "0 auto",
        padding: "0 50px"
    },
    root: {
        display: "flex",
        justifyContent: "center",
        padding: "30px 0 30px",
        width: "100%"
    },
    logoContainer: {
        border: "1px solid orange",
        borderRadius: "500px",
        width: "100px",
        color: "orange",
        padding: "30px 10px 10px 10px",
        lineHeight: "15px",
        fontWeight: "bold",
        height: "100px",
        display: "flex",
        alignitems: "center",
        textAlign: "center"
    },
    inputContainer: {
        display: "inline-block",
        padding: "20px",
        width: "50%"
    },
    textLabel: {
        color: themeColor,
        fontFamily: "Roboto",
        fontWeight: "400"
    },
    textField: {
        background: greyBackground,
        borderRadius: "20px",
        padding: "5px",
        width: "100%"
    },
    chip: {
        color: themeColor,
        display: "inline-block",
        fontFamily: "Roboto",
        fontWeight: "400",
        borderRadius: "25px",
        padding: "0 5px",
        width: "50%",

        iconStyle: {
            color: themeColor
        }
    },
    divider: {
        margin: "30px 0"
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center"
    },
    button: {
        color: themeColor,
        borderColor: themeColor,
        borderRadius: "25px",
        width: "200px",
        margin: "0 20px"
    }
};

class AddAJob extends React.Component {
    render() {
        return (
            <div style={styles.rootContainer}>
                <Paper style={styles.paper}>
                    <div style={styles.root}>
                        <form autoComplete="off">
                            <div style={styles.inputContainer}>
                                <p style={styles.textLabel}>Company Name</p>
                                <TextField
                                    style={styles.textField}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </div>
                            <div style={styles.inputContainer}>
                                <p style={styles.textLabel}>Job Position</p>
                                <TextField
                                    style={styles.textField}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </div>

                            <div style={styles.inputContainer}>
                                <p style={styles.textLabel}>Company Size</p>
                                <TextField
                                    style={styles.textField}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </div>

                            <div style={styles.inputContainer}>
                                <p style={styles.textLabel}>Employment Type</p>
                                <Select
                                    value={20}
                                    style={styles.textField}
                                    input={
                                        <Input
                                            name="employment"
                                            disableUnderline
                                        />
                                    }
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </div>

                            <div style={styles.inputContainer}>
                                <p style={styles.textLabel}>Work Experience</p>
                                <Select
                                    value={20}
                                    style={styles.textField}
                                    input={
                                        <Input name="age" disableUnderline />
                                    }
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </div>

                            <div style={styles.inputContainer}>
                                <p style={styles.textLabel}>Location</p>
                                <TextField
                                    style={styles.textField}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </div>

                            <div style={styles.chip}>
                                <Checkbox
                                    value="checkedC"
                                    checkedIcon={
                                        <Icon style={styles.chip.iconStyle}>
                                            done
                                        </Icon>
                                    }
                                />{" "}
                                Willing to Relocate
                            </div>

                            <div style={styles.chip}>
                                <Checkbox
                                    value="checkedC"
                                    checkedIcon={
                                        <Icon style={styles.chip.iconStyle}>
                                            done
                                        </Icon>
                                    }
                                />{" "}
                                Willing to Travel
                            </div>

                            <Divider style={styles.divider} />

                            <div>
                                <p style={styles.textLabel}>Summary</p>
                                <TextField
                                    id="textarea"
                                    multiline
                                    rows="4"
                                    margin="normal"
                                    style={styles.textField}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </div>

                            <div>
                                <p style={styles.textLabel}>
                                    Key Responsibilities
                                </p>
                                <TextField
                                    id="textarea"
                                    multiline
                                    rows="4"
                                    margin="normal"
                                    style={styles.textField}
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                                <p style={styles.textLabel}>+ Add Columns</p>
                            </div>

                            <Divider style={styles.divider} />

                            <RatedInputContainer
                                title="Languages"
                                defaultValues={["English", "Spanish"]}
                            />

                            <RatedInputContainer
                                title="Key Skills"
                                defaultValues={["Python", "JavaScript"]}
                            />

                            <Divider style={styles.divider} />

                            <p style={styles.textLabel}>Benefits</p>
                            <BenefitsSection
                                inputs={[
                                    "Commisions",
                                    "Overtime Pay",
                                    "Option",
                                    "Bonuses",
                                    "Travel / Meal / Housing Allowance",
                                    "Health / Wellness / Insurance"
                                ]}
                            />
                            <p style={styles.textLabel}>+ Add Benefits</p>

                            <div
                                style={{
                                    ...styles.inputContainer,
                                    margin: "40px 0"
                                }}
                            >
                                <p style={styles.textLabel}>Salary Range</p>
                                <Select
                                    value={20}
                                    style={styles.textField}
                                    input={
                                        <Input name="age" disableUnderline />
                                    }
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </div>

                            <section style={styles.buttonContainer}>
                                <Button
                                    variant="outlined"
                                    style={styles.button}
                                    onClick={this.props.closeHandler}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="raised"
                                    style={{
                                        ...styles.button,
                                        color: "#FFF",
                                        backgroundColor: themeColor
                                    }}
                                >
                                    Submit
                                </Button>
                            </section>
                        </form>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default AddAJob;
