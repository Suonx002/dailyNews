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
        <Typography variant='h2' className={classes.headlineTitle}>
          Most Popular News
        </Typography>
        <News title='Technology' news={mockup} />
      </Container>
    </div>
  );
};

export default TopHeadlines;
