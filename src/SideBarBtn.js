import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles/SideBarBtnStyles";

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
