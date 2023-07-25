// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  joker: {
    primary: colors.deepPurple.base, // primary main
    primarylight: colors.deepPurple.lighten4, // primary light
    primarydark: colors.deepPurple.darken4, // primary dark
    secondary: colors.cyan.base, // secondary main
    secondarylight: colors.cyan.lighten4, // secondary light
    secondarydark: colors.cyan.darken4, // secondary dark
    anchor: colors.deepPurple.base // link
  },
};

const theme = {
  ...palette.joker,
};

export default theme;
