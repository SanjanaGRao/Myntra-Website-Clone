import React, { useState } from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import "../header/appbar.css";
import Logo from "../assets/myntra_logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ViewWeekSharpIcon from "@mui/icons-material/ViewWeekSharp";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "left",
    pointerEvents: "none",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  catContainerMen: {
    "&:hover ": {
      borderBottom: "4px solid #ee5f73",
    },
  },
  catContainerWomen: {
    "&:hover ": {
      borderBottom: "4px solid #fb56c1",
    },
  },
  catContainerKids: {
    "&:hover ": {
      borderBottom: "4px solid #f26a10",
    },
  },
  catContainerHome: {
    "&:hover ": {
      borderBottom: "4px solid #f2c210",
    },
  },
  catContainerBeauty: {
    "&:hover ": {
      borderBottom: "4px solid #0db7af",
    },
  },
  catContainerStudio: {
    "&:hover ": {
      borderBottom: "4px solid #ff3f6c",
    },
  },
  newSign: {
    color: "#ff3f6c",
    top: "-0.4rem",
    fontSize: "65%",
    lineHeight: "0",
    position: "relative",
    verticalAlign: "baseline",
    textTransform: "uppercase",
  },
}));

const Appbar = () => {
  const [inMobile, setInMobile] = useState(false);
  const classes = useStyles();

  const landingPage = () => {
    window.location = "/";
  };

  return (
    <div className="header">
      <img
        src={Logo}
        alt="logo"
        className="header_logo"
        onClick={landingPage}
      />
      <ul
        className={inMobile ? "nav_links_mobile" : "nav_links"}
        onClick={() => {
          setInMobile(false);
        }}
      >
        <li className="nav_items">
          <Link to="" className={`${classes.catContainerMen}`}>
            <b>Men</b>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="" className={`${classes.catContainerWomen}`}>
            <b>Women</b>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="" className={`${classes.catContainerKids}`}>
            <b>Kids</b>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="" className={`${classes.catContainerHome}`}>
            <b>Home&Living</b>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="" className={`${classes.catContainerBeauty}`}>
            <b>Beauty</b>
          </Link>
        </li>
        <li className="nav_items">
          <Link to="" className={`${classes.catContainerStudio}`}>
            <b>Studio</b>
            <span className={classes.newSign}>
              <b>New</b>
            </span>
          </Link>
        </li>
      </ul>
      <div className="header_search">
        <div className={classes.searchIcon}>
          <SearchIcon fontSize="medium" style={{ color: "#7e7f92" }} />
        </div>
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className="header_icons">
        <Link to="">
          <div className="header_user">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile</span>
            <Profile />
          </div>
        </Link>
        <Link to="">
          <div className="header_user">
            <FavoriteBorderIcon className="header_identity" />
            <span>Whislist</span>
          </div>
        </Link>
        <Link to="">
          <div className="header_user">
            <LocalMallOutlinedIcon className="header_identity" />
            <span>Bag</span>
          </div>
        </Link>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setInMobile(!inMobile);
        }}
      >
        {inMobile ? <CloseIcon /> : <ViewWeekSharpIcon fontSize="small" />}
      </div>
    </div>
  );
};

export default Appbar;
