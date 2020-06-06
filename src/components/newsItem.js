import React from 'react';

import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from '../styles/newsItemStyles';

import page404 from '../assets/404.svg';

const NewsItem = (props) => {
  const {
    newItem: { source, author, title, url, urlToImage, publishedAt },
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      item
      container
      direction='column'
      className={classes.new}
      sm={6}
      md={4}
      lg={3}>
      <Grid item className={classes.newImageContainer}>
        <a
          href={url}
          rel='noopener noreferrer'
          target='_blank'
          className={classes.imageLink}>
          <img
            src={urlToImage || page404}
            alt={title}
            className={classes.newImage}
          />
        </a>
      </Grid>
      <Grid item>
        <a
          href={url}
          rel='noopener noreferrer'
          target='_blank'
          className={classes.titleLink}>
          <Typography
            variant='h3'
            className={classes.newTitle}
            color='secondary'>
            {title}
          </Typography>
        </a>
      </Grid>

      {/* sources */}
      <Grid item container>
        <Grid item xs={6}>
          <a
            href={url}
            rel='noopener noreferrer'
            target='_blank'
            className={classes.sourceLink}>
            <Typography variant='body1' className={classes.newSource}>
              {source.name}
            </Typography>
          </a>
        </Grid>
        <Grid item container direction='column' xs={6} alignItems={'flex-end'}>
          <Grid item>
            <Typography variant='body1' className={classes.newAuthor}>
              By {author || 'null'}
            </Typography>
          </Grid>
          <Grid item className={classes.dateContainer}>
            <Typography variant='subtitle2' className={classes.newDate}>
              {new Date(publishedAt).toLocaleDateString() || 'null'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsItem;
