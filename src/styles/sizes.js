export default {
  up() {},
  down(size) {
    const sizes = {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1350px",
      xl: "1600px",
    };

    return `@media screen and (max-width: ${sizes[size]})`;
  },
};
