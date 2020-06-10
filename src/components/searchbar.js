import React, {useState, useContext} from 'react';
import {withRouter} from 'react-router-dom';

import {
  Container,
  Grid,
  Input,
  InputAdornment,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../styles/searchbarStyles';

import {SearchContext} from '../context/searchContext';

const Searchbar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [search, setSearch] = useState('');
  const searchContext = useContext(SearchContext);
  const {searchResults} = searchContext;

  const formatUrl = (url) => {
    return url.includes(' ') ? url.replace(/[ ]/g, '-') : url;
  };
  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    searchResults(search);
    setSearch('');
    props.history.push(`/${formatUrl(search.toLowerCase())}`);
  };

  return (
    <section className={classes.search}>
      <Container maxWidth='md'>
        <form className={classes.searchForm} onSubmit={handleSubmit}>
          <Grid
            container
            justify='center'
            alignItems='center'
            direction={matchesXS ? 'column' : 'row'}>
            <Grid item sm={9} md={10} className={classes.searchItem}>
              <Input
                value={search}
                onChange={handleChange}
                disableUnderline
                name='searchInput'
                placeholder='Search for headlines, anything, etc...'
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                }
                className={classes.searchInput}
              />
            </Grid>
            <Grid item sm={3} md={2} className={classes.searchItem}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.searchBtn}>
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </section>
  );
};

export default withRouter(Searchbar);
