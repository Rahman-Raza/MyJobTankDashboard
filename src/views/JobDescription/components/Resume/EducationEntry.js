import React from "react";

import Typography from "@material-ui/core/Typography";

const styles = {
    root: {
        marginBottom: "20px"
    },
    text: {
        color: "#FFF"
    }
};

const EducationEntry = props => (
    <article style={styles.root}>
        <Typography variant="body2" style={styles.text} gutterBottom>
            Loyola University Chicago
        </Typography>

        <Typography style={styles.text} gutterBottom>
            Master Degree, Information Design
        </Typography>

        <Typography style={styles.text} gutterBottom>
            2012-2016
        </Typography>
    </article>
);

export default EducationEntry;
