const styles = () => ({
  MoreInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "40px",
    "& h4": {
      fontSize: "16px",
      marginTop: "-5px",
      color: " #66625c",
      textTransform: "capitalize",
    },
  },
  MovesList: {
    "& h3": {
      color: " #66625c",
    },
    "& ul": {
      listStyle: "none",
      textAlign: "center",
      paddingLeft: "0",
      "& li": {
        display: "inline-block",
      },
    },
  },
  Move: {
    border: "1px solid rgba(128, 128, 128, 0.432)",
    borderRadius: "10px",
    padding: "3px",
    minWidth: "130px",
    maxWidth: "80px",
    marginRight: "5px",
    marginBottom: "10px",
    color: "rgba(0, 0, 0, 0.7)",
  },
  MoveWrap: {
    display: "flex",
    marginTop: "-20px",
    flexWrap: "wrap",
  },
  PokemonType: {
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "12px",
    marginTop: "-15px",
    display: "inline-block",
    marginRight: "8px",
  },
  PokemonId: {
    color: " #a39f99",
    marginTop: "-10px",
  },
});

export default styles;
