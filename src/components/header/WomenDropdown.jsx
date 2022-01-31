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
  catContainerWomen: {
    paddingTop: "1.65em",
    color: "#282c3f",
    fontSize: "14px",
    letterSpacing: "0.5px",
    fontFamily:
      "Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "500",
    textTransform: "uppercase",
    "&:hover ": {
      borderBottom: "4px solid ##fb56c1",
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
  color: "#fb56c1",
  "&:hover": {
    color: "#fb56c1",
    background: "#fff",
  },
}));

const Heading2 = styled(MenuItem)(() => ({
  fontSize: "14px",
  fontFamily:
    " Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
  color: "#fb56c1",
  "&:hover": {
    color: "#fb56c1",
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

export default function WomenDropdown() {
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
            <div className={`${classes.catContainerWomen}`}>
              <span>
                <b>WOMEN</b>
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
                <b>Indian & Fusion Wear </b>
              </Heading>
              <MenuBold>Kurtas & Suits</MenuBold>
              <MenuBold>Kurtis, Tunics & Tops</MenuBold>
              <MenuBold>Ethnic Wear</MenuBold>
              <MenuBold>Leggings, Salwars & Churidars</MenuBold>
              <MenuBold>Skirts & Palazzos</MenuBold>
              <MenuBold>Sarees</MenuBold>
              <MenuBold>Dress Materials</MenuBold>
              <MenuBold>Lehenga Cholis</MenuBold>
              <MenuBold>Dupattas & Shawls</MenuBold>
              <MenuBold>Jackets</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Belts, Scarves & More </b>
              </Heading>
              <Heading>
                <b>Watches & Wearables </b>
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
                <b>Western Wear </b>
              </Heading2>
              <MenuBold2>Dresses</MenuBold2>
              <MenuBold2>Jumpsuits</MenuBold2>
              <MenuBold2>Tops</MenuBold2>
              <MenuBold2>Jeans</MenuBold2>
              <MenuBold2>Trousers & Capris</MenuBold2>
              <MenuBold2>Shorts & Skirts</MenuBold2>
              <MenuBold2>Shrugs</MenuBold2>
              <MenuBold2>Sweaters & Sweatshirts</MenuBold2>
              <MenuBold2>Jackets & Coats</MenuBold2>
              <MenuBold2>Blazers & Waistcoats</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Plus Size </b>
              </Heading2>
              <Heading2>
                <b>Sunglasses & Frames </b>
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
                <b>Footwear </b>
              </Heading>
              <MenuBold>Flats</MenuBold>
              <MenuBold>Casual Shoes</MenuBold>
              <MenuBold>Heels</MenuBold>
              <MenuBold>Boots</MenuBold>
              <MenuBold>Sports Shoes & Floaters</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Sports & Active Wear </b>
              </Heading>
              <MenuBold>Clothing</MenuBold>
              <MenuBold>Footwear</MenuBold>
              <MenuBold>Sports Accessories</MenuBold>
              <MenuBold>Sports Equipment</MenuBold>
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
                <b>Lingerie & Sleepwear </b>
              </Heading2>
              <MenuBold2>Bra</MenuBold2>
              <MenuBold2>Briefs</MenuBold2>
              <MenuBold2>Shapewear</MenuBold2>
              <MenuBold2>Sleepwear & Loungewear</MenuBold2>
              <MenuBold2>Swimwear</MenuBold2>
              <MenuBold2>Camisoles & Thermals</MenuBold2>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading2>
                <b>Beauty & Personal Care </b>
              </Heading2>
              <MenuBold2>Makeup</MenuBold2>
              <MenuBold2>Skincare</MenuBold2>
              <MenuBold2>Premium Beauty</MenuBold2>
              <MenuBold2>Lipsticks</MenuBold2>
              <MenuBold2>Fragrances</MenuBold2>
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
                <b>Gadgets </b>
              </Heading>
              <MenuBold>Smart Wearables</MenuBold>
              <MenuBold>Fitness Gadgets</MenuBold>
              <MenuBold>Headphones</MenuBold>
              <MenuBold>Speakers</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Jewellery </b>
              </Heading>
              <MenuBold>Fashion Jewellery</MenuBold>
              <MenuBold>Fine Jewellery</MenuBold>
              <MenuBold>Earrings</MenuBold>
              <ColoredLine color="rgba(245,245,246,.4)" />
              <Heading>
                <b>Bagpacks </b>
              </Heading>
              <Heading>
                <b>Handbags, Bags & Wallets </b>
              </Heading>
              <Heading>
                <b>Luggages & Trolleys </b>
              </Heading>
            </div>
          </Grid>
        </Grid>
      </Menu>
    </React.Fragment>
  );
}
