import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import useStyles from '../styles/categoryStyles';

import NewsItem from './newsItem';

const Category = (props) => {
  const classes = useStyles();
  const [category, setCategory] = useState(null);
  const [infiniteScroll, setInfiniteScroll] = useState([]);

  const fetchCategory = async () => {
    const res = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines',
      {
        params: {
          country: 'us',
          category: props.match.params.category_id.toLowerCase(),
          pageSize: 100,
          apiKey: process.env.REACT_APP_API_KEY,
        },
      }
    );

    setCategory(res.data.articles);
    setInfiniteScroll(res.data.articles.slice(0, 12));
  };

  const fetchMoreData = async () => {
    setTimeout(() => {
      setInfiniteScroll(category.slice(0, infiniteScroll.length + 12));
    }, 500);
  };

  useEffect(() => {
    fetchCategory();

    //eslint-disable-next-line
  }, []);

  // console.log(category);
  // console.log(infiniteScroll);
  return (
    <section className={classes.category}>
      <Grid container direction='column'>
        <Grid item>
          <Typography variant='h2' className={classes.categoryTitle}>
            {`${props.match.params.category_id
              .slice(0, 1)
              .toUpperCase()}${props.match.params.category_id.slice(1)} `}{' '}
            News
          </Typography>
        </Grid>
        <Grid item>
          <Container>
            {/* {category !== null && category.length > 0 ? (
              <Grid item container justify='space-evenly'>
                {category.map((newItem) => (
                  <NewsItem newItem={newItem} key={newItem.title} />
                ))}
              </Grid>
            ) : (
              <div className={classes.categorySpinnerContainer}>
                <CircularProgress size={70} />
              </div>
            )} */}

            {/* <Grid item container justify='space-evenly'> */}
            {infiniteScroll.length > 0 ? (
              <InfiniteScroll
                style={{
                  overflow: 'hidden',
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem',
                }}
                dataLength={infiniteScroll.length}
                next={fetchMoreData}
                hasMore={
                  infiniteScroll.length >= category.length ? false : true
                }
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
            {/* </Grid> */}
          </Container>
        </Grid>
      </Grid>
    </section>
  );
};

export default Category;
