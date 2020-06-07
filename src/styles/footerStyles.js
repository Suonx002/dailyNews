import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: '3rem 0',
    marginTop: '3rem',
  },
  footerImageContainer: {
    width: 250,
    height: 100,
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '-1.5rem',
    },
  },
  footerSocialTitleItem: {
    marginBottom: '1rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
    },
  },
  footerSocialTitle: {
    color: theme.palette.common.white,
  },
  footerSocialBtn: {
    color: theme.palette.common.white,
    padding: 0,
    textTransform: 'none',
    minWidth: 10,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.common.lightText,
    },
  },
  footerSocialItem: {
    marginBottom: '0.5rem',
  },
  footerCopyRight: {
    color: theme.palette.common.lightText,
    fontSize: '0.85rem',
  },
  githubIcon: {
    transition: 'all 0.3s ease',
    '&:hover': {
      fill: theme.palette.common.lightText,
    },
  },
}));
