import React from 'react';

import { Container, Typography } from '@material-ui/core';
import useStyles from '../styles/topHeadlinesStyles';

import News from '../components/news';

import mockup from './newsMockup';

const TopHeadlines = () => {
  const classes = useStyles();
  return (
    <div className={classes.headline}>
      <Container>
        <Typography
          variant='h2'
          color='secondary'
          className={classes.headlineTitle}>
          Most Popular News
        </Typography>
        <News title='Technology' news={mockup} amount={100} />
        <News title='Business' news={mockup} amount={120} />
      </Container>
    </div>
  );
};

export default TopHeadlines;
