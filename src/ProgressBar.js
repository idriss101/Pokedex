import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  progress: {
    height: "9px",
    borderRadius: "10px",
    backgroundColor: "#E9E8E7",
  },
  barColorPrimary: {
    backgroundColor: (props) => props.statColors(props.baseStat),
  },
});

function ProgressBar(props) {
  return (
    <div>
      <LinearProgress
        value={props.value}
        variant="determinate"
        className={props.classes.progress}
        classes={{
          colorPrimary: props.classes.colorPrimary,
          barColorPrimary: props.classes.barColorPrimary,
        }}
      />
    </div>
  );
}

export default withStyles(styles)(ProgressBar);
