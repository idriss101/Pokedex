import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ProgressBarStyles";

function ProgressBar(props) {
  const { value, classes } = props;
  return (
    <div>
      <LinearProgress
        value={value}
        variant="determinate"
        className={classes.progress}
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary: classes.barColorPrimary,
        }}
      />
    </div>
  );
}

export default withStyles(styles)(ProgressBar);
