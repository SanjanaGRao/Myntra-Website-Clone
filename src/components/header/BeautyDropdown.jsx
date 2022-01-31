import * as React from "react";
import "../header/appbar.css";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  catContainerBeauty: {
    paddingTop: "1.65em",
    color: "#282c3f",
    fontSize: "14px",
    letterSpacing: "0.5px",
    fontFamily:
      "Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "500",
    textTransform: "uppercase",
    "&:hover ": {
      borderBottom: "4px solid #0db7af",
    },
  },
}));

const MenuBold = styled(MenuItem)(() => ({
  fontSize: "14px",
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingRight: "6px",
  fontFamily:
    " Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  color: "#3e4152",
  "&:hover": {
    color: "#3e4152",
    fontWeight: "700",
    background: "white",
  },
}));

const MenuBold2 = styled(MenuItem)(() => ({
  fontSize: "14px",
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingRight: "6px",
  fontFamily:
    " Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  color: "#3e4152",
  "&:hover": {
    color: "#3e4152",
    fontWeight: "700",
    background: "rgba(245,245,246,.4)",
  },
}));

const Heading = styled(MenuItem)(() => ({
  fontSize: "14px",
  fontFamily:
    " Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  color: "#0db7af",
  "&:hover": {
    color: "#0db7af",
    background: "#fff",
  },
}));

const Heading2 = styled(MenuItem)(() => ({
  fontSize: "14px",
  fontFamily:
    " Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  color: "#0db7af",
  "&:hover": {
    color: "#0db7af",
    background: "rgba(245,245,246,.4)",
  },
}));

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      width: "185px"
    }}
  />
);

export default function BeautyDropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            className="nav_items"
            onMouseOver={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <div className={`${classes.catContainerBeauty}`}>
              <span>
                <b>BEAUTY</b>
              </span>
            </div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        onMouseLeave={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transparency: "50%",
              zIndex: 0,
            },
            "&:hover": {
              color: "black",
            },
          },
        }}
      >
        <Grid container>
          <Grid item>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "6px",
                height: "440px",
                width: "220px"
              }}
            >
              <Heading>
                <b>Makeup </b>
              </Heading>
              <MenuBold>Lipstick</MenuBold>
              <MenuBold>Lip Gloss</MenuBold>
              <MenuBold>Lip Liner</MenuBold>
              <MenuBold>Mascara</MenuBold>
              <MenuBold>Eyeliner</MenuBold>
              <MenuBold>Kajal</MenuBold>
              <MenuBold>Eyeshadow</MenuBold>
              <MenuBold>Foundation</MenuBold>
              <MenuBold>Primer</MenuBold>
              <MenuBold>Concealer</MenuBold>
              <MenuBold>Compact</MenuBold>
              <MenuBold>Nail Polish</MenuBold>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                backgroundColor: "rgba(245,245,246,.4)",
                padding: "6px",
                height: "440px",
                width: "220px"
              }}
            >
              <Heading2>
                <b>Skincare, Bath & Body </b>
              </Heading2>
              <MenuBold2>Face Moisturiser</MenuBold2>
              <MenuBold2>Cleanser</MenuBold2>
              <MenuBold2>Masks & Peel</MenuBold2>
              <MenuBold2>Sunscreen</MenuBold2>
              <MenuBold2>Serum</MenuBold2>
              <MenuBold2>Face Wash</MenuBold2>
              <MenuBold2>Eye Cream</MenuBold2>
              <MenuBold2>Lip Balm</MenuBold2>
              <MenuBold2>Body Lotion</MenuBold2>
              <MenuBold2>Body Wash</MenuBold2>
              <MenuBold2>Body Scrub</MenuBold2>
              <MenuBold2>Hand Cream   </MenuBold2>     
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Baby Care </b>
              </Heading2>
              <Heading2>
                <b>Masks </b>
              </Heading2>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "6px",
                height: "440px",
                width: "220px"
              }}
            >
              <Heading>
                <b>Haircare </b>
              </Heading>
              <MenuBold>Shampoo</MenuBold>
              <MenuBold>Conditioner</MenuBold>
              <MenuBold>Hair Cream</MenuBold>
              <MenuBold>Hair Oil</MenuBold>
              <MenuBold>Hair Gel</MenuBold>
              <MenuBold>Hair Color</MenuBold>
              <MenuBold>Hair Serum</MenuBold>
              <MenuBold>Hair Accessory</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Fragrances </b>
              </Heading>
              <MenuBold>Perfume</MenuBold>
              <MenuBold>Deodorant</MenuBold>
              <MenuBold>Body Mist</MenuBold>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                backgroundColor: "rgba(245,245,246,.4)",
                padding: "6px",
                height: "440px",
                width: "220px"
              }}
            >
              <Heading2>
                <b>Appliances </b>
              </Heading2>
              <MenuBold2>Hair Straightener</MenuBold2>
              <MenuBold2>Hair Dryer</MenuBold2>
              <MenuBold2>Epilator</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Men's Grooming </b>
              </Heading2>       
              <MenuBold2>Trimmers</MenuBold2>
              <MenuBold2>Beard Oil</MenuBold2>
              <MenuBold2>Hair Wax</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Beauty Gift & Makeup Set </b>
              </Heading2>       
              <MenuBold2>Beauty Gift</MenuBold2>
              <MenuBold2>Makeup Kit</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Premium Beauty </b>
              </Heading2>    
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Wellness & Hygiene </b>
              </Heading2>          
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "6px",
                height: "440px",
                width: "220px"
              }}
            >
              <Heading>
                <b>Top Brands </b>
              </Heading>
              <MenuBold>Lakme</MenuBold>
              <MenuBold>Maybelline</MenuBold>
              <MenuBold>LOreal</MenuBold>
              <MenuBold>Philips</MenuBold>
              <MenuBold>Bath & Body Works</MenuBold>
              <MenuBold>THE BODY SHOP</MenuBold>
              <MenuBold>Biotique</MenuBold>
              <MenuBold>Mamaearth</MenuBold>
              <MenuBold>MCaffeine</MenuBold>
              <MenuBold>Nivea</MenuBold>
              <MenuBold>Lotus Herbals</MenuBold>
              <MenuBold>LOreal Professionnel</MenuBold>
              <MenuBold>KAMA AYURVEDA</MenuBold>
              <MenuBold>M.A.C</MenuBold>
              <MenuBold>Forest Essentials</MenuBold>
            </div>
          </Grid>
        </Grid>
      </Menu>
    </React.Fragment>
  );
}
