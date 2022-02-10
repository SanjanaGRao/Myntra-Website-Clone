/**
* Header of the Myntra Website
* All the subcomponents of the header are broken down into further small functions in
* other respective files. This file connects them all to give a whole component
* @returns the header of the website
* @author Sanjana Rao
*/
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './appbar.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ViewWeekSharpIcon from '@mui/icons-material/ViewWeekSharp';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@mui/material';
import Logo from '../../assets/myntra_logo.png';
import MenDropdown from './MenDropdown';
import WomenDropdown from './WomenDropdown';
import KidsDropdown from './KidsDropdown';
import HomeDropdown from './HomeDropdown';
import BeautyDropdown from './BeautyDropdown';
import StudioDropdown from './StudioDropdown';
import Profile from './Profile';

/**
 * @description Makes use of makeStyles from MUI to generate custom styling to components
 */
const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'left',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  catContainerMen: {
    '&:hover ': {
      borderBottom: '4px solid #ee5f73',
    },
  },
  catContainerWomen: {
    '&:hover ': {
      borderBottom: '4px solid #fb56c1',
    },
  },
  catContainerKids: {
    '&:hover ': {
      borderBottom: '4px solid #f26a10',
    },
  },
  catContainerHome: {
    '&:hover ': {
      borderBottom: '4px solid #f2c210',
    },
  },
  catContainerBeauty: {
    '&:hover ': {
      borderBottom: '4px solid #0db7af',
    },
  },
  catContainerStudio: {
    '&:hover ': {
      borderBottom: '4px solid #ff3f6c',
    },
  },
  newSign: {
    color: '#ff3f6c',
    top: '-0.4rem',
    fontSize: '65%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
    textTransform: 'uppercase',
  },
}));

export default function Appbar() {
  const [inMobile, setInMobile] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  // Routing Function to go to dashboard
  const landingPage = () => {
    history.push('/');
  };

  // Function to set the state for mobile view
  const mobileView = () => {
    setInMobile(!inMobile);
  };

  return (
    <div className="header">
      <IconButton onClick={landingPage} style={{ paddingLeft: '1em', paddingRight: '1em' }}>
        <img
          src={Logo}
          alt="logo"
          className="headerLogo"
        />
      </IconButton>
      <ul
        className={inMobile ? 'navLinksMobile' : 'navLinks'}
      >
        <li className="navItems">
          <Link to="/men">
            <div className={`${classes.catContainerMen}`}>
              {(!inMobile) ? <MenDropdown /> : (
                <Link to="/men">
                  <span className={`${classes.catContainerMen}`}>MEN</span>
                </Link>
              )}
            </div>
          </Link>
        </li>
        <li className="navItems">
          <Link to="/women">
            <div className={`${classes.catContainerWomen}`}>
              {(!inMobile) ? <WomenDropdown /> : (
                <Link to="/women">
                  <span className={`${classes.catContainerWomen}`}>WOMEN</span>
                </Link>
              )}
            </div>
          </Link>
        </li>
        <li className="navItems">
          <Link to="/kids">
            <div className={`${classes.catContainerKids}`}>
              {(!inMobile) ? <KidsDropdown /> : (
                <Link to="/kids">
                  <span className={`${classes.catContainerKids}`}>KIDS</span>
                </Link>
              )}
            </div>
          </Link>
        </li>
        <li className="navItems">
          <Link to="/home">
            <div className={`${classes.catContainerHome}`}>
              {(!inMobile) ? <HomeDropdown /> : (
                <Link to="/home">
                  <span className={`${classes.catContainerHome}`}>HOME & LIVING</span>
                </Link>
              )}
            </div>
          </Link>
        </li>
        <li className="navItems">
          <Link to="/beauty">
            <div className={`${classes.catContainerBeauty}`}>
              {(!inMobile) ? <BeautyDropdown /> : (
                <Link to="/beauty">
                  <span className={`${classes.catContainerBeauty}`}>BEAUTY</span>
                </Link>
              )}
            </div>
          </Link>
        </li>
        <li className="navItems">
          <Link to="/studio">
            <div className={`${classes.catContainerStudio}`}>
              {(!inMobile) ? <StudioDropdown /> : (
                <Link to="/studio">
                  <span className={`${classes.catContainerStudio}`}>STUDIO</span>
                </Link>
              )}
            </div>
          </Link>
        </li>
      </ul>
      <div className="headerSearch">
        <div className={classes.searchIcon}>
          <SearchIcon fontSize="medium" style={{ color: '#7e7f92' }} />
        </div>
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className="headerIcons">
        <div>
          <div className="headerUser">
            <span>&nbsp;&nbsp;&nbsp;Profile</span>
            <Profile />
          </div>
        </div>
        <Link to="wishlist">
          <div className="headerUser">
            <FavoriteBorderIcon className="headerIdentity" />
            <span>Whislist</span>
          </div>
        </Link>
        <Link to="cart">
          <div className="headerUser">
            <ShoppingBagOutlinedIcon className="headerIdentity" />
            <span>Bag</span>
          </div>
        </Link>
      </div>
      <div
        className="hamburger"
        onClick={() => mobileView()}
        aria-hidden="true"
      >
        {inMobile ? <CloseIcon /> : <ViewWeekSharpIcon fontSize="small" />}
      </div>
    </div>
  );
}
