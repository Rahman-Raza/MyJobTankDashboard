import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

const themeColor = "#088390";

const styles = {
    checkboxContainer: {
        border: `1px solid ${themeColor}`,
        borderRadius: "25px",
        color: themeColor,
        display: "inline-block",
        fontFamily: "Roboto",
        fontWeight: "400",
        borderRadius: "25px",
        margin: "10px",
        padding: "0 20px 0 5px",

        iconStyle: {
            color: themeColor
        }
    },
    closeIconStyle: {
        cursor: "pointer",
        position: "relative",
        top: "8px",
        left: "10px"
    }
};

class BenefitsSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: props.inputs
        };
    }

    removeChip(chip) {
        this.setState({
            inputs: this.state.inputs.filter(current => current !== chip)
        });
    }

    render() {
        return (
            <section>
                {this.state.inputs.map((current, index) => (
                    <article key={index} style={styles.checkboxContainer}>
                        <Checkbox
                            checked
                            checkedIcon={
                                <Icon
                                    style={styles.checkboxContainer.iconStyle}
                                >
                                    done
                                </Icon>
                            }
                        />{" "}
                        {current}
                        <Icon
                            style={styles.closeIconStyle}
                            onClick={e => this.removeChip(current)}
                        >
                            clear
                        </Icon>
                    </article>
                ))}
            </section>
        );
    }
}

export default BenefitsSection;
