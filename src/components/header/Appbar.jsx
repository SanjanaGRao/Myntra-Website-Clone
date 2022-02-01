import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './appbar.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ViewWeekSharpIcon from '@mui/icons-material/ViewWeekSharp';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@mui/material';
import Logo from '../assets/myntra_logo.png';
import MenDropdown from './MenDropdown';
import WomenDropdown from './WomenDropdown';
import KidsDropdown from './KidsDropdown';
import HomeDropdown from './HomeDropdown';
import BeautyDropdown from './BeautyDropdown';
import StudioDropdown from './StudioDropdown';
import Profile from './Profile';

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

  const landingPage = () => {
    window.location = '/';
  };

  const mobileView = () => {
    setInMobile(!inMobile);
  };

  return (
    <div className="header">
      <IconButton onClick={landingPage} style={{ paddingLeft: '1em', paddingRight: '1em' }}>
        <img
          src={Logo}
          alt="logo"
          className="header_logo"
        />
      </IconButton>
      <ul
        className={inMobile ? 'nav_links_mobile' : 'nav_links'}
      >
        <li className="nav_items">
          <Link to="/men">
            <div className={`${classes.catContainerMen}`}>
              <MenDropdown />
            </div>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/women">
            <div className={`${classes.catContainerWomen}`}>
              <WomenDropdown />
            </div>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/kids">
            <div className={`${classes.catContainerKids}`}>
              <KidsDropdown />
            </div>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/home">
            <div className={`${classes.catContainerHome}`}>
              <HomeDropdown />
            </div>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/beauty">
            <div className={`${classes.catContainerBeauty}`}>
              <BeautyDropdown />
            </div>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="/studio">
            <div className={`${classes.catContainerStudio}`}>
              <StudioDropdown />
            </div>
          </Link>
        </li>
      </ul>
      <div className="header_search">
        <div className={classes.searchIcon}>
          <SearchIcon fontSize="medium" style={{ color: '#7e7f92' }} />
        </div>
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className="header_icons">
        <Link to="profile">
          <div className="header_user">
            <span>&nbsp;&nbsp;&nbsp;Profile</span>
            <Profile />
          </div>
        </Link>
        <Link to="wishlist">
          <div className="header_user">
            <FavoriteBorderIcon className="header_identity" />
            <span>Whislist</span>
          </div>
        </Link>
        <Link to="cart">
          <div className="header_user">
            <ShoppingBagOutlinedIcon className="header_identity" />
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
