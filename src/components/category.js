import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from '../styles/categoryStyles';

import NewsItem from './newsItem';

import mockup from './newsMockup';

const Category = () => {
  const classes = useStyles();
  return (
    <section className={classes.category}>
      <Grid container direction='column'>
        <Grid item>
          <Typography variant='h2' className={classes.categoryTitle}>
            Category News
          </Typography>
        </Grid>
        <Grid item>
          <Container>
            <Grid item container justify='space-evenly'>
              {mockup.map((newItem) => (
                <NewsItem newItem={newItem} key={newItem.title} />
              ))}
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </section>
  );
};

export default Category;
