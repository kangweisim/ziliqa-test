import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const color = {
  main: {
    500: "#CC4141",
    900: "#b61827",
    100: "#ff867c",
  },
  secondary: {
    900: "#9C5400",
    700: "#C66D07",
    500: "#F3901D",
    100: "#FFBE73",
  },
}

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: color.main[900],
    main: color.main[500],
    light: color.main[100],
  },
  secondary: {
    contrastText: white,
    dark: color.secondary[900],
    main: color.secondary[500],
    light: color.secondary[100]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: color.secondary[900]
  },
  link: color.secondary[900],
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200]
};
