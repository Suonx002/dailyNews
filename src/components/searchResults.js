import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import useStyles from '../styles/searchResultsStyles';

import NewsItem from './newsItem';

const SearchResults = (props) => {
  const { search, results, setResults, match } = props;
  const classes = useStyles();
  const [infiniteScroll, setInfiniteScroll] = useState([]);
  console.log(props);

  const fetchResult = async () => {
    const res = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: match.params.searchQuery.toLowerCase().replace(/['-news']/, ''),
        country: 'us',
        pageSize: 100,
        apiKey: process.env.REACT_APP_API_KEY,
      },
    });
    console.log(res);

    setResults(res.data.articles);
    setInfiniteScroll(res.data.articles.slice(0, 12));
  };

  const fetchMoreData = async () => {
    setTimeout(() => {
      setInfiniteScroll(results.slice(0, infiniteScroll.length + 12));
    }, 500);
  };

  useEffect(() => {
    fetchResult();
    //eslint-disable-next-line
  }, []);
  return (
    <section className={classes.results}>
      <Container>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>Searching for: {search}</Typography>
          </Grid>

          {infiniteScroll.length > 0 ? (
            <InfiniteScroll
              style={{
                overflow: 'hidden',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
              }}
              dataLength={infiniteScroll.length}
              next={fetchMoreData}
              hasMore={infiniteScroll.length >= results.length ? false : true}
              loader={
                <div className={classes.categorySpinnerContainer}>
                  <CircularProgress size={70} />
                </div>
              }
              endMessage={
                <Typography variant='body1' color='primary' align='center'>
                  Yay! You have seen it all :)
                </Typography>
              }>
              <Grid item container justify='space-evenly'>
                {infiniteScroll.map((newItem) => (
                  <NewsItem newItem={newItem} key={newItem.title} />
                ))}
              </Grid>
            </InfiniteScroll>
          ) : (
            <div className={classes.categorySpinnerContainer}>
              <CircularProgress size={70} />
            </div>
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default SearchResults;
