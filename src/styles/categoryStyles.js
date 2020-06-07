import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  category: {},
  categoryTitle: {
    textAlign: 'center',
    padding: '3rem 0',
    marginBottom: '1.5rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  categorySpinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
