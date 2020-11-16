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

export default styles;
