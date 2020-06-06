import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  new: {
    // width: 300,
    padding: '1rem',
    marginBottom: '1rem',
    transition: 'box-shadow 0.4s ease',
    '&:hover': {
      boxShadow: '0 10px 18px rgba(0,0,0,0.15)',
      borderRadius: theme.shape.borderRadius,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  newImageContainer: {
    width: '100%',
    height: 175,
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
  },
  imageLink: {
    textDecoration: 'none',
  },
  titleLink: {
    textDecoration: 'none',
  },
  sourceLink: {
    textDecoration: 'none',
  },
  newTitle: {
    marginBottom: '1rem',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0.5rem',
    },
  },
  newImage: {
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
  newSource: {
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0.5rem',

      paddingLeft: '0.5rem',
    },
  },
  newAuthor: {
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0.5rem',
      paddingRight: '0.5rem',
    },
  },
  dateContainer: {
    // [theme.breakpoints.down('xs')]: {
    //   width: '100%',
    // },
  },
  newDate: {
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      paddingRight: '0.5rem',
      marginBottom: '0.5rem',
    },
  },
}));
