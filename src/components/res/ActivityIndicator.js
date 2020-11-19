import React from "react";
import { LinearProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

const ActivityIndicator = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div></div>
            <LinearProgress color="primary" />
        </div>
    );
};

export default ActivityIndicator;
