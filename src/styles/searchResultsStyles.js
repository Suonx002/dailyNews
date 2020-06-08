import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  noResult: {
    paddingLeft: '1rem',
    margin: '2rem 0',
  },
  searchingResult: {
    paddingLeft: '1rem',
    margin: '2rem 0',
  },
  errorImageContainer: {
    width: 500,
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  errorImage: {
    height: '100%',
    width: '100%',
  },
}));
