import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import useStyles from '../styles/searchResultsStyles';
import { SearchContext } from '../context/searchContext';

import page404 from '../assets/404.svg';

import NewsItem from './newsItem';

const SearchResults = (props) => {
  const classes = useStyles();

  const searchContext = useContext(SearchContext);
  const { results } = searchContext;

  const formatPathname = (name) => {
    const removeIndex = name.slice(1);
    if (removeIndex.includes('-')) {
      return removeIndex
        .split('-')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join('-')
        .replace(/[-]/g, ' ');
    }
    return removeIndex[0].toUpperCase() + removeIndex.slice(1);
  };

  return (
    <section className={classes.results}>
      <Container>
        <Grid container direction='column'>
          {results !== null && results.length === 0 ? (
            <>
              <Grid item>
                <Typography
                  variant='h2'
                  align='center'
                  className={classes.noResult}>
                  Results no found!
                </Typography>
              </Grid>
              <Grid item container direction='column'>
                <Grid item className={classes.errorImageContainer}>
                  <img
                    src={page404}
                    alt='no found'
                    className={classes.errorImage}
                  />
                </Grid>
              </Grid>
            </>
          ) : results !== null && results.length > 0 ? (
            <>
              <Grid item>
                <Typography variant='h2' className={classes.searchingResult}>
                  Searching for: {formatPathname(window.location.pathname)}
                </Typography>
              </Grid>
              <Grid item container justify='space-evenly'>
                {results.map((newItem) => (
                  <NewsItem newItem={newItem} key={newItem.title} />
                ))}
              </Grid>
            </>
          ) : (
            <div className={classes.resultsSpinnerContainer}>
              <CircularProgress size={70} />
            </div>
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default SearchResults;
