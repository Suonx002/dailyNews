import React from 'react';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';

import useStyles from '../styles/navbarStyles';

import Logo from '../assets/logo_white.png';

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <AppBar
        position='fixed'
        //color='transparent'
        elevation={0}
        className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton disableRipple className={classes.logoContainer} href='/'>
            <img src={Logo} alt='DailyNews' className={classes.logo} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </nav>
  );
};

export default Navbar;
