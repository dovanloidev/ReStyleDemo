const INITIAL_THEME = {
  colors: {},
  spacing: {},
  textVariants: {},
};

const createTheme = (theme = {}) => {
  let newTheme = INITIAL_THEME;

  if (Object.keys(theme).length) {
    const {colors = {}, spacing = {}, textVariants = {}} = theme || {};

    newTheme = {
      ...newTheme,
      ...theme,
      colors,
      spacing,
      textVariants,
    };
  }

  return newTheme;
};

export default createTheme;
