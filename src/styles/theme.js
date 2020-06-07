import { createMuiTheme } from '@material-ui/core';

const primary = '#192a56';
const secondary = '#271956';

const lightText = '#bbb';
const darkText = '#1a1a1a';

const theme = createMuiTheme();

export default createMuiTheme({
  palette: {
    common: {
      lightText,
      darkText,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    h2: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '2.5rem',
      lineHeight: 1.5,
      [theme.breakpoints.down('md')]: {
        fontSize: '2.3rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.1rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.9rem',
      },
    },
    h3: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1.15rem',
      lineHeight: 1.5,
      color: primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.1rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.05rem',
      },
    },
    h4: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '1rem',
      color: darkText,
    },
  },
});
