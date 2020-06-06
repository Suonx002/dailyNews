import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core';
import useStyles from '../styles/newsStyles';

import NewsItem from './newsItem';

const News = (props) => {
  const { news, title, amount } = props;
  const classes = useStyles();
  return (
    <section className={classes.news}>
      <Grid container direction='column'>
        <Grid item>
          <Typography
            variant='h2'
            color='primary'
            className={classes.newsHeading}>
            {title}
          </Typography>
        </Grid>
        <Grid item container justify='space-evenly'>
          {news.map((newItem) => (
            <NewsItem newItem={newItem} key={newItem.title} />
          ))}
        </Grid>
        <Grid item className={classes.viewMoreContainer}>
          <Button
            variant='outlined'
            color='secondary'
            component={Link}
            to='/'
            className={classes.newsViewMoreBtn}>
            View all {amount} {title} News
          </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default News;
