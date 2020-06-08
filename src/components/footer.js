import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import {
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from '../assets/logo_white.png';
import useStyles from '../styles/footerStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container>
          {/* logo */}
          <Grid item sm={6} md={5}>
            <IconButton className={classes.footerImageContainer} href='/'>
              <img src={logo} alt='logo' className={classes.footerImage} />
            </IconButton>
          </Grid>
          {/* top search */}
          <Grid item container sm={6} md={7}>
            {/* popular search */}
            <Grid item container direction='column' sm={6} md={4}>
              <Grid item className={classes.footerSocialTitleItem}>
                <Typography variant='h3' className={classes.footerSocialTitle}>
                  Treading News
                </Typography>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/category/technology'
                  className={classes.footerSocialBtn}>
                  Technology
                </Button>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/category/business'
                  className={classes.footerSocialBtn}>
                  Business
                </Button>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/category/entertainment'
                  className={classes.footerSocialBtn}>
                  Entertainment
                </Button>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/category/sports'
                  className={classes.footerSocialBtn}>
                  Sports
                </Button>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/health'
                  className={classes.footerSocialBtn}>
                  Health
                </Button>
              </Grid>
            </Grid>
            {/* City */}
            <Grid item container direction='column' sm={6} md={4}>
              <Grid item className={classes.footerSocialTitleItem}>
                <Typography variant='h3' className={classes.footerSocialTitle}>
                  Popular City
                </Typography>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/chicago'
                  className={classes.footerSocialBtn}>
                  Chicago
                </Button>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/new-york'
                  className={classes.footerSocialBtn}>
                  New York
                </Button>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/san-francisco'
                  className={classes.footerSocialBtn}>
                  San Francisco
                </Button>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/washington'
                  className={classes.footerSocialBtn}>
                  Washington
                </Button>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Button
                  component={Link}
                  to='/seattle'
                  className={classes.footerSocialBtn}>
                  Seattle
                </Button>
              </Grid>
            </Grid>
            {/* company */}
            <Grid item container direction='column' md={4}>
              <Grid item className={classes.footerSocialTitleItem}>
                <Typography variant='h3' className={classes.footerSocialTitle}>
                  Company
                </Typography>
              </Grid>

              <Grid item className={classes.footerSocialItem}>
                <IconButton
                  className={classes.footerSocialBtn}
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/Suonx002/dailyNews'>
                  <GitHubIcon className={classes.githubIcon} />
                </IconButton>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Typography variant='h4' className={classes.footerCopyRight}>
                  Created by Vuthy Suon
                </Typography>
              </Grid>
              <Grid item className={classes.footerSocialItem}>
                <Typography variant='h4' className={classes.footerCopyRight}>
                  Copyright © 2020 DailyNews
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default withRouter(Footer);
