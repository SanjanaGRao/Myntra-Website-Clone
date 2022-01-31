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
  catContainerHome: {
    paddingTop: "1.65em",
    color: "#282c3f",
    fontSize: "14px",
    letterSpacing: "0.5px",
    fontFamily:
      "Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "500",
    textTransform: "uppercase",
    "&:hover ": {
      borderBottom: "4px solid #f2c210",
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
  color: "#f2c210",
  "&:hover": {
    color: "#f2c210",
    background: "#fff",
  },
}));

const Heading2 = styled(MenuItem)(() => ({
  fontSize: "14px",
  fontFamily:
    " Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  color: "#f2c210",
  "&:hover": {
    color: "#f2c210",
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

export default function HomeDropdown() {
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
            <div className={`${classes.catContainerHome}`}>
              <span>
                <b>HOME&LIVING</b>
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
                <b>Bed Linen & Furnishing </b>
              </Heading>          
              <MenuBold> Bedsheets</MenuBold>
              <MenuBold> Bedding Sets</MenuBold>
              <MenuBold> Blankets, Quilts & Dohars</MenuBold>
              <MenuBold> Pillows & Pillow Covers</MenuBold>
              <MenuBold> Bed Covers</MenuBold>
              <MenuBold> Diwan Sets</MenuBold>
              <MenuBold> Chair Pads & Covers</MenuBold>
              <MenuBold> Sofa Covers </MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Flooring </b>
              </Heading>
              <MenuBold>Carpets</MenuBold>
              <MenuBold>Floor Mats & Dhurries</MenuBold>
              <MenuBold>Door Mats</MenuBold>
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
                <b>Bath </b>
              </Heading2>
              <MenuBold2>Bath Towels</MenuBold2>
              <MenuBold2>Hand & Face Towels</MenuBold2>
              <MenuBold2>Beach Towels</MenuBold2>
              <MenuBold2>Towels Set</MenuBold2>
              <MenuBold2>Bath Rugs</MenuBold2>
              <MenuBold2>Bath Robes</MenuBold2>
              <MenuBold2>Bathroom Accessories</MenuBold2>
              <MenuBold2>Shower Curtains</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Lamps & Lighting </b>
              </Heading2>
              <MenuBold2>Floor Lamps</MenuBold2>
              <MenuBold2>Ceiling Lamps</MenuBold2>
              <MenuBold2>Table Lamps</MenuBold2>
              <MenuBold2>Wall Lamps</MenuBold2>
              <MenuBold2>Outdoor Lamps</MenuBold2>
              <MenuBold2>String Lights</MenuBold2>
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
                <b>Home Décor </b>
              </Heading>       
              <MenuBold> Plants & Planters</MenuBold> 
              <MenuBold> Aromas & Candles</MenuBold> 
              <MenuBold> Clocks</MenuBold> 
              <MenuBold> Mirrors</MenuBold> 
              <MenuBold> Wall Décor</MenuBold> 
              <MenuBold> Festive Decor</MenuBold> 
              <MenuBold> Pooja Essentials</MenuBold> 
              <MenuBold> Wall Shelves</MenuBold> 
              <MenuBold> Fountains</MenuBold> 
              <MenuBold> Showpieces & Vases</MenuBold> 
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Cushions & Cushion Covers </b>
              </Heading>
              <Heading>
                <b>Curtains </b>
              </Heading>
              <Heading>
                <b>Home Gift Set </b>
              </Heading>
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
                <b>Kitchen & Table </b>
              </Heading2>
              <MenuBold2>Dinnerware & Serveware</MenuBold2>
              <MenuBold2>Cups and Mugs</MenuBold2>
              <MenuBold2>Bakeware & Cookware</MenuBold2>
              <MenuBold2> Kitchen Storage & Tools</MenuBold2>
              <MenuBold2>Bar & Drinkware</MenuBold2>
              <MenuBold2>Table Covers & Furnishings</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Storeage </b>
              </Heading2>
              <MenuBold2>Organisers</MenuBold2>
              <MenuBold2>Hooks & Holders</MenuBold2>
              <MenuBold2>Laundry Bags</MenuBold2>
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
                <b>Brands </b>
              </Heading>
              <MenuBold>Home Centre</MenuBold>
              <MenuBold>Spaces</MenuBold>
              <MenuBold>D'Decor</MenuBold>
              <MenuBold>Portico New York</MenuBold>
              <MenuBold>Story@Home</MenuBold>
              <MenuBold>Pure Home & Living</MenuBold>
              <MenuBold>Swayam</MenuBold>
              <MenuBold>Raymond Home</MenuBold>
              <MenuBold>Maspar</MenuBold>
              <MenuBold>Corelle</MenuBold>
              <MenuBold>Trident</MenuBold>
              <MenuBold>Cortina</MenuBold>
              <MenuBold>Random</MenuBold>
              <MenuBold>Ellementry</MenuBold>
              <MenuBold>ROMEE</MenuBold>
              <MenuBold>SEJ by Nisha Gupta</MenuBold>
            </div>
          </Grid>
        </Grid>
      </Menu>
    </React.Fragment>
  );
}