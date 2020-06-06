import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  news: {
    marginTop: '3rem',
  },
  newsHeading: {
    paddingLeft: '0.5rem',
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    marginBottom: '1.5rem',
  },
  viewMoreContainer: {
    textAlign: 'center',
  },
  newsViewMoreBtn: {
    textTransform: 'none',
    padding: '0.75rem 3rem',
    margin: '1rem 0 3rem',
  },
}));
