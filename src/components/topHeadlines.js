import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Typography, CircularProgress } from '@material-ui/core';
import useStyles from '../styles/topHeadlinesStyles';

import News from '../components/news';

const requests = [
  'technology',
  'entertainment',
  'health',
  'science',
  'sports',
  'business',
];

const TopHeadlines = () => {
  const classes = useStyles();
  const [category, setCategory] = useState({
    technology: null,
    entertainment: null,
    health: null,
    science: null,
    sports: null,
    business: null,
    technologyAmount: null,
    entertainmentAmount: null,
    healthAmount: null,
    scienceAmount: null,
    sportsAmount: null,
    businessAmount: null,
  });

  const fetchCategory = async () => {
    const cors = 'https://cors-anywhere.herokuapp.com/';

    const promises = [];
    //create a list of promises url
    for (let req of requests) {
      promises.push(
        axios.get(
          `${cors}https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines`,
          {
            params: {
              country: 'us',
              category: req,
              pageSize: 12,
              apiKey: process.env.REACT_APP_API_KEY,
            },
          }
        )
      );
    }
    const res = await axios.all(promises);

    setCategory({
      ...category,
      technology: res[0].data.articles,
      entertainment: res[1].data.articles,
      health: res[2].data.articles,
      science: res[3].data.articles,
      sports: res[4].data.articles,
      business: res[5].data.articles,
      technologyAmount: res[0].data.totalResults,
      entertainmentAmount: res[1].data.totalResults,
      healthAmount: res[2].data.totalResults,
      scienceAmount: res[3].data.totalResults,
      sportsAmount: res[4].data.totalResults,
      businessAmount: res[5].data.totalResults,
    });
  };

  useEffect(() => {
    // fetch all category
    fetchCategory();

    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.headline}>
      <Container>
        {category.technology !== null ? (
          <>
            <Typography
              variant='h2'
              color='secondary'
              className={classes.headlineTitle}>
              Top Treading News
            </Typography>

            <News
              title='Technology'
              news={category.technology}
              amount={category.technologyAmount}
            />
            <News
              title='Entertainment'
              news={category.entertainment}
              amount={category.entertainmentAmount}
            />
            <News
              title='Science'
              news={category.science}
              amount={category.scienceAmount}
            />
            <News
              title='Sports'
              news={category.sports}
              amount={category.sportsAmount}
            />
            <News
              title='Business'
              news={category.business}
              amount={category.businessAmount}
            />
            <News
              title='Health'
              news={category.health}
              amount={category.healthAmount}
            />
          </>
        ) : (
          <div className={classes.headlineSpinnerContainer}>
            <CircularProgress size={70} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default TopHeadlines;
