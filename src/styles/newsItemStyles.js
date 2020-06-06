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
  },
  newImageContainer: {
    width: '100%',
    height: 175,
    marginBottom: '1rem',
    [theme.breakpoints.down('xs')]: {
      height: 115,
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
  },
  newImage: {
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
  },
  newSource: {
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0.5rem',
    },
  },
  newAuthor: {
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0.5rem',
    },
  },
  dateContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  newDate: {
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'right',
    },
  },
}));
