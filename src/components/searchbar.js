import React from 'react';

import {
  Container,
  Grid,
  Input,
  InputAdornment,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../styles/searchbarStyles';

const Searchbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <section className={classes.search}>
      <Container maxWidth='md'>
        <form className={classes.searchForm}>
          <Grid
            container
            justify='center'
            alignItems='center'
            direction={matchesXS ? 'column' : 'row'}>
            <Grid item sm={9} md={10} className={classes.searchItem}>
              <Input
                disableUnderline
                name='searchInput'
                placeholder={
                  matchesXS
                    ? 'Search for headlines, business, etc...'
                    : 'Search for technology, business, headlines, etc...'
                }
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

export default Searchbar;
