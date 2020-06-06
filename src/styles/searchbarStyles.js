import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  search: {
    padding: '5rem 0',
    backgroundColor: theme.palette.primary.main,
  },
  searchForm: {
    backgroundColor: theme.palette.common.white,
    padding: '0.75rem 1.5rem',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('xs')]: {
      padding: '1.5rem',
    },
  },
  searchItem: {
    [theme.breakpoints.down('xs')]: {
      '&:first-child': {
        marginBottom: '1.5rem',
      },
      width: '100%',
    },
  },
  searchInput: {
    width: '95%',
    padding: '0.8rem 1.5rem',
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
    '&:focus': {
      color: theme.palette.primary.dark,
    },
    '&:active': {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: '0.8rem 0rem',
    },
  },
  searchBtn: {
    textTransform: 'none',
    padding: '0.75rem 3rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
