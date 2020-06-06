import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  logoContainer: {
    width: 250,
    height: 100,
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    width: 300,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2rem',
  },
}));
