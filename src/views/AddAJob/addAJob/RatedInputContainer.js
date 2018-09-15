import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import RatedInput from "./RatedInput";

const themeColor = "#088390";

const styles = {
  root: {
    margin: "30px 0"
  },
  title: {
    color: themeColor
  }
};

class RatedInputContainer extends Component {
  state = {
    currentAddition: "",
    inputs: this.props.defaultValues.map(value => ({
      name: value
    })),
    showInput: false
  };

  autoCompleteUpdateHandler = value => {
    this.setState({
      currentAddition: value
    });
  };

  addSkill = name => {
    this.setState({
      inputs: [...this.state.inputs, { name }]
    });
  };

  removeSkillHandler = name => {
    this.setState({
      inputs: this.state.inputs.filter(current => current.name !== name)
    });
  };

  render() {
    return (
      <article style={styles.root}>
        <Typography style={styles.title}>{this.props.title}</Typography>

        {this.state.inputs.map((current, index) => (
          <RatedInput
            name={current.name}
            key={index}
            removeHandler={this.removeSkillHandler}
          />
        ))}

        {this.state.showInput ? (
          <div>
            <TextField
              name="Add"
              onChange={e => this.autoCompleteUpdateHandler(e.target.value)}
            />

            <Button
              variant="raised"
              onClick={() => {
                this.addSkill(this.state.currentAddition);
              }}
              style={{
                borderRadius: "25px",
                margin: "10px",
                maxHeight: "32px"
              }}
            >
              Add
            </Button>
          </div>
        ) : (
          <Typography
            style={{ ...styles.title, cursor: "pointer" }}
            onClick={e => this.setState({ showInput: true })}
          >
            + Add {this.props.title}
          </Typography>
        )}
      </article>
    );
  }
}

export default RatedInputContainer;
