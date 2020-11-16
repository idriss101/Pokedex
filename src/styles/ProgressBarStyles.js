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

export default styles;
