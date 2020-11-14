import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  btns: {
    width: "100%",
    borderRadius: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
    border: "none",
    backgroundColor: "#EEEEEE",
    transition: "all .5s",
    "&:hover": {
      backgroundColor: (props) => props.color,
    },
    "&:hover p": {
      color: "white",
    },
  },
  btnText: {
    padding: "0",
    margin: "0",
    fontWeight: "700",
    color: (props) => props.color,
  },
});

function SideBarBtn(props) {
  return (
    <div style={{ width: "100%" }}>
      <Button
        variant="outlined"
        className={props.classes.btns}
        onClick={props.handleClick}
      >
        <p style={{}} className={props.classes.btnText}>
          {props.name}
        </p>
      </Button>
    </div>
  );
}
export default withStyles(styles)(SideBarBtn);
