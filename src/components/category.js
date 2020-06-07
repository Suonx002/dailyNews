import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import useStyles from '../styles/categoryStyles';

import NewsItem from './newsItem';

import mockup from './newsMockup';

const Category = (props) => {
  const classes = useStyles();
  const [category, setCategory] = useState(null);

  const fetchCategory = async () => {
    const res = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        category: props.match.params.category_id.toLowerCase(),
        pageSize: 100,
        apiKey: process.env.REACT_APP_API_KEY,
      },
    });

    setCategory(res.data.articles);
  };

  useEffect(() => {
    fetchCategory();
    //eslint-disable-next-line
  }, []);

  console.log(category);
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
            {category !== null && category.length > 0 ? (
              <Grid item container justify='space-evenly'>
                {category.map((newItem) => (
                  <NewsItem newItem={newItem} key={newItem.title} />
                ))}
              </Grid>
            ) : (
              <div className={classes.categorySpinnerContainer}>
                <CircularProgress size={70} />
              </div>
            )}
          </Container>
        </Grid>
      </Grid>
    </section>
  );
};

export default Category;
