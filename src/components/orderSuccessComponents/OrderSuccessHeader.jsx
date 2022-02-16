/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import logo from '../../assets/myntra_logo.png';
import useStyles from './orderSuccessHeaderStyles';

export default function OrderSuccessHeader() {
  const classes = useStyles();
  const history = useHistory();
  const path = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const loadDetails = () => {
    if (path.pathname === '/bag') {
      setActiveLink('bag');
    } else if (path.pathname === '/address') {
      setActiveLink('address');
    } else if (path.pathname === '/payment') {
      setActiveLink('payment');
    }
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.header}>
        <Grid className={classes.catInfoLogo}>
          <Link
            to="/"
            className={`${classes.catContainer}`}
            style={{ marginRight: '20px' }}
          >
            <img src={logo} alt="app-logo" height="40px" width="40px" />
          </Link>
        </Grid>
        <Grid>
          <ul className={classes.ulCSS}>
            <li
              className={
                activeLink === 'bag' ? classes.active_list : classes.list
              }
              onClick={() => {
                if (activeLink === 'address' || activeLink === 'payment') {
                  history.push('/bag');
                }
              }}
            >
              bag
            </li>
            <li className={classes.dashedSeprator} />
            <li
              className={
                activeLink === 'address' ? classes.active_list : classes.list
              }
              onClick={() => {
                if (activeLink === 'payment') {
                  history.push('/address');
                }
              }}
            >
              address
            </li>
            <li className={classes.dashedSeprator} />
            <li
              className={
                activeLink === 'payment' ? classes.active_list : classes.list
              }
            >
              payment
            </li>
          </ul>
        </Grid>
        <Grid className={classes.catInfoLogo} style={{ marginRight: '30px' }}>
          <div className={classes.verifiedContainer}>
            <VerifiedUserIcon fontSize="large" sx={{ color: '#14CDA8' }} />
            100 % SECURE
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
