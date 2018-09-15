import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

import RatedInputContainer from "./addAJob/RatedInputContainer.js";
import BenefitsSection from "./addAJob/BenefitsSection.js";

const themeColor = "#088390";
const greyBackground = "#F3F3F3";

const styles = {
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
    }
};

class AddAJob extends React.Component {
    render() {
        return (
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
                                    <Input name="employment" disableUnderline />
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
                                input={<Input name="age" disableUnderline />}
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
                            <p style={styles.textLabel}>Key Responsibilities</p>
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

                    </form>
                </div>
            </Paper>
        );
    }
}

export default AddAJob;
