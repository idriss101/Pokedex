import sizes from "./sizes";

const styles = () => ({
  progress: {
    height: "9px",
    borderRadius: "10px",
    backgroundColor: "#E9E8E7",
  },
  Pokemon: {
    width: "100%",
    backgroundColor: "#f8f7f7",
    padding: "40px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:nth-child(2n + 0)": {
      backgroundColor: "white",
    },
  },
  PokemonMain: {
    backgroundColor: "white",
    width: "70%",
    borderRadius: "20px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "-4px 11px 36px -4px rgba(0, 0, 0, 0.17)",
    position: "relative",
    zIndex: "5",
    "& h2": {
      textTransform: "capitalize",
      color: "#666266",
      marginTop: "-10px",
      fontWeight: "500",
    },
    "& ul": {
      listStyle: "none",
      textAlign: "center",
      padding: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "capitalize",
      fontSize: "14px",
      "& li": {
        display: "inline-block",
        marginRight: "10px",
      },
    },
    "& img": {
      zIndex: "10",
    },
    [sizes.up("sm")]: {
      width: "50%",
    },
  },
  PokemonMainTypes: {
    "& li": {
      textTransform: "uppercase",
      fontSize: "14px",
      marginTop: "-10px",
    },
  },
  PokemonStats: {
    marginTop: "20px",
    width: "80%",
    "& td": {
      textTransform: "capitalize",
    },
  },
  PokemonId: {
    position: "absolute",
    top: "26%",
    left: "48%",
    transform: "translate(-50%, -50%)",
    fontSize: "100px",
    zIndex: "-1",
    color: "#6662662a",
    fontWeight: "500",
  },
  PokemonMoreInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  PokemonExtraStats: {
    height: "40px",
    width: "40px",
    padding: "8px",
    borderRadius: "100%",
    backgroundColor: "white",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: "10",
    fontSize: "14px",
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.8)",
    boxShadow: "0px 17px 46px -3px rgba(0, 0, 0, 0.14)",
  },
  PokemonHeight: {
    top: "-5%",
    left: "-5%",
  },
  PokemonWeight: {
    top: "-5%",
    right: " -5%",
  },
});

export default styles;
